
import { NavLink } from 'react-router-dom'
import barbie from "../assets/img/barbie.png"


export function AppHeader() {
    return (
        <header className="app-header">
            <img src={barbie}/>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/dashboard" >Dashboard</NavLink>
                    <NavLink to="/toy" >Barbies</NavLink>
                </nav>
        </header>
    )
}
