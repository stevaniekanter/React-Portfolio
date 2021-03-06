import React from 'react';

function Navigation({ handlePageChange }) {
    return (
        
            <nav class="navigation right-align col 12 purple lighten-2">
                <button class="navbtn btn col 4 purple darken-3" id="text" onClick={() => handlePageChange('AboutMe')}>
                    About Me
                </button>

                <button class="navbtn btn col 4 purple darken-3" id="text" onClick={() => handlePageChange('Portfolio')}>
                    Portfolio
                </button>

                <button class="navbtn btn col 4 purple darken-3" id="text" onClick={() => handlePageChange('Contact')}>
                    Contact
                </button>

                <a class="navbtn btn col 4 purple darken-3" id="text" href="https://drive.google.com/file/d/1DS5YweBQg6nyEt-64xshdX91drIZfq15/view?usp=sharing" target="_blank" rel="noreferrer noopener" download>
                    Resume
                </a>
            </nav>

    )
}

export default Navigation