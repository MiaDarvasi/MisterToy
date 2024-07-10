import { Link } from 'react-router-dom'

import barbie from '../assets/img/barbie.png'
import gijoe from '../assets/img/gijoe.png'
import racecar from '../assets/img/racecar.png'
import plane from '../assets/img/plane.png'
import truck from '../assets/img/truck.png'


export function ToyPreview({ toy }) {

    let currToySrc
    if(toy.name === 'Barbie') currToySrc = barbie
    else if(toy.name === 'GI-Joe') currToySrc = gijoe
    else if(toy.name === 'Race Car') currToySrc = racecar
    else if(toy.name === 'Model Plane') currToySrc = plane
    else if(toy.name === 'Truck') currToySrc = truck

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