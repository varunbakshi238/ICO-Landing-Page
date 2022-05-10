import React from 'react'
import '../styles/intro-section.css'

import ICO from '../assets/ICO.jpg'


const IntroSection = () => {
    return (  
    <section className="intro-two" id="intro-section">
        <div className="auto-container">
            <div className="title-box-two centered">
                <h2>What is ICO ?</h2>
                <div className="text-content">ICO is the cryptocurrency industry’s equivalent to an initial public offering.</div>
            </div>
            <div className="row clearfix">
                {/* <!--Text Column--> */}
                <div className="text-col col-lg-5 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="about">
                            <div className="info-block">
                                <div className="inner-box">
                                    <div className="icon-box"><span className="icon fa fa-users"></span></div>
                                    <h5>Decentralized Platform</h5>
                                    <div className="text">Decentralized platforms are aiming to deal with the issue of data ownership</div>
                                </div>
                            </div>
                            <div className="info-block">
                                <div className="inner-box">
                                    <div className="icon-box"><span className="icon fa fa-globe"></span></div>
                                    <h5>Crowd Wisdom</h5>
                                    <div className="text">The process of taking into account the collective opinion of a group</div>
                                </div>
                            </div>
                            <div className="info-block">
                                <div className="inner-box">
                                    <div className="icon-box"><span className="icon fa fa-star"></span></div>
                                    <h5>Rewards MeAchanism</h5>
                                    <div className="text">The system pay a bonus for excellent individuals</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Image Column--> */}
                <div className="image-col col-lg-7 col-md-12 col-sm-12">
                    <div className="inner">
                        <div className="image">
                            <img src={ICO} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default IntroSection