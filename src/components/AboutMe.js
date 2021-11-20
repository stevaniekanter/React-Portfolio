import React from 'react'

function AboutMe() {
    return (
            
        <div id="about-me" class="container">
            <div class="center-align col 6 offset-3">
                <img id="profile-image" class="profile-image-2 responsive-img circle" src="assets/image/stevanie.jpeg" alt="Stevanie Kanter" />
            </div>
            <h3 class="center-align light-blue-text text-darken-3">
            About Me 
            </h3>
            <section class="row valign-wrapper">
                <div class="col s12 m3">
                    <img id="profile-image" class="profile-image-1 responsive-img circle" src="assets/image/stevanie.jpeg" alt="Stevanie Kanter" />
                </div>
                <div id="about-me-card" class="center-align card col s12 m9">
                    <div class="bio">
                    I am currently located in Somersworth, NH and I am a Technical Support Analyst at Amadeus Hospitality in Portsmouth, NH. 
                    I gratuated from the University of New Hampshire with a Bachelor in Hospitality Management and I have over 8 years of experience in the Hotel, Restaurant and Catering Industry. 
                    I enjoy meeting new people and are always eager to learn new things.
                    I have a passion for the Hospitality industry but also I am intrigue by the Tech Industry, therefor I aspire to break into the tech world as a Developer.                    </div>
                </div>
            </section>
        </div>
        
    )
    
}

export default AboutMe