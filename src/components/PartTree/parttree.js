import React from "react";
import './stylepartThree.css'
import Other15 from './ImagesPartthree/Other15.png'
import Other8 from './ImagesPartthree/Other08.png'
import Other21 from './ImagesPartthree/Other21.png'

 const PartTree = () => {
    return (
        <div className="partThree">
            <section className="wrapperThree">
                <div className="containerTree">
                    <h1 className="proven"> Proven and Trusted</h1>
                    <div className="threeBloks">
                        <div className="blockthree">
                            <div className="wrapperOfImg">
                                <img src={Other15} alt="image not found"/>
                            </div>
                            <h2 className="headerOfText"> Real-time Updates </h2>
                            <p className="textInBlock">At EUPro, we provide traders with the highest level of transparency and verified proof of balance in real time because your accounts are credited with real Bitcoin</p>
                            </div>
                        <div className="blockthree">
                            <div className="wrapperOfImg">
                                <img src={Other8} alt="image not found"/>
                            </div>
                            <h2 className="headerOfText"> Reliable 24/7 Support</h2>
                            <p className="textInBlock">EUPro provides excellent customer support service 24 hours a day, all year long. Our customer support team is ready to answer all your Bitcoin trading concerns and queries</p>
                        </div>
                        <div className="blockthree">
                            <div className="wrapperOfImg">
                                <img src={Other21} alt="image not found"/>
                            </div>
                            <h2 className="headerOfText"> Reliable 24/7 Support</h2>
                            <p className="textInBlock">All transactions are encrypted and 100% secured for a worry-free Bitcoin trading experience</p>
                        </div>
                    </div>
                </div>  
            </section>
            <section className="threePertTwo">
                <div className="containerThreePertTwo">
                    <h2 className="whyUse"> Why use <span className="highlightTitle">EU pro?</span></h2>
                    <p className="textWhy">
                        LyraPro is known for being the safest and reliable platform to buy and sell Bitcoin.<br/>
                        We are giving the most reasonable and transparent rates to all traders who buy and sell<br/> Bitcoin.
                    </p>
                    <button className="buttonInPartThree">Sing up now</button>
                </div>
            </section>
        </div>

    )
}

export default PartTree