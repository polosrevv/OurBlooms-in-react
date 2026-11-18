// Steven Gonell
// 11/13/2026
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useScreenSize } from '../Hooks/useScreenSize'
import icons from '../assets/Icons.png'
import '../Styles/Navbar.css'

function Navbar() {
    const screenWidth = useScreenSize()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isMobile = screenWidth < 768

    return (
        <nav>
            <h1 className="name"><NavLink to="/">Jannat</NavLink></h1>
            {isMobile && (<button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}><img src={icons} alt="" /></button>)}
            {(!isMobile || isMenuOpen) && (
                <ul className="nav-links" id="nav-links">
                    <li className="menu-item"><NavLink to="/menu" onClick={() => setIsMenuOpen(false)}>MENU</NavLink></li>
                    <li className="menu-item"><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</NavLink></li>
                    <li className="menu-item"><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</NavLink></li>
                </ul>
            )}
            <hr></hr>
        </nav>
    )
}

export default Navbar