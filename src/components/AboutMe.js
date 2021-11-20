import React from 'react'

function AboutMe() {
    return (
         

        <div id="about-me" class="container">
            <h1 class="center-align purple-text text-darken-3" id="font"> Stevanie Kanter Portfolio </h1>
            <h3 class="center-align purple-text text-darken-3">
            About Me 
            </h3>
            <div class="col s12 m3">
                    <img class="profile-image responsive-img square" id="profile" src="https://github.com/stevaniekanter/React-Portfolio/blob/main/src/components/assets/image/stevanie.png?raw=true" alt="Stevanie Kanter" />
                </div>
            <section>
                <div class="center-align col s12 m9 purple-text text-darken-3" id="about-me-1" >
                    <p class="bio">
                    I am currently located in Somersworth, NH and I'm working as a Technical Support Analyst at Amadeus Hospitality in Portsmouth, NH. 
                    I gratuated from the University of New Hampshire with a Bachelor in Hospitality Management and I have over 8 years of experience in the Hotel, Restaurant and Catering Industry. 
                    I enjoy meeting new people and are always eager to learn new things.
                    I have a passion for the Hospitality industry but also I am intrigue by the Tech Industry, therefor I aspire to break into the tech world as a Front-End Developer.</p>
                    <p>
                    I am currently enrolled in the UNH Bootcamp course.
                    </p>
                </div>
            </section>
        </div>
        
    )
    
}

export default AboutMe