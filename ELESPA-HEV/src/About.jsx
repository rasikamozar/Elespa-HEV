import './About.css'
import Image from './Database/logo.png'
import a10 from './Database/images/a10.jpg'
import a9 from './Database/images/a9.jpg'
import a8 from './Database/images/a8.jpg'
import c1 from './Database/images/c1.jpg'
import c2 from './Database/images/c2.jpg'
import c3 from './Database/images/c3.jpg'
import a4 from './Database/images/a4.jpg'
import a5 from './Database/images/a5.jpg'
import a6 from './Database/images/a6.jpg'
import a7 from './Database/images/a7.jpg'
import a11 from './Database/images/a11.jpg'
import a12 from './Database/images/a12.jpg'
import a13 from './Database/images/a13.jpg'
import a14 from './Database/images/design_team1.jpg'
import a15 from './Database/images/suraj.jpg'
import a16 from './Database/images/ved.jpg'

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
                    <h1 className='start-up'>Best Start-up</h1>
                    <div className='mag'>
                    <div className='news'><img src={a10} className="card-img-top" alt="image"></img></div>
                    <div className='news'><img src={a9} className="card-img-top" alt="image"></img></div>
                    <div className='news'><img src={a8} className="card-img-top" alt="image"></img></div>
                    </div>
     </div>
         <div className='fourth'>
          <h1 className='core'>Core</h1>
          <div class="card mb-3" >
  <div class="row g-0">
    <div className='team'>
    <div class="col-md-2 pic">
      <img src={c1} class="img-fluid rounded-start" alt="Image" ></img>
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h5 class="card-title">Prathamesh Choudhary</h5>
        <p class="card-text"><small class="text-body-secondary">Founder & CEO ELESPA HEV Pvt. Ltd.</small></p>
        <p class="card-text">Our vision is to "Electrifying India" by converting existing vehicles into Hybrid Electric Vehicles. So that we can reduce the pollution and consumption of the Fossil fuels.</p>
      </div>
    </div>
    </div>
    <div className='team'>
    <div class="col-md-4">
      <div class="card-body">
        <h5 class="card-title">Rohit Shidid</h5>
        <p class="card-text"><small class="text-body-secondary">COO ELESPA HEV Pvt. Ltd.</small></p>
        <p class="card-text">We here at ElESPA HEV believe in Green and Clean energy, thus making a better and cleaner environment not only for us but also for the future generations in a way that is sustainable.</p>
        
      </div>
    </div>
    <div class="col-md-2 pic">
      <img src={c2} class="img-fluid rounded-start" alt="..."></img>
    </div></div>
    <div className='team'>
    <div class="col-md-2 pic">
      <img src={c3} class="img-fluid rounded-start" alt="..."></img>
    </div>
    
    <div class="col-md-4">
      <div class="card-body">
        <h5 class="card-title">Krushal Mahajan</h5>
        <p class="card-text"><small class="text-body-secondary">CTO ELESPA HEV Pvt. Ltd.</small></p>
        <p class="card-text">Our vision is to create a sustainable ecosystem for existing vehicles by converting them to hybrid electric vehicles. Such that we can achieve our ultimate goal  of being carbon-neutral</p>
      </div>
    </div>
    </div>
  </div>
</div>
<div className='extra'>
       <div className='design'>
        <div className='des'><img src={a14} className="card-img-top" alt="image"></img></div>
        <div className='des'><img src={a15} className="card-img-top" alt="image"></img></div>
        <div className='des'><img src={a16} className="card-img-top" alt="image"></img></div>
       </div>
</div>
         </div>
         <div className='fifth'>
         <div class="outer-circle">
    
    
    <div class="row">
      <div class="circle"><img src={a4}  alt="Image"></img></div>
      <div class="circle"><img src={a11}  alt="Image"></img></div>
    </div>

    <div class="row">
      <div class="circle"><img src={a6}  alt="Image"></img></div>
      <div class="circle"><h2> Achievements</h2></div>
      <div class="circle"><img src={a7}  alt="Image"></img></div>
    </div>

    <div class="row">
      <div class="circle"><img src={a5}  alt="Image"></img></div>
      <div class="circle"><img src={a12}  alt="Image"></img></div>
    </div>
  </div>
</div>

 
   </div>
    );
}