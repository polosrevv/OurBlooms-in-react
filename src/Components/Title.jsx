// Steven Gonell
// 11/13/2026
import floralInstallation from "../assets/Floral-Installation.png"
import nativePlants from "../assets/nativePlants.png"
import flowers from "../assets/flowers.png"
import Stuff from "./Stuff"
function Title() {
    return (
        <>
        <div className="title-block">
            <h1 className="heading1 title-heading">WHAT WE DO</h1>
            <p className="paragraph1 title-copy">We bring a touch of that simple magic into your world.</p>
            <hr></hr>
        </div>
        <div className="Stuff-list">
            <Stuff
                number="1"
                image={floralInstallation}
                imageAlt="Floral installation"
                title="FLORAL INSTALLATIONS"
                description="Living art for homes, business, and events."
            />
            <Stuff
                number="2"
                image={nativePlants}
                imageAlt="Plants"
                title="NATIVE PLANT ARRANGEMENTS"
                description="Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations."
            />
            <Stuff
                number = "3"
                image = {flowers}
                imageAlt = "Flowers"
                title = "CUSTOM FLORAL CONCEPTS"
                description = "Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations."
            />
        </div>
        <hr></hr>
        </>
    )
}

export default Title