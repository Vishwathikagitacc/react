import './Home.css'
import ABC from './images/ABC.JPEG'
import VVV from './images/VVV.jpg'
import VV from './images/VV.JPEG'
import I from './images/I.jpeg'
import AZ from './images/AZ.jpeg'
import AA from './images/AA.jpeg'
import BB from './images/BB.jpeg'
import CC from './images/CC.jpeg'
import DD from './images/DD.jpeg'
// import EE from './images/EE.jpeg'

import b11 from './images/b11.jpeg'
import a from './images/a.jpeg'
import b  from './images/b.jpeg'
import c from './images/c.jpeg'
import d from './images/d.jpeg' 
import e from './images/e.jpeg'




const Home = () => {
    return (
        <div><br />
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carou1sel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <img src={ABC} class="d-block w-100" alt="..." style={{width:'100%',height:'500px'}}/>
                        
                       
                    </div>
                    <div class="carousel-item">
                        <img src={VVV} class="d-block w-100" alt="..." style={{width:'100%',height:'500px'}}/>
                    </div>
                    <div class="carousel-item">
                        <img src={VV} class="d-block w-100" alt="..."style={{width:'100%',height:'500px'}} />
                    </div>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div><br /><br />

            

           

            <div className="container-fluid d-flex justify-content-center" id="white">
                <div className="row g-4">

                    <div className="col-12 text-center">
                        <h3 style={{color:'darkblue',fontFamily:'bold',fontSize:'500'}}>Special Items</h3>
                        <h3>Our Special Icecreams</h3>
                    </div>


                   



                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center g-3">

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center" id="style"><br />
                                <div class="card car" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={I} class="card1-img-top" alt="..." width={'100%'} height={'200PX'}/>
                                        <p className="p1">Rs 370</p>

                                    </div>

                                    <div class="card-body">
                                        <h4>SOFT SERVE</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center " id="style"><br />
                                <div class="card car" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={AZ} class="card1-img-top" alt="..."width={'100%'} height={'200PX'} />
                                        <p className="p1">Rs 290</p>

                                    </div>

                                    <div class="card-body">
                                        <h4>PHILADELPHIA</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center" id="style"><br />
                                <div class="card cars" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={AA} class="card1-img-top" alt="..." width={'100%'} height={'200PX'}/>
                                        <p className="p1">Rs 290</p>
                                    </div>

                                    <div class="card-body">
                                        <h4>CHOCOLATE</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center" id="style"><br />
                                <div class="card car" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={BB} class="card1-img-top" alt="..."width={'100%'} height={'200PX'} />
                                        <p className="p1">Rs 310</p>

                                    </div>

                                    <div class="card-body">
                                        <h4>COFFEE CANDY</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center" id="style"><br />
                                <div class="card car" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={CC} class="card1-img-top" alt="..."width={'100%'} height={'200PX'} />
                                        <p className="p1">Rs 340</p>

                                    </div>

                                    <div class="card-body">
                                        <h4>STRAWBERRY</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center" id="style"><br />
                                <div class="card car" style={{ width: "20rem" }}>
                                    <div className="ims">
                                        <img src={DD} class="card1-img-top" alt="..."width={'100%'} height={'200PX'} />
                                        <p className="p1">Rs 340</p>

                                    </div>

                                    <div class="card-body">
                                        <h4>BISCUIT STRAWBERRY</h4>
                                        <p>Lorem ipsum dolor sit amet, cnsecttert adipiscing elit. numc tellus trupis</p>
                                        <div className='d-flex justify-content-between'>
                                            <div className='of'><p>Delivery Fee :$10</p></div>
                                            <div className='off'><button>+</button><button>cr</button></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br />

            {/* .................................................................................. */}

           

          


         

            {/* part 11 */}
            <div className="container-fluid d-flex justify-content-center" id="blue">
                <div className="row g-3 " id="bird">
                    <div class="col col-sm-12 col-md-3 col-ld-3" id="ph">
                        <h4>Spice & Delight</h4>
                        <p>lorem ispeam dolar sit consectetur, ame adipiscing elit,sed do</p>
                        <h6>5451 street UK 5th cross</h6>
                        <h6>icecreamshop@.com shop@12.com</h6>
                        <h6>+12334576869 8769</h6>

                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3 " id="hh">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About us</li>
                            <li>Menu</li>
                            <li>Service</li>
                            <li>Gallery</li>
                            <li>Contact Us</li>
                        </ul>

                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3">
                        <h4>Instagram</h4>
                        <div className="row g-2" style={{ marginTop: "18px" }}>
                            <img src={b11} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                            <img src={a} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                            <img src={b} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                            <img src={c} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                            <img src={d} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                            <img src={e} class="card8-img-top" alt="..." style={{ width: "80px", height: "80px" }} />
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-3 col-lg-3" id="ph">
                        <h4>Subscribe</h4>
                        <p>lorem ispeam dolosr of connections adding left, to the send characters
                            including at laburs costs
                        </p>
                        <div>
                            <form>
                                <input type="text" placeholder="Enter your Email" className="inputs"></input>
                                <button className="bts" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <br /><br /><br />

                    <div className='col col-sm-12 col-md-12 col-lg-12 text-center'>
                        <br />
                        <h6>© Copyright Cafeu. 2024 All Right Reserved</h6>

                    </div>

                </div>

            </div>










        </div>















        

    )

}

export default Home