import React from 'react'

const ProgressBar = () => {
    const progressbar = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";
    };
    
    window.onscroll = function() {
        progressbar();
    };
    return (
        <div id="progress-bar">
            
        </div>
    )
}

export default ProgressBar
