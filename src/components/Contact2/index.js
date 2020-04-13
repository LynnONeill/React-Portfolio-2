import React from "react";

function Contact2() {

    return (
        <div id="contact">
        <div id="bottom" class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" />
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" />
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                                <label for="subject" class="">Subject</label>
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="2"
                                    class="form-control md-textarea"></textarea>
                                <label for="message">Your message</label>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-md-left">
                        <button id="submit" class="btn btn-primary btn-dark btn-lg" type="submit">Send</button>
                    </div>
               </div>
            </form>

        </div>
        </div>

    );
}


export default Contact2;