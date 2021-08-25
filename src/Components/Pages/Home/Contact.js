import React from 'react'

export const Contact = () => {
    return (
        <>
            <div className="AboutHome">
                <div className="AboutHomeHeader row FadeInLeft">
                    <div className="col-3 mobile-about-header">
                        <span className="AboutHomeSub">Who we are <br/></span>
                        <span className="AboutHomeTitle">About Our <br/> Achitectural Firm</span>
                    </div>
                </div>

                <div className="AboutHomeContent row col-12">
                    <div className="row AboutHomeContent-text-mobile col-7">
                        <div className="col-3 AboutHomeContent_line FadeInLeft">
                            <div className="AboutHomeLine"></div>
                        </div>
                        <div className="AboutHomeContentText col-8 FadeInLeft">
                            <b>A whole different kind of architectural firm. Architecture is both the process and product of planning, designing and construction. Lorem ipsum dolor sit.</b>
                            <p>Quisque eu nunc bibe endum in finibus elit eget the solli citudin elit. Phasellus rutrum in lacus ut euismod. Vestibulum eleifend tortor orci, eu ornare tortor semper at. Duis scelerisque the nibhse drana moss pulvinar laoreet.</p>
                            <p>Architecture fusce ornare ut tortor ac hendrerit. Suspendisse sed sem tincidunt dui congue fermentum.</p>
                            <div className="AboutHomeContent__Left">
                                <h3 className="ExYear">10</h3>
                                <h6 className="ExSubTitle">IN ARCHITECTURE DESING</h6>
                                <h4 className="ExTitle">YEARS OF EXPERIENCE</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 AboutHomeContent_Right AboutHomeContent_Right-mobile">
                        <div className="Img col-12 FadeInLeft">
                            <img src={imgAbout} className="ImgAboutHome FadeInLeft"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
