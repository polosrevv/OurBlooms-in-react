import Owner from '../assets/LilySmith.png'
import mini from '../assets/mini.png'
import flowers from '../assets/flowers.png'
import CallToArms from './CallToArms'
function AboutOwner() {
    return (
        <div className = "Owner">
            <div className = "Owner-Image">
                <img className = "Owner-Image" src = {Owner} alt = "Owner" />
            </div>
            <div className = "Owner-Text">
                <h3 className = "Heading3">LILY SMITH</h3>
                <p className = "Paragraph1">Owner</p>
            </div>
            <div className = "Why-We-Do-It">
                <h2 className = "Heading2">Our Blooms was founded in honor of Lily Smith's loving aunts, Teresa and Beth</h2>
                <img className = "mini" src = {mini} alt = "flowers" />
            </div>
            <div className = "Owner-Description">
                <p className = "Paragraph2">Lily’s journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil. Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.</p>
            </div>
            <div className = "Big-flower-image">
                <img className = "Big-flower-image" src = {flowers} alt = "flowers" />
            </div>
            <div className = "call">
                <p className = "Paragraph2">From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality. Discover how we can add a touch of natural beauty to your next event.</p>
            </div>
            <div className = "Book-Now">
                <button className = "Book-Now">BOOK A CONSULTATION</button>
            </div>
            <CallToArms />
        </div>
        
    )
}
export default AboutOwner