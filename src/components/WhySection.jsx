import Mobile from '../assets/mobile.svg'
import Transaction from '../assets/transaction.svg'
import Security from '../assets/security.svg'
import Money from '../assets/money.svg'

import '../styles/why-section.css'

const WhySection = () => {
  return (
    <section className="why-section-two" id="why-token">
        <div className="auto-container">
            <div className="title-box-two centered">
                <h2>Why choose our token</h2>
            </div>
            <div className="row clearfix">
                {/* <!--Why Block--> */}
                <div className="why-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="inner">
                            <div className="icon-box"><span className="icon"><img src={Mobile} alt=""/></span></div>
                            <h4>Mobile payment made easy</h4>
                            <div className="text">There's no need to sign up, you can use a mobile device to pay with the most simple steps</div>
                        </div>
                    </div>
                </div>
                {/* <!--Why Block--> */}
                <div className="why-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="inner">
                            <div className="icon-box"><span className="icon"><img src={Transaction} alt="" /></span></div>
                            <h4>No transaction fee</h4>
                            <div className="text">You can buy tokens how much you want without paying any transaction fee for our system</div>
                        </div>
                    </div>
                </div>
                {/* <!--Why Block--> */}
                <div className="why-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="inner">
                            <div className="icon-box"><span className="icon"><img src={Security} alt="" /></span></div>
                            <h4>Protect the identity</h4>
                            <div className="text">If we detect a potential threat to your identity, we will alert you by text, email, phone or app</div>
                        </div>
                    </div>
                </div>
                {/* <!--Why Block--> */}
                <div className="why-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                        <div className="inner">
                            <div className="icon-box"><span className="icon"><img src={Money} alt="" /></span></div>
                            <h4>Security and control over money</h4>
                            <div className="text">We can provide high levels of security that allows the user to keep control over their money  </div>
                        </div>
                    </div>
                </div>
                            
            </div>
        </div>
    </section>
  )
}

export default WhySection