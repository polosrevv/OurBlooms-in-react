// Steven Gonell
// 11/13/2026
import '../Styles/App.css'
import '../Styles/Navbar.css'

function Services({ name, description, image }) {
    return (
        <div className="service-item">
            <h1 className="heading1 service-title">{name}</h1>
            <p className="paragraph1 service-description">{description}</p>
            <img className="service-image" src={image} alt={name} />
        </div>
    )
}

export default Services