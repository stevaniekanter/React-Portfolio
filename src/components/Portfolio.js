import React from 'react'

function Portfolio() {
    return (
        <div id="work" class="portfolio-wrapper">

            <h3 class="center-align light-blue-text text-darken-3">
            Portfolio <i class="material-icons">folder</i>
            </h3>

            <section class="row">
                <article class="col s12 m8 offset-m2 l5 offset-l1">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src=".assets/images/Crypt-id.png" alt="Crypt-Id" />
                        </div>
                        <span class="card-title light-blue-text text-darken-3">Crypt-ID</span>
                        <div class="card-content">
                            <p>Crypt-ID is an app that allows user to log cryptid and strange occurances.</p>
                        </div>
                        <div class="card-action">
                        <a href="https://sleepy-island-20575.herokuapp.com/" target="_blank" rel="noreferrer noopener" class="card-link">Live URL</a>
                        <a href="https://github.com/stevaniekanter/Crypt-ID" target="_blank" rel="noreferrer noopener" class="card-link">GitHub URL</a>
                        </div>
                    </div>
                </article>
                
                <article class="col s12 m8 offset-m2 l5">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src=".assets/images/kanway.png" alt="Kanwaye" />
                        </div>
                        <span class="card-title light-blue-text text-darken-3">Kan(way)e</span>
                        <div class="card-content">
                            <p>Kan(way)e is an app that helps user find new music by what Kanye West would suggest or by genre.</p>
                        </div>
                        <div class="card-action">
                        <a href="https://stevaniekanter.github.io/STANK-Music/" target="_blank" rel="noreferrer noopener" class="card-link">Live URL</a>
                        <a href="https://github.com/stevaniekanter/STANK-Music" target="_blank" rel="noreferrer noopener" class="card-link">GitHub URL</a>
                        </div>
                    </div>
                </article>

                <article class="col s12 m8 offset-m2 l5 offset-l1">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src=".assets/images/password-generator.png" alt="Password Generator" />
                        </div>
                        <span class="card-title light-blue-text text-darken-3">Password Generator</span>
                        <div class="card-content card-content-weather">
                            <p>The Password Generator is an app that helps user generate a safe ans strong password for user to use.</p>
                        </div>
                        <div class="card-action">
                        <a href="https://stevaniekanter.github.io/PasswordGenerator-JavaScript/" target="_blank" rel="noreferrer noopener" class="card-link">Live URL</a>
                        <a href="https://github.com/stevaniekanter/PasswordGenerator-JavaScript" target="_blank" rel="noreferrer noopener" class="card-link">GitHub URL</a>
                        </div>
                    </div>
                </article>

                <article class="col s12 m8 offset-m2 l5">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src=".assets/images/Work-day.png" alt="Work Day Scheduler" />
                        </div>
                        <span class="card-title light-blue-text text-darken-3">Work Day Scheduler</span>
                        <div class="card-content">
                            <p>The Work Day Scheduler is an app that helps user plan out their day.</p>
                        </div>
                        <div class="card-action">
                        <a href="https://stevaniekanter.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer noopener" class="card-link">Live URL</a>
                        <a href="https://github.com/stevaniekanter/Horiseon-Website" target="_blank" rel="noreferrer noopener" class="card-link">GitHub URL</a>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
    
}

export default Portfolio