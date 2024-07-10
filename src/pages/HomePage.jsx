import { useSelector, useDispatch } from 'react-redux'
import toy from "../assets/img/toy.svg"

export function HomePage() {


    return (
        <section className="home-page">
            <h2>Mister Toy</h2 >
            <img src={toy}/>
        </section >
    )
}