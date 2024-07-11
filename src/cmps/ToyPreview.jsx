import { Link } from 'react-router-dom'

import barbiecasual from '../assets/img/barbiecasual.png'
import barbiefancy from '../assets/img/barbiefancy.png'
import barbieglitter from '../assets/img/barbieglitter.png'
import barbiepink from '../assets/img/barbiepink.png'
import barbieprincess from '../assets/img/barbieprincess.png'

export function ToyPreview({ toy }) {

    let currToySrc
    if(toy.name === 'Casual Barbie') currToySrc = barbiecasual
    else if(toy.name === 'Fancy Barbie') currToySrc = barbiefancy
    else if(toy.name === 'Glitter Barbie') currToySrc = barbieglitter
    else if(toy.name === 'Pink Barbie') currToySrc = barbiepink
    else if(toy.name === 'Princess Barbie') currToySrc = barbieprincess

    return (
        <article>
            <h4>{toy.name}</h4>
            <img src={currToySrc} />
            <section>
            <p>Price: <span>${toy.price.toLocaleString()}</span></p>
            <section className="edit-links">
                <Link to={`/toy/${toy._id}`}>Details</Link> |
                <Link to={`/toy/edit/${toy._id}`}>Edit</Link>
            </section>
            </section>
        </article>
    )
}