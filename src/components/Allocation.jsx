import Curve from '../assets/curlyCurve.png'
import Graph from '../assets/graph.png'

import '../styles/allocation.css'

const Allocation = () => {
    return (
        <section className="allocation-two" id="allocation">
        <div className="curve-layer"></div>
        <div className="auto-container">
            <div className="tabs-box">
                <div className="tab-buttons">
                    <ul className="clearfix">
                        <li className="tab-btn active-btn" data-tab="#all-tab-1"><span>Distribution</span></li>
                        <li className="tab-btn" data-tab="#all-tab-2"><span>Funding allocation</span></li>
                    </ul>
                </div>
                <div className="tabs-content">
                    {/* <!--Tab--> */}
                    <div className="tab active-tab" id="all-tab-1">
                        <div className="inner">
                            <div className="clearfix">
                                <div className="graph-image">
                                    <div className="image"><img src={Graph} alt="" /></div>
                                </div>
                                <div className="progress-col left">
                                    <div className="inner">
                                        <div className="progress-box">
                                            <div className="bar-block">
                                                <div className="bar-legend">Contingency: 5%</div>
                                                <div className="prog-bar color-1">
                                                    <div className="bar-inner" style={{width: '15%'}}></div>
                                                </div>
                                            </div>
                                            <div className="bar-block">
                                                <div className="bar-legend">Partner/Investor: 5%</div>
                                                <div className="prog-bar color-2">
                                                    <div className="bar-inner" style={{width: '18%'}}></div>
                                                </div>
                                            </div>
                                            <div className="bar-block">
                                                <div className="bar-legend">Legal & Regulation: 10%</div>
                                                <div className="prog-bar color-3">
                                                    <div className="bar-inner" style={{width: '20%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-col right">
                                    <div className="inner">
                                        <div className="progress-box">
                                            <div className="bar-block">
                                                <div className="bar-legend">Business Development: 10%</div>
                                                <div className="prog-bar color-4">
                                                    <div className="bar-inner" style={{width: '20%'}}></div>
                                                </div>
                                            </div>
                                            <div className="bar-block">
                                                <div className="bar-legend">Marketing: 20%</div>
                                                <div className="prog-bar color-5">
                                                    <div className="bar-inner" style={{width: '25%'}}></div>
                                                </div>
                                            </div>
                                            <div className="bar-block">
                                                <div className="bar-legend">Product Develoment: 40%</div>
                                                <div className="prog-bar color-6">
                                                    <div className="bar-inner" style={{width: '45%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <!--Tab--> */}
                    {/* <div className="tab" id="all-tab-2">
                        <div className="inner">
                            <div className="clearfix">
                                <div className="graph-image">
                                    <div className="image"><img src={Graph} alt="" /></div>
                                </div>
                                <div className="progress-col left">
                                    <div className="inner">
                                        <div className="progress-box">
                                            <div className="bar-block">
                                                <div className="bar-legend">Contingency: 5%</div>
                                                <div className="prog-bar color-1">
                                                    <div className="bar-inner" style={{width: '15%'}}></div>
                                                </div>
                                            </div>
                                            <div className="bar-block">
                                                <div className="bar-legend">Partner/Investor: 5%</div>
                                                <div className="prog-bar color-2">
                                                    <div className="bar-inner" style={{width: '18%'}}></div>
                                                </div>
                                            </div>
                                            <div className="bar-block">
                                                <div className="bar-legend">Legal & Regulation: 10%</div>
                                                <div className="prog-bar color-3">
                                                    <div className="bar-inner" style={{width: '20%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-col right">
                                    <div className="inner">
                                        <div className="progress-box">
                                            <div className="bar-block">
                                                <div className="bar-legend">Business Development: 10%</div>
                                                <div className="prog-bar color-4">
                                                    <div className="bar-inner" style={{width: '20%'}}></div>
                                                </div>
                                            </div>
                                            <div className="bar-block">
                                                <div className="bar-legend">Marketing: 20%</div>
                                                <div className="prog-bar color-5">
                                                    <div className="bar-inner" style={{width: '25%'}}></div>
                                                </div>
                                            </div>
                                            <div className="bar-block">
                                                <div className="bar-legend">Product Develoment: 40%</div>
                                                <div className="prog-bar color-6">
                                                    <div className="bar-inner" style={{width: '45%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    </section>
    )
}

export default Allocation;