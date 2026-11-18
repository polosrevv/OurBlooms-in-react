// Steven Gonell
// 11/13/2026
function Stuff({ number, image, imageAlt, title, description }) {
    return (
        <div className="Stuff-component">
            <h1 className="heading2">{number}</h1>
            <img className="Stuff-image" src={image} alt={imageAlt} />
            <h2 className="heading1">{title}</h2>
            <p className="paragraph1">{description}</p>
        </div>
    )
}

export default Stuff
