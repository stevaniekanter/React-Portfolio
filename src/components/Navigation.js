import React from 'react';

function Navigation({ handlePageChange }) {
    return (
        
            <nav class="navigation center-align col 12 grey lighten-2">
                <button id="small-text" class="navbtn btn col 4 light-blue darken-3" onClick={() => handlePageChange('AboutMe')}>
                    About Me
                </button>

                <button id="small-text" class="navbtn btn col 4 light-blue darken-3" onClick={() => handlePageChange('Portfolio')}>
                    Portfolio
                </button>

                <button id="small-text" class="navbtn btn col 4 light-blue darken-3" onClick={() => handlePageChange('Contact')}>
                    Contact
                </button>

                <a id="small-text" class="navbtn btn col 4 light-blue darken-3" hhref="./assets/resume/resume.pdf" target="_blank" rel="noreferrer noopener" download>
                    Resume
                </a>
            </nav>

    )
}

export default Navigation