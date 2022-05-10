import moment from 'moment';
import { useEffect, useState } from 'react';

import '../styles/banner.css'

const Banner = () => {
    
    let eventTime = '1652553000000';
    let currentTime = new Date().getTime();
    let diffTime = eventTime-currentTime;
    
    const [duration, setDuration] = useState(moment.duration(diffTime));
    
    console.log('testing')
    // console.log(duration.as)

    useEffect(()=>{

        
        console.log(diffTime)
        // let duration = moment.duration(diffTime, 'seconds'); -----waste
        // console.log(moment.duration(diffTime))
        // console.log(moment.duration((moment.duration(diffTime).asSeconds() - 1)*1000))
       
        let interval = 1;
        let durationn = moment.duration(diffTime)
        setDuration(durationn)

        let dur = moment.duration(diffTime, 'seconds')
        console.log(dur.asSeconds())


        setInterval(()=>{
            diffTime = diffTime-1000;

            let durationn = moment.duration((moment.duration(diffTime).asSeconds() - 1), 'seconds')
            // console.log(durationn)
            setDuration(durationn)
        }, 1000)
    }, [])



    return (
        <section className="banner-section banner-two">
            <div className="curve-layer"></div>
            
            <div className="banner-container">
                <div className="auto-container">
                    <div className="content-box">
                        <div className="row clearfix">
                            {/* <!--Text Column--> */}
                            <div className="text-col col-lg-6 col-md-12 col-sm-12">
                                <div className="inner">
                                    <h1>Powering Data for the new equity blockchain.</h1>
                                    <div className="text">The platform helps investors to make easy to purchase and sell their tokens</div>
                                    <div className="links-box clearfix">
                                        <div className="link"><a href="#" className="theme-btn btn-style-three"><span className="txt">Whitepaper</span></a></div>
                                        <div className="link"><a href="https://www.youtube.com/watch?v=Oz9zw7-_vhM" className="theme-btn vid-btn lightbox-image"><div className="icon fa fa-play"><i className="ripple"></i></div> <span className="txt">Video intro</span></a></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Counter Column--> */}
                            <div className="counter-col col-lg-6 col-md-12 col-sm-12">
                                <div className="inner clearfix">
                                    <div className="inner-box">
                                        <h5>Token sale ends in</h5>
                                        <div className="time-counter">
                                            {/* <!-- Time Countdown --> */}
                                            <div className="time-countdown-two clearfix">
                                                <div className="counter-column days">
                                                    <span className="period">Days</span>
                                                    <span className="count">{duration._data.days}</span>
                                                </div>
                                                <div className="counter-column hours">
                                                    <span className="period">Hours</span>
                                                    <span className="count">{duration._data.hours}</span>
                                                </div>
                                                <div className="counter-column minutes">
                                                    <span className="period">Minutes</span>
                                                    <span className="count">{duration._data.minutes}</span>
                                                </div>
                                                <div className="counter-column seconds">
                                                    <span className="period">Seconds</span>
                                                    <span className="count">{duration._data.seconds}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar-legend">$18.090 pledget of $25.000 goal</div>
                                            <div className="bar-outer">
                                                <div className="bar-inner">
                                                    <div className="bar" style={{width: '40%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="link-box"><a href="#" className="theme-btn btn-style-three"><span className="txt">PURchase tokens</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;