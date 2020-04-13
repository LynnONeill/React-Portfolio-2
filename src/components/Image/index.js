import React from "react";



function Image({BioPic}) {
    return (
        <div id="top" className="image-wrapper d-flex col-md-6 col-sm-12">
            
            <img 
            id="biopic" 
            className="mx-auto d-block d-sm-flex" 
            src={BioPic} 
            alt="Lynn" 
            width="300"
            height="300" 
            />
        </div>

    );
}

export default Image;