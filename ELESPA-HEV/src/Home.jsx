import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx';
import Base from './Base.jsx';
import About from './About.jsx';
import Reviews from './Reviews.jsx';
import Services from './Services.jsx';

export default function Home(){
    return(
        <>
          <Navbar/>
           <Base/>
           <About/>
           <Services/>
           <Reviews/>
           <Footer/>
        </>
    );
}