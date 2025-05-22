import './How.css' ; 
import hous1 from '../../../assets/icons/Frame.svg'
import hous2 from '../../../assets/icons/Group 1166.svg'
import hous3 from '../../../assets/icons/how,house.svg'

export default function How() {
  return (
    <div className='container how'>
      <h3>How it Works</h3>
      <p className='gray'>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
      <div className="box-dad">
        <div className="box">
            <img src={hous1} alt="icon" />
            <h4>Search Apartment</h4>
            <p className='box-p gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.</p>
        </div>
        <div className="box active">
            <img src={hous2} alt="icon" />
            <h4>Select Apartment</h4>
            <p className='box-p '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.</p>
        </div>
        <div className="box">
            <img src={hous3} alt="icon" />
            <h4>Confirm Apartment</h4>
            <p className='box-p gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.</p>
        </div>
      </div>
    </div>
  )
}
