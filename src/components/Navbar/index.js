import React from "react";
import Resume from "../../assets/resume.pdf";

function Navbar() {
    return (
        <div class="row sticky-top">
            <nav class="col-12 navbar navbar-default navbar-expand-sm navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#top">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#middle">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#bottom">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={Resume}>Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;