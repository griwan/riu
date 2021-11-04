import "../styles/progressBar.css"
import { useEffect } from 'react';

// inside component:

const ProgressBar = () => {
 
//handle scroll and calculate croll position
const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height= document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.floor((winScroll / height)*100)
    document.getElementById('progress-bar').style.width = scrolled+'%'
};


useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    return (
        <div className="progress-bar-container">
            <div id="progress-bar">
            </div>
        </div>
    )
}

export default ProgressBar