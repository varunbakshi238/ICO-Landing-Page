import CurvedImage from '../assets/curvedImage.png'
import '../styles/road-map.css'

const RoadMap = () => {
    return (
        <section className="roadmap-two" id="roadmap">
        <div className="bg-layer"></div>
        <div className="auto-container">
            <div className="title-box-two centered">
                <h2>Roadmap</h2>
            </div>

            <div className="roadmap-box">

                <div className="road-map-item clearfix">
                    {/* <!--Roadmap Block--> */}
                    <div className="roadmap-block-two">
                        <div className="inner-box checked">
                            <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                            <div className="date"><span>March 2021</span></div>
                            <div className="text">In this time period, our Intelligent and talent founders had a concept of creating our ICO to call for investment</div>
                        </div>
                    </div>
                </div>

                <div className="road-map-item clearfix">
                    {/* <!--Roadmap Block--> */}
                    <div className="roadmap-block-two">
                        <div className="inner-box checked">
                            <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                            <div className="date"><span>May 2021</span></div>
                            <div className="text">This is the period of time we spent most of time to research, made a strategy and completed our whitepaper</div>
                        </div>
                    </div>
                </div>

                <div className="road-map-item clearfix">
                    {/* <!--Roadmap Block--> */}
                    <div className="roadmap-block-two">
                        <div className="inner-box">
                            <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                            <div className="date"><span>July 2021</span></div>
                            <div className="text">After finishing researching and making a plan, right away we designed platform and demonstrated technik</div>
                        </div>
                    </div>
                </div>

                <div className="road-map-item clearfix">
                    {/* <!--Roadmap Block--> */}
                    <div className="roadmap-block-two">
                        <div className="inner-box">
                            <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                            <div className="date"><span>September 2021</span></div>
                            <div className="text">We published  financing & Seed funding raised, so investors could track and know funding raising process</div>
                        </div>
                    </div>
                </div>

                <div className="road-map-item clearfix">
                    {/* <!--Roadmap Block--> */}
                    <div className="roadmap-block-two">
                        <div className="inner-box">
                            <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                            <div className="date"><span>November 2021</span></div>
                            <div className="text">We open global sales of ICOblock token, so all investors on the globe can purchase and sell our ICO easily</div>
                        </div>
                    </div>
                </div>

                <div className="road-map-item clearfix">
                    {/* <!--Roadmap Block--> */}
                    <div className="roadmap-block-two">
                        <div className="inner-box">
                            <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                            <div className="date"><span>January 2022</span></div>
                            <div className="text">Our founders are going to publish our prototype and link it to Ethereum blockchain with real-time scanning</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    )
}

export default RoadMap