import { useSelector, useDispatch } from 'react-redux'
import barbie from "../assets/img/barbie.png"

export function HomePage() {


    return (
        <section className="home-page">
            <h2>Miss Barbie</h2 >
            <img src={barbie}/>
        </section >
    )
}