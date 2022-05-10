import '../styles/contact-us.css'

import Twitter from '../assets/twitter.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import LinkedIn from '../assets/linkedin.svg'

const ContactUs = () => {

  return (
    <section className="contact-two" id="contact-section">
        <div className="curve-image"><img src="images/background/curved-layer-4.png" alt="" /></div>
        <div className="auto-container">
            <div className="title-box-two">
                <h2>Contact Us</h2>
            </div>
            <div className="row clearfix">
                <div className="info-col col-xl-4 col-lg-5 col-md-12">
                    <div className="inner">
                        <div className="info-box">
                            <ul className="info clearfix">
                                <li className="email"><i className="icon fa-solid fa-envelope"></i><a href="/cdn-cgi/l/email-protection#97d8f1f1f2e5d7f4e5eee7e3f6fbb9f4f8fa"><span className="__cf_email__" data-cfemail="2f6049494a5d6f4c5d565f5b4e43014c4042">[email&#160;protected]</span></a></li>
                                <li className="phone"><i className="icon fa-solid fa-phone"></i><a href="tel:+17021234567">+1 702 123 4567</a></li>
                                <li className="address"><i className="icon fa-solid fa-home"></i>Ap #867-859 Sit Rd, Azusa <br />New York 39531</li>
                                <li className="map-link"><a href="#"><i className="fa fa-map-marker-alt"></i>View map</a></li>
                            </ul>
                        </div>
                        <div className="social-links">
                            <h6><span>Flow us</span></h6>
                            <ul className="clearfix">
                                <li><a href="#"><span className="icon"><img src={Twitter} alt="" /></span></a></li>
                                <li><a href="#"><span className="icon"><img src={Facebook} alt="" /></span></a></li>
                                <li><a href="#"><span className="icon"><img src={LinkedIn} alt="" /></span></a></li>
                                <li><a href="#"><span className="icon"><img src={Instagram} alt="" /></span></a></li>
                            </ul>
                        </div>  
                    </div>
                </div>
                <div className="form-col col-xl-8 col-lg-7 col-md-12">
                    <div className="form-box contact-form default-form">
                        <h4>Leave Us a Message</h4>
                        <form method="post" action="index.html">
                            <div className="row clearfix">
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                    <div className="field-inner">
                                        <input type="text" name="username" value="" placeholder="First Name" required=""  />
                                    </div>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                    <div className="field-inner">
                                        <input type="text" name="lastname" value="" placeholder="Last Name" required="" />
                                    </div>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                    <div className="field-inner">
                                        <input type="email" name="email" value="" placeholder="Email Address" required="" />
                                    </div>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                    <div className="field-inner">
                                        <input type="text" name="phone" value="" placeholder="Phone Number" required="" />
                                    </div>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <div className="field-inner">
                                        <textarea name="message" placeholder="Your Message ..." required=""></textarea>
                                    </div>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <div className="text-center">
                                        <button className="theme-btn btn-style-three">
                                            <span className="btn-title">Submit your message</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default ContactUs