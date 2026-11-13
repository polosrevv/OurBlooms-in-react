import headerImage from '../assets/Header.png'

function Header() {
    return (
        <header>
            <img className="header-image" src={headerImage} alt="Header" />
        </header>
    )
}

export default Header