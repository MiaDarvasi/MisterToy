
import { NavLink } from 'react-router-dom'
import toy from "../assets/img/toy.svg"


export function AppHeader() {
    return (
        <header className="app-header">
            <img src={toy}/>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                </nav>
        </header>
    )
}
