import { Link } from 'react-router-dom'
import BlueFlower from '../assets/blueFlower.png'
import Bottom from '../assets/Bottom.png'
function CallToArms() {
    return (
        <section className="call-to-arms">
            <img className="blue-image" src={BlueFlower} alt="Blue Flower" />
            <p className="paragraph1">WORK WITH US</p>
            <h1 className="heading1">Discover how we can add a touch of natural beauty to your next event.</h1>
            <Link className="call-to-arms-button" to="/about">About Us</Link>
            <div className="End">
                <img className="bottom-image" src={Bottom} alt="Flowers" />
            </div>
        </section>
    )
}

export default CallToArms;