// Steven Gonell
//11/13/2026
import Logo from "../Components/Logo"
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import Main from "../Components/main"
import Title from "../Components/Title"
import CallToArms from "../Components/CallToArms"
function StartPage() {
    return (
        <div>
            <Navbar />
            <Logo />
            <Header />
            <Main />
            <Title />
            <CallToArms />
        </div>
        )
    }

export default StartPage