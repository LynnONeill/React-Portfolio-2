import React from "react";
import PortfolioHeader from "../PortfolioHeader";
import PortfolioTitleLine1 from "../PortfolioTitleLine1";
import PortfolioFeatures from "../PortfolioFeatures";
import PortfolioTitleLine2 from "../PortfolioTitleLine2";
import PortfolioExamples from "../PortfolioExamples";


function Portfolio( { StarPic1, StarPic2, PickPic1, PickPic2,PlannerPic1, PlannerPic2, WeatherPic1, WeatherPic2, BurgerPic1, BurgerPic2, NotePic1, NotePic2 }) {
    return (
        <div>
            <PortfolioHeader />
            <PortfolioTitleLine1 />
            <PortfolioFeatures
                 StarPic1={StarPic1}
                 StarPic2={StarPic2}
                 PickPic1={PickPic1}
                 PickPic2={PickPic2}
            />
            <PortfolioTitleLine2 />
            <PortfolioExamples 
                PlannerPic1={PlannerPic1}
                PlannerPic2={PlannerPic2}
                WeatherPic1={WeatherPic1}
                WeatherPic2={WeatherPic2}
                BurgerPic1={BurgerPic1}
                BurgerPic2={BurgerPic2}
                NotePic1={NotePic1}
                NotePic2={NotePic2}
            />
        </div>
        
    );
}

export default Portfolio;