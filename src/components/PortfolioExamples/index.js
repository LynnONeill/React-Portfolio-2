import React from "react";
import { useState } from "react";



function PortfolioExamples({PlannerPic2, PlannerPic1, WeatherPic2, WeatherPic1, BurgerPic2, BurgerPic1, NotePic2, NotePic1}) {

    const [isShown, setIsShown] = useState(false);

    function onMouseEnter(event) {
        console.log("MouseEnter event fired!")
        this.setIsShown(false)
    }

 

    return (
        <div className="img-container row">
            <div class="img-1 col-lg-3 col-md-3 col-sm-12">
                <img 
                    id="planner-port" 
                    src={PlannerPic1} 
                    alt="dayplanner" 
                    width="100%" 
                    height="325px"
                />
                <img 
                    // onMouseEnter={onMouseEnter}
                    // onMouseLeave={() => setIsShown(false)}
                    id="planner-port2" 
                    src={PlannerPic2} 
                    alt="dayplanner" 
                    width="100%" 
                    height="325px"
                />
                <a class="inspect" href="https://github.com/LynnONeill/DayPlanner"><i
                        class="fas fa-search"></i></a>
                <a class="link" href="https://lynnoneill.github.io/DayPlanner/"><i
                        class="fas fa-link"></i></a>
            </div>
            <div class="img-2 col-lg-3 col-md-3 col-sm-12">
            <img 
                    className="weather-port" 
                    src={WeatherPic1} 
                    alt="weather" 
                    width="100%" 
                    height="325px"
                />
                <img 
                    className="weather-port2" 
                    src={WeatherPic2} 
                    alt="weather" 
                    width="100%"
                    height="325px"
                />
                <a class="inspect" href="https://github.com/LynnONeill/weatherDashboard"><i
                        class="fas fa-search"></i></a>
                <a class="link" href="https://lynnoneill.github.io/weatherDashboard/"><i
                        class="fas fa-link"></i></a>
            </div>
            <div className="img-3 col-lg-3 col-md-3 col-sm-12">
                <img 
                    className="burger-port2" 
                    src={BurgerPic1}
                    alt="burger" 
                    width="100%" 
                    height="325px"
                />
                <img 
                    className="burger-port" 
                    src={BurgerPic2} 
                    alt="burger" 
                    width="100%" 
                    height="325px"
                />
                
                <a class="inspect" href="https://github.com/LynnONeill/Burger-Logger"><i
                        class="fas fa-search"></i></a>
                <a class="link" href="https://enigmatic-beach-86884.herokuapp.com/"><i
                        class="fas fa-link"></i></a>
            </div>
            <div className="img-3 col-lg-3 col-md-3 col-sm-12">
                <img 
                    className="note-port" 
                    src={NotePic1}
                    alt="notes" 
                    width="100%" 
                    height="325px"/>
                <img 
                    className="note-port2" 
                    src={NotePic2}
                    alt="notes" 
                    width="100%" 
                    height="325px"
                />
                <a className="inspect" href="https://github.com/LynnONeill/Note-Taker"><i
                        class="fas fa-search"></i></a>
                <a class="link" href="https://ancient-tundra-45098.herokuapp.com/"><i
                        class="fas fa-link"></i></a>
            </div>
        </div>

    );
}

export default PortfolioExamples;