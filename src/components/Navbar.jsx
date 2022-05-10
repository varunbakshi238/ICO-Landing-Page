import React, {useState} from 'react'
import * as Scroll from 'react-scroll'
import {getAuth} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import '../styles/navbar.css'
import '../styles/hidden-sidebar.css'
import Logo from '../assets/logo.svg'

const Navbar = ({scrolled}) => {

    const [showSidebar, setShowSidebar] = useState(false)

    const auth = getAuth();
    const navigate = useNavigate()
    let scroller = Scroll.scroller;

    const scrollDown = (id) => {
        scroller.scrollTo(id ,{
            duration: 1500,
            delay: 100,
            smooth: true,
        })
    }

    const onLogout = () =>{
        auth.signOut()
        navigate('/sign-in')
    }

    const handleSidebar = () => {
        document.body.classList.toggle('visible-sidebar');
        setShowSidebar(!showSidebar)
    }


      return (
            <>
        <header className={ ` ${scrolled ? 'fixed-header main-header header-two' : 'main-header header-two'}`}>
            {/* <!-- Header Upper --> */}
            <div className="header-upper">        
                <div className="auto-container">
                    {/* <!-- Main Box --> */}
                    <div className="main-box clearfix">
                        {/* <!--Logo--> */}
                        <div className="logo-box clearfix">
                            <div className="logo"><a href="index.html" title="CryptLight"><img src={Logo} alt="" title="CryptLight" /></a></div>
                        </div>

                        <div className="nav-box clearfix">
                            {/* <!--Nav Outer--> */}
                            <div className="nav-outer clearfix">         
                                <nav className="main-menu">
                                    <ul className="navigation clearfix" id="scroll-nav">
                                        <li><a href="#" onClick={() => scrollDown('intro-section') }>What is ico</a></li>
                                        <li><a href="#" onClick={() => scrollDown('why-token') }>Why token</a></li>
                                        {/* <li><a href="#token-sale" onClick={() => scrollDown('token-sale') }>Token Sale</a></li> */}
                                        <li><a href="#" onClick={() => scrollDown('roadmap') }>Roadmap</a></li>
                                        {/* <li><a href="#team-members" onClick={() => scrollDown('intro-to-ico') }>Team</a></li> */}
                                        <li><a href="#" onClick={() => scrollDown('allocation') }>Allocation</a></li>
                                        <li><a href="#" onClick={() => scrollDown('contact-section') }>Contact</a></li>
                                    </ul>
                                </nav>
                                {/* <!-- Main Menu End--> */}
                            </div>
                            {/* <!--Nav Outer End--> */}

                            <div className="links-box clearfix">
                                <div className="link"><a href="#" className="theme-btn btn-style-four"><span className="txt">Buy now</span></a></div>
                                <div className="lang-box">
                                    <a href="#" className="theme-btn lang-btn" onClick={onLogout}>Log-Out </a
                                    >
                                    
                                </div>
                            </div>

                            {/* <!-- Hidden Nav Toggler --> */}
                            <div className="nav-toggler">
                                <button className="hidden-bar-opener" onClick={handleSidebar}><span className="icon"><FontAwesomeIcon icon={faBars} /></span></button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </header>

        {/* <!--Menu Backdrop--> */}
        <div class="menu-backdrop" onClick={handleSidebar}></div>

        {/* <!-- Hidden Navigation Bar --> */}
        <section class={`${showSidebar ? 'hidden-bar visible-sidebar' : 'hidden-bar'}`}>
            {/* <!-- Hidden Bar Wrapper --> */}
            <div class="hidden-bar-wrapper">
                <div class="hidden-bar-closer" onClick={handleSidebar}><span class="icon"><svg class="icon-close" role="presentation" viewBox="0 0 16 14"><path d="M15 0L1 14m14 0L1 0" stroke="#101010" fill="none" fill-rule="evenodd"></path></svg></span></div>
                <div class="nav-logo-box">
                    <div class="logo"><a href="#" title="CryptLight"><img src={Logo} alt="" title="CryptLight" /></a></div>
                </div>
                {/* <!-- .Side-menu --> */}
                <div class="side-menu">
                    <ul class="navigation custom-links clearfix" id="scroll-nav-2">
                        <li><a href="#" onClick={() => scrollDown('intro-section') }>What is ico</a></li>
                        <li><a href="#" onClick={() => scrollDown('why-token') }>Why token</a></li>
                        <li><a href="#" onClick={() => scrollDown('roadmap') }>Roadmap</a></li>
                        <li><a href="#" onClick={() => scrollDown('allocation') }>Allocation</a></li>
                        <li><a href="#" onClick={() => scrollDown('contact-section') }>Contact</a></li>
                    </ul>
                </div>
                {/* <!-- /.Side-menu --> */}
                
                
            
            </div>
            {/* <!-- / Hidden Bar Wrapper --> */}
        </section>
        {/* <!-- / Hidden Bar --> */}

    </>
    )
}

export default Navbar