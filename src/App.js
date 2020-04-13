import React from 'react';
import Navbar from "../src/components/Navbar";
import Bio from "../src/components/Bio";
import Portfolio from "../src/components/Portfolio";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import BioPic from "../src/images/me.jpg";
import StarPic1 from "../src/images/stargazer.png";
import StarPic2 from "../src/images/stargazer2.png";
import PickPic1 from "../src/images/pickem_logo.jpg";
import PickPic2 from "../src/images/pickem_screenshot.PNG";
import PlannerPic1 from "../src/images/planner.png";
import PlannerPic2 from "../src/images/planner2.png";
import WeatherPic1 from "../src/images/weatherdashboard.png";
import WeatherPic2 from "../src/images/weatherdashboard2.png";
import BurgerPic1 from "../src/images/burger.png";
import BurgerPic2 from "../src/images/burger2.png";
import NotePic1 from "../src/images/note1.png";
import NotePic2 from "../src/images/note_taker_screenshot.PNG";

// function onHover(event) {
//   event.this.hover(function() {
//     $(this).find("img").fadeToggle();
// })
// $(".img-2").hover(function() {
//     $(this).find("img").fadeToggle();
// })
// $(".img-3").hover(function() {
//     $(this).find("img").fadeToggle();
// })

// $(".link").on("click", function () {
//     let link = $(this).attr("href");
//     window.location = link;
// })
// $(".inspect").on("click", function () {
//     let link = $(this).attr("href");
//     window.location = link;
// })
// }


function App( ) {
  return (
      <div>
        <Navbar/>
          <Bio 
            BioPic={BioPic}
          />
          <Portfolio
            StarPic1={StarPic1}
            StarPic2={StarPic2}
            PickPic1={PickPic1}
            PickPic2={PickPic2}
            PlannerPic1={PlannerPic1}
            PlannerPic={PlannerPic2}
            WeatherPic1={WeatherPic1}
            WeatherPic={WeatherPic2}
            BurgerPic1={BurgerPic1}
            BurgerPic={BurgerPic2}
            NotePic1={NotePic1}
            NotePic = {NotePic2}
        />
        <Contact />
        <Footer />
    {/* </Switch> */}
   </div>
  );
}

export default App;
