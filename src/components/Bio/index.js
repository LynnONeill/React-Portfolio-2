import React from "react";
import Image from "../Image";



function Bio( {BioPic} ) {
    return (
        <div class="row" id="top">
        <div class="col-md-6 col-sm-12">
            <header>
                <h3 class="introduction name">Lynn O'Neill</h3>
            </header>
            <h5 class="title">designer</h5>
            <p class="bio">I am a successful business owner and aspiring developer. Over the years I have spent
                endless hours in my quest to find solutions for common business hurdles in my industry. There is an
                overwhelming gap in programing software targeting the construction and manufacturing fields. I am
                currently a student studying web-development. My goal is to create and test programs with my company
                that I can one day offer to other businesses with similar struggles. </p>
        </div>
        <Image 
              BioPic={BioPic}
        />
    </div>
    );
}

export default Bio;