
import { NavLink } from 'react-router-dom'


export function AppHeader() {
    return (
        <header className="app-header">
            <img src="./src/assets/img/toy.svg"/>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                </nav>
        </header>
    )
}
