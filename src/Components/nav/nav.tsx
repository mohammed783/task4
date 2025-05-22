import './nav.css'; 
import logo from '../../assets/Group 41.png' ; 
import burg_icon from '../../assets/icons/Group.svg' ; 

export default function Navbar() {
  return (
    <div className=' nav-con'>
      <nav className='container'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a> </li>
          <li><a href="#">New Proprty</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button>
          Login
        </button>
        <div className="nav-icon">
          <img src={burg_icon} alt="burger icon" />
        </div>
      </nav> 
    </div>
  )
}
