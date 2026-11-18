// Steven Gonell
// //11/16/2026
import Navbar from '../Components/Navbar'
import AboutHeader from '../Components/AboutHeader'
import AboutOwner from '../Components/AboutOwner'
function About() {
    return (
        <div className="about-page">
            <Navbar />
            <div className="about-layout">
                <AboutHeader />
                <AboutOwner />
            </div>
        </div>
    )
}

export default About   