import {NavLink} from "react-router-dom"
import './App.css'

function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to= "/bookshop">Bookshop</NavLink>
            <NavLink to= "/adminPortal">AdminPortal</NavLink>
        </nav>
    )
}

export default NavBar