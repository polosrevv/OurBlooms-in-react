import Navbar from '../Components/Navbar'
import SeasonalArrangements from '../Components/Seasonal_Arrangement'
import Services from '../Components/Services'
import DawnBloom from '../assets/Dawn_Bloom.png'
import Solstice from '../assets/Solstice.png'
import WhisperGreen from '../assets/Whisper.png'
import Clarity from '../assets/Clarity.png'
import CallToArms from '../Components/CallToArms'
import River from '../assets/River.png'
import Ember from '../assets/Ember.png'
import Skyline from '../assets/Skyline.png'
import flowers from '../assets/flowers.png'
import FloralAlt from '../assets/FloralAlt.png'
import nativePlants from '../assets/nativePlants.png'
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
          <SeasonalArrangements name="SOLSTICE STEMS" price={30} image={Solstice} />
          <SeasonalArrangements name="Whisper Green" price={30} image={WhisperGreen} />
          <SeasonalArrangements name="Clarity Petals" price={30} image={Clarity} />
          <SeasonalArrangements name="River Blooms" price={30} image={River} />
          <SeasonalArrangements name = "MOONLIGHT MEADOW" price = {120} image = {Solstice} />
          <SeasonalArrangements name="Ember Stems" price={55} image={Ember} />
          <SeasonalArrangements name="Skyline Petals" price={75} image={Skyline} />
          <SeasonalArrangements name = "STILL WATERS" price = {250} image = {flowers} />
        </div>
      </div>
    <hr></hr>
      <div className="services-section">
        <div className="category-header">
          <h3 className="heading3">SERVICES</h3>
        </div>

        <div className="services">
          <Services
            name="FLORAL INSTALLATIONS"
            description="We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events."
            image={FloralAlt}
          />
          <Services
            name="NATIVE PLANT ARRANGEMENTS"
            description="Our selection of locally sourced flora brings natural resilience and effortless elegance to your home."
            image={nativePlants}
          />
          <Services
            name="CUSTOM FLORAL CONCEPTS"
            description="Your vision, our blooms. We build arrangements that are both personal and exquisitely simple."
            image={flowers}
          />
        </div>
      </div>

      <div className="call-to-action">
        <CallToArms />
      </div>

    </div>
  )
}

export default Menu