import Logo from '../assets/logo-light.svg'
import Card from '../assets/payment-card.png'
import Twitter from '../assets/twitter.svg'
import LinkedIn from '../assets/linkedin.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'

import '../styles/footer.css'

const Footer = () => {
    return (
        <footer class="footer-two">
        <div class="upper-section">

            <div class="auto-container">
                <div class="row clearfix">

                    <div class="footer-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                        <div class="footer-widget about">
                            <div class="footer-logo"><a href="index.html" title="CryptLight"><img src={Logo} alt="" title="CryptLight" /></a></div>
                            <div class="widget-content">
                                <div class="text">ICO Landing Page Template. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </div>
                                <div class="link-box"><a href="#" class="theme-btn btn-style-three"><span class="txt">About us</span></a></div>
                            </div>
                        </div>
                    </div>

                    <div class="big-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div class="row clearfix">
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget">
                                    <div class="widget-title"><h5>Company</h5></div>
                                    <div class="widget-content">
                                        <div class="links">
                                            <ul class="clearfix">
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Team</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget">
                                    <div class="widget-title"><h5>ICO FUNDING</h5></div>
                                    <div class="widget-content">
                                        <div class="links">
                                            <ul class="clearfix">
                                                <li><a href="#">Features</a></li>
                                                <li><a href="#">Product</a></li>
                                                <li><a href="#">Roadmap</a></li>
                                                <li><a href="#">Token</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div class="footer-widget">
                            <div class="widget-title"><h5>WE ACCEPT CREDIT CARDS</h5></div>
                            <div class="widget-content">
                                <div class="cards"><img src={Card} alt="" title="CryptLight" /></div>
                                <div class="social-links">
                                    <div class="s-title">Flow us :</div>
                                    <ul class="clearfix">
                                        <li><a href="#"><span class="icon"><img src={Twitter} alt="" /></span></a></li>
                                        <li><a href="#"><span class="icon"><img src={Facebook} alt="" /></span></a></li>
                                        <li><a href="#"><span class="icon"><img src={LinkedIn} alt="" /></span></a></li>
                                        <li><a href="#"><span class="icon"><img src={Instagram} alt="" /></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="lower">
            <div class="auto-container">
                <div class="inner">
                    <div class="copyright"> Copyright &copy; 2022. All rights reserved by Your Company.</div>
                </div>
            </div>
        </div>

    </footer>

    )
}

export default Footer