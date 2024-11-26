import './About.css'

import imgg from './images/imgg.jpeg'
import e1 from './images/e1.jpeg'
import e2 from './images/e2.jpeg'
import h1 from './images/h1.png'
import h2 from './images/h2.png'
import h3 from './images/h3.png'
import b11 from './images/b11.jpeg'
import a from './images/a.jpeg'
import b  from './images/b.jpeg'
import c from './images/c.jpeg'
import d from './images/d.jpeg' 
import e from './images/e.jpeg'



const About = () => {
    return (
        <div>
            
            <h1 className='centered-text' style={{width:'50%'}}>About Us</h1>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="row w-100 g-4">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <div className="card" style={{ width: "100%", maxWidth: "25rem" }}>
                            <img src={imgg} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column " id="center">
                        <p className="p">About Us</p>
                        <h1>Why We Are The Best</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            For Exclusive Deals, Coupons, News and More,For Exclusive Deals, Coupons, News
                            and More.Stay Informed About Special Offers
                            For Exclusive Deals, Coupons, News and More.Stay Informed About Special Offers
                            For Exclusive Deals, Coupons, News and More,For Exclusive Deals, Coupons,
                            News and More
                        </p>
                        <div className="container-fluid d-flex justify-content-between align-items-center " style={{ padding: "20px" }}>

                            <div className="hi " >
                                <img src={e1} className="cardss-img-top" alt="..." />
                            </div>
                            <div className="hi">
                                <h4> Service</h4>
                                <p>Qariatureaque ipsa quae a ill inventore vertitaist et quasi artichitecto</p>
                            </div>

                            <div className="hi ">
                                <img src={e2} className="cardss-img-top" alt="..." />
                            </div>
                            <div className="hi ">
                                <h4>Online Order</h4>
                                <p>Qariatureaque ipsa quae a ill inventore vertitaist et quasi artichitecto</p>
                            </div>
                        </div>
                        <div className="btns"><button type="submit">About Us</button></div>
                    </div>
                </div>
            </div><br /><br /><br />

            {/* part 2 */}



           

            {/* part 3 */}

            <div className="container-fluid d-flex justify-content-center" >
                <div className="row g-3">
                    <div class="col col-sm-12 col-md-12 col-lg-12 text-center " id="team">
                        <h2>Meet Our Team</h2>
                    </div><br />
                    <div className="row g-3 ">
                        <div className="col col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div class="card card-bottom-underline" style={{ width: "22rem" }}>
                                <img src={h1} class="card5-img-top" alt="..." />
                                <div class="card-body card-one text-center">
                                    <h3>Cathy Aenderson</h3>
                                    <p>Chief Executive</p>
                                </div>
                            </div>
                        </div>

                        <div className="col col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div class="card card-bottom-underline" style={{ width: "22rem" }}>
                                <img src={h2} class="card5-img-top" alt="..." />
                                <div class="card-body card-one text-center">
                                    <h3>Mike Dooly</h3>
                                    <p>Executive</p>
                                </div>

                            </div>
                        </div>

                        <div className="col col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div class="card card-bottom-underline" style={{ width: "22rem" }}>
                                <img src={h3} class="card5-img-top" alt="..." />
                                <div class="card-body card-one text-center">
                                    <h3>Alextina Jimiey</h3>
                                    <p>Food Manager</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div><br /><br /><br />

           
           {/* fotter */}

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
export default About