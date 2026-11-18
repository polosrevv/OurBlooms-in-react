// Steven Gonell
// 11/13/2026
import '../Styles/App.css'
import '../Styles/Navbar.css'

function Seasonal_Arrangements({ name, price, image }) {
    return (
        <div className="seasonal-item">
            <h2 className="heading2 seasonal-title">{name}</h2>
            <p className="paragraph1 seasonal-price">${price}/Bunch</p>
            <img className="seasonal-image" src={image} alt={name} />
        </div>
    )
}

export default Seasonal_Arrangements