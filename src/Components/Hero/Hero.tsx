import './Hero.css';
import loc from '../../assets/icons/location.png' ; 
import dollar from '../../assets/icons/dollar-circle.png' ;
import house from '../../assets/icons/house.svg' ; 
import bulding from '../../assets/modern-residential-building-transformed 1.png' ; 

export default function Hero() {
  return (
    <div className='hero-dad'>
      <div className="hero container">
        <h2>Discover a place
        you will love to live</h2>
        <p className='gp'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Imperdiet tempus felis vitae sit est quisque.
        </p>
        <div className="hero-pos">
            <div className="hero-info">
                <div className="card">
                    <img src={loc} alt="icon" />
                    <div className="c-i">
                        <div className="c-t">
                        Location
                        </div>
                        <p className='c-ans'>
                        Ahmedabad, India
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={dollar} alt="icon" />
                    <div className="c-i">
                        <div className="c-t">
                        Price
                        </div>
                        <p className='c-ans'>
                        $1000 - $10,000
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={house} alt="icon" />
                    <div className="c-i">
                        <div className="c-t">
                        Type of Property
                        </div>
                        <p className='c-ans'>
                        Apartment
                        </p>
                    </div>
                </div>
            </div>
            <div className='buld'>
            <img src={bulding} alt="bulding" />
            </div>
            
        </div>
      </div>
    </div>
  )
}
