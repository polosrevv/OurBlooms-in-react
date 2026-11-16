import Navbar from '../Components/Navbar'
import SeasonalArrangements from '../Components/Seasonal_Arrangement'
import Services from '../Components/Services'
import DawnBloom from '../assets/Dawn_Bloom.png'
import '../Styles/App.css'
import '../Styles/Navbar.css'
function Menu() {
  return (
    <div className="menu">
      <Navbar />

      <div className="menu-header">
        <h1 className="heading1">GALLERY</h1>
      </div>

      <div className="seasonal-section">
        <div className="category-header">
          <h3 className="paragraph1">SEASONAL ARRANGEMENTS</h3>
        </div>

        <div className="seasonal-arrangements">
          <SeasonalArrangements name="DAWN BLOOM" price={55} image={DawnBloom} />
          <SeasonalArrangements name="SOLSTICE STEMS" price={30} image={DawnBloom} />
          <SeasonalArrangements name="Whisper Green" price={30} image={DawnBloom} />
          <SeasonalArrangements name="Clarity Petals" price={30} image={DawnBloom} />
        </div>
      </div>

      <div className="services-section">
        <div className="category-header">
          <h3 className="heading3">SERVICES</h3>
        </div>

        <div className="services">
          <Services
            name="FLORAL INSTALLATIONS"
            description="We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events."
            image={DawnBloom}
          />
          <Services
            name="NATIVE PLANT ARRANGEMENTS"
            description="Our selection of locally sourced flora brings natural resilience and effortless elegance to your home."
            image={DawnBloom}
          />
          <Services
            name="CUSTOM FLORAL CONCEPTS"
            description="Your vision, our blooms. We build arrangements that are both personal and exquisitely simple."
            image={DawnBloom}
          />
        </div>
      </div>

      <div className="call-to-action">
        <h3 className="heading3">WORK WITH US</h3>
        <h1 className="heading1">Discover how we can add a touch of natural beauty to your next event</h1>
        <button className="About-us">ABOUT US</button>
      </div>
    </div>
  )
}

export default Menu