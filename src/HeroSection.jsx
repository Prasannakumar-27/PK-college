import './index.css';
import image from './assets/herosection.jpg'

function HeroSection() {
    return(
        <div id='home' className='herosection'>
            <img src={image} alt='background image'/>
        </div>
    )
 }
 export default HeroSection