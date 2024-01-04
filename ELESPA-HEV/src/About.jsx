import './About.css'
import Image from './Database/logo.png'
import a10 from './Database/images/a10.jpg'
import a9 from './Database/images/a9.jpg'
import a8 from './Database/images/a8.jpg'
export default function About(){
    return(
        <div className='about'>
              <div className='first'>
                   <div className='content'><h1 className='slogan'><b>Electrifying India...</b></h1>
                            <p className='Info'>ELESPA HEV is a company which makes any on-petrol running<br></br>
                             vehicle Hybrid Electric. It is way better than complete-electric vehicles<br></br>
                                  as there is no need for charging stations. Our Hybrid Electricsystem<br></br>
                                   has a portable battery,so you can charge it anywhere Simply put -<br></br>
                                    Efficient, Convenient, and Inexpensive.Our Hybrid Electric System Space<br></br>
                                     between Electric and System.</p></div>
                   <div className='picture'><img src={Image} height={400} width={400}></img></div>
              </div>
              <div className='second'>
                      <div className='vision'><h2><b><i className="fa-solid fa-eye-low-vision"></i>Vision</b></h2><br></br>
                      <p>Our Vision is to Electrify India...</p>
                      </div>
                      <div className='Mission'><h2><b><i className="fa-solid fa-bullseye"></i>Mission</b></h2><br></br>
                      <p>Our Mission is to Electrify India...</p>
                      </div>
              </div>
              <div className='third'>
                    <h2>Best Start-up</h2>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={a10} class="card-img-top" alt="image"></img>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={a9} class="card-img-top" alt="image"></img>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={a8} class="card-img-top" alt="image"></img>
    </div>
          </div>
      </div>
     </div>
   </div>
    );
}