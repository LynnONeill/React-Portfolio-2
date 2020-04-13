import React from "react";

function PortfolioFeatures({ StarPic1, StarPic2, PickPic1, PickPic2 }) {

    return (
        <div className="img-container row">
            <div className="img-3 col-lg-6 col-md-6 col-sm-12">
                <img 
                    className="stargazer-port" 
                    src={StarPic1} 
                    alt="stargazer" 
                    width="100%" 
                    height="325px"/>
                <img 
                    className="stargazer-port2" 
                    src={StarPic2} 
                    alt="stargazer" 
                    width="100%"
                    height="325px"
                />
                <a class="inspect" href="https://github.com/jhamilton20/projectone"><i
                        class="fas fa-search"></i></a>
                <a class="link" href="https://jhamilton20.github.io/projectone/"><i
                        className="fas fa-link"></i></a>
            </div>
            <div class="img-3 col-lg-6 col-md-6 col-sm-12">
                <img 
                    className="pickem-port" 
                    src={PickPic1} 
                    alt="pickem" 
                    width="100%" 
                    height="325px"/
                >
                <img 
                    className="pickem-port2" 
                    src={PickPic2}
                    alt="pickem" 
                    width="100%"
                    height="325px"
                />
                <a class="inspect" href="https://github.com/moullier/XFL-pickem"><i
                        class="fas fa-search"></i></a>
                <a class="link" href="https://morning-dawn-76670.herokuapp.com/"><i
                        class="fas fa-link"></i></a>
            </div>
        </div>
    );
}

export default PortfolioFeatures;