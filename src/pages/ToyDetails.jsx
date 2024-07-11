import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

import { toyService } from '../services/toy.service.js'
import { showErrorMsg } from '../services/event-bus.service.js'

import barbiecasual from '../assets/img/barbiecasual.png'
import barbiefancy from '../assets/img/barbiefancy.png'
import barbieglitter from '../assets/img/barbieglitter.png'
import barbiepink from '../assets/img/barbiepink.png'
import barbieprincess from '../assets/img/barbieprincess.png'

export function ToyDetails() {
    const [toy, setToy] = useState(null)
    const [currToySrc, setCurrToySrc] = useState(null)
    const { toyId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    }, [toyId])

    function loadToy() {
        toyService.getById(toyId)
            .then((toy) => {
                setToy(toy)
                switch (toy.name) {
                    case 'Casual Barbie':
                        setCurrToySrc(barbiecasual)
                        break
                    case 'Fancy Barbie':
                        setCurrToySrc(barbiefancy)
                        break
                    case 'Glitter Barbie':
                        setCurrToySrc(barbieglitter)
                        break
                    case 'Pink Barbie':
                        setCurrToySrc(barbiepink)
                        break
                    case 'Princess Barbie':
                        setCurrToySrc(barbieprincess)
                        break
                    default:
                        setCurrToySrc(null)
                        break
                }
            })
            .catch((err) => {
                console.error('Error loading toy details:', err);
                showErrorMsg('Cannot load toy')
                navigate('/toy')
            });
    }

    if (!toy) return <div>Loading...</div>

    return (
        <section className="toy-details">
            <h1>{toy.name}</h1>
            <h5>Price: ${toy.price}</h5>
            {currToySrc && <img src={currToySrc} alt={toy.name} />}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas cumque tempore, aperiam sed dolorum
                rem! Nemo quidem, placeat perferendis tempora aspernatur sit, explicabo veritatis corrupti perspiciatis
                repellat, enim quibusdam!
            </p>
            <button><Link to={`/toy/edit/${toy._id}`}>Edit</Link></button>
            <button><Link to={`/toy`}>Back</Link></button>
        </section>
    );
}
