import './App.css'
import Find from './Components/Find/Find'
import Hero from './Components/Hero/Hero'
import How from './Components/Hero/How/How'
import TrendingSection from './Components/Most/Most'
import Navbar from './Components/nav/nav'
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
///////////////////////////////////////
import RealEstateDeals from './Components/Best/Best'
import r1 from './assets/res1.jpg';
import r2 from './assets/res2.jpg';
import r3 from './assets/res3.jpg';
import c1 from './assets/com1.jpg';
import c2 from './assets/com2.jpg';
import c3 from './assets/com3.jpg';
import a1 from './assets/agr1.jpg';
import a2 from './assets/agr2.jpg';
import a3 from './assets/agr3.jpg';
import i1 from './assets/ind1.jpg';
import i2 from './assets/ind2.jpg';
import i3 from './assets/ind3.jpg';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <How />
      <Find />
    <TrendingSection images={[img1, img2, img3, img4, img5, img6]} />
    <RealEstateDeals
      residential={[r1, r2, r3]}
      commercial={[c1, c2, c3]}
      agriculture={[a1, a2, a3]}
      industrial={[i1, i2, i3]}
    />
    </>
  )
}
export default App
