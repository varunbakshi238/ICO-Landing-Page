import RightArrow from '../assets/arrow-right.svg'
import Time from '../assets/time.svg'
import Disk from '../assets/disk.svg'
import Verification from '../assets/verification.svg'
import Combine from '../assets/combining.svg'
import Technology from '../assets/technology.jpg'

import '../styles/how-it-work.css'

const HowItWorks = () => {
    return (
        <section className="how-it-works-two">
            <div className="auto-container">
                <div className="upper-row clearfix">
                    <div className="title">
                        <h3>Our technology</h3>
                        <div className="text">We use the most popular technology to securely buy, store & trade crypto.</div>
                    </div>
                    <div className="more-link">
                        <a href="#" className="theme-btn"><span className="txt">See more</span><i className="icon"><img src={RightArrow} alt="" /></i></a>
                    </div>
                </div>

                <div className="row clearfix">
                    {/* <!--Text Column--> */}
                    <div className="text-col col-lg-6 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="row clearfix">
                                <div className="info-block-two col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="icon-box"><span className="icon"><img src={Time} alt="" /></span></div>
                                        <h5>Timestamp server</h5>
                                        <div className="text">The timestamp server is top notch </div>
                                    </div>
                                </div>
                                <div className="info-block-two col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="icon-box"><span className="icon"><img src={Disk} alt="" /></span></div>
                                        <h5>Reclaiming disk space</h5>
                                        <div className="text">Remove old transactions</div>
                                    </div>
                                </div>
                                <div className="info-block-two col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="icon-box"><span className="icon"><img src={Verification} alt="" /></span></div>
                                        <h5>Simplified payment verification</h5>
                                        <div className="text">verify payment without running a full node</div>
                                    </div>
                                </div>
                                <div className="info-block-two col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="icon-box"><span className="icon"><img src={Combine} alt="" /></span></div>
                                        <h5>Combining and splitting value</h5>
                                        <div className="text">Make a separate transaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--Image Column--> */}
                    <div className="image-col col-lg-6 col-md-12 col-sm-12">
                        <div className="inner">
                            <div className="image">
                                <img src={Technology} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HowItWorks