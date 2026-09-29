import me from '../images/other/m2.jpg'
import { NavLink } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({top: 0});
};


export default function About(){
    return(
        <>
        <div className = "about-container">

            <div className = "about-bio">
            <p>I am a product designer excited about using design and technology to make people’s lives easier and more delightful. My personal experiences and the people I’ve surrounded myself with have shaped how I view and move through the world. I hope to carry this sentiment into my work and build thoughtful experiences that bring positive change to people's lives. 
            </p>
            <p>I have a technical and visual background in front-end code, product thinking, and illustration. Previously I was at <a href='https://bridge.co/' target="_blank" rel="noopener noreferrer">Bridge</a>, where I designed financial tools to streamline complex lending processes and empower small businesses. I graduated from Carnegie Mellon University with a double major in Information Systems and Human-Computer Interaction and a minor in Business Administration.</p>
            <p>In my free time, I like to draw, attend art fairs, and watch cat videos. The next thing I want to learn is risograph printing.</p>
           <p><a href='https://www.linkedin.com/in/teresayy/' target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
           <a href='mailto:tyang218@gmail.com'>Email</a>
           </p>
            </div>

                        <div className = "about-img">
                <img src={me} alt="picture of teresa yang"></img>

            </div>


        </div>
        <br/><br/><br/><br/>
        </>
    );
}