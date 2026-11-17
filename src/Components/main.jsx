import carouselImage from '../assets/Carousel.png'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <main className="main-section">
            <div className="main-text">
                <p className="heading3">WHO WE ARE</p>
                <h1 className="heading2">We're OurBlooms and we're here to help you find your floral story.</h1>
                <Link className="About-us" to="/about">About Us</Link>
            </div>
            <div className="Carousel">
                <img className="carousel-image" src={carouselImage} alt="Carousel" />
            </div>
        </main>
    )
}

export default Main