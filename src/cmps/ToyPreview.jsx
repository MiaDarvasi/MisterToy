import { Link } from 'react-router-dom'

export function ToyPreview({ toy }) {
    console.log(toy)

    return (
        <article>
            <h4>{toy.name}</h4>
            <img src={toy.imgSrc} />
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