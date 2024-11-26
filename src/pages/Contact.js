
import './Contact.css'

import ab from './images/ab.jpeg'
import b11 from './images/b11.jpeg'
import a from './images/a.jpeg'
import b  from './images/b.jpeg'
import c from './images/c.jpeg'
import d from './images/d.jpeg' 
import e from './images/e.jpeg'


const Contact = () => {
    return (
        <div>
          
            <h1 className='centered-text'>Contact Us</h1>
           

            <div className="container-fluid d-flex justify-content-center">
                <div className="row g-3 ">

                    <div className="col col-sm-12 col-md-7 col-lg-7" id="stop">

                        <h5 className="text-center" id="to">Contact Us</h5>
                        <h2 className=" text-center" id="name">Please Get In Touch With Us</h2><br /><br />
                        <div className="containerfluid d-flex justify-content-between">
                            <div className="row g-3">
                                <div className="col col-sm-12 col-md-6 col-lg-6 text-center ">
                                    <form>
                                        <input type="text" placeholder="Enter your Name" className="inputss"></input>
                                    </form>
                                </div>
                                {/* <div className="col col-sm-12 col-md-6 col-lg-6 text-center ">
                                    <form>
                                        <input type="text" placeholder="Enter your Email" className="inputss"></input>
                                    </form>
                                </div> */}

                                <div className="row g-3">
                                    <div className="col col-sm-12 col-md-6 col-lg-6 text-center ">
                                        <form>
                                            <input type="text" placeholder="Enter your Email" className="inputss"></input>
                                        </form>
                                    </div>

                                    {/* <div className="col col-sm-12 col-md-6 col-lg-6 text-center ">
                                        <form>
                                            <input type="text" placeholder="Enter your Email" className="inputss"></input>
                                        </form>
                                    </div> */}
                                </div>


                                <div className="row g-3 text-center">
                                    <div className="col col-sm-12 col-md-12 col-lg-12 ">
                                        <form>

                                            <textarea id="message" name="message" rows="4" cols="80" placeholder="Comment..."></textarea>
                                        </form>
                                    </div>

                                </div>

                                <div className="text-center">
                                    <form>
                                        <button type=" submit" className="now" >Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div><br />
                    </div>

                    <div className="col col-sm-12 col-md-5 col-lg-5 " id="left">
                        <img src={ab} className="card-img-topss" alt="..." />

                    </div>


                </div>
            </div><br /><br /><br /><br />

            {/* <div className="container">
                <div className="row g-3">
                    <div className="col col-sm-12 col-md-12 col-lg-12 text-center"><br/>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31307.456456142958!2d78.1654617!3d11.2295936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725539560835!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>

                </div>

            </div> <br/><br/><br/> */}



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
export default Contact;