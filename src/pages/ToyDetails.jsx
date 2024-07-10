import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

import { toyService } from '../services/toy.service.js'
import { showErrorMsg } from '../services/event-bus.service.js'

import barbie from '../assets/img/barbie.png'
import gijoe from '../assets/img/gijoe.png'
import racecar from '../assets/img/racecar.png'
import plane from '../assets/img/plane.png'
import truck from '../assets/img/truck.png'

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
                    case 'Barbie':
                        setCurrToySrc(barbie)
                        break
                    case 'GI-Joe':
                        setCurrToySrc(gijoe)
                        break
                    case 'Race Car':
                        setCurrToySrc(racecar)
                        break
                    case 'Model Plane':
                        setCurrToySrc(plane)
                        break
                    case 'Truck':
                        setCurrToySrc(truck)
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
            <h1>Toy Name: {toy.name}</h1>
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
