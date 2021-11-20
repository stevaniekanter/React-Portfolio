import React from 'react'

function Contact() {
    return (

        <div id="contact-me">
            <h3 class="center-align purple-text text-darken-3">
            Contact Me
            </h3>


            <section id="contact-info" class="center-align">
                <div class="col 12">
                    <a id="contact-text" class="footer-text purple-text text-darken-3" 
                    href="mailto:Stevanie.kanter@gmail.com">stevanie.kanter@gmail.com
                    </a>
                    <p id="contact-text" class="footer-text purple-text text-darken-3">603-866-1621
                    </p>
                </div>
            </section>

            <div class="row">
                <div class="col s12 m8 l6 offset-m2 offset-l3 center-align">
                    <div class="card purple darken-3">
                        <div id="card-body" class="card-content white-text">
                            <span class="card-title">Send me a message and let's connect!</span>
                            <div class="input-field col s12">
                                <input placeholder="Name" id="name" type="text" data-length="30" class="validate" />
                            </div>
                            <div class="input-field col s12">
                                <input placeholder="Email" id="email" type="text" data-length="30" class="validate" />
                            </div>
                            <div class="input-field col s12">
                                <input placeholder="Message" id="message" type="text" data-length="150" class="validate" />
                            </div>
                        </div>
                        <div class="card-action">
                            <button class="btn grey lighten-3 purple-text text-darken-3">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    
}

export default Contact