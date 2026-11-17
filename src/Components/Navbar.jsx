import { NavLink } from 'react-router-dom'
import '../Styles/Navbar.css'
function Navbar() {
    return (
        <nav>
            <h1 className="name"><NavLink to="/">Jannat</NavLink></h1>
            <ul className="nav-links">
                <li className="menu-item"><NavLink to="/menu">MENU</NavLink></li>
                <li className="menu-item"><NavLink to="/about">ABOUT</NavLink></li>
                <li className="menu-item"><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
            <hr></hr>
        </nav>
    )
}

export default Navbar