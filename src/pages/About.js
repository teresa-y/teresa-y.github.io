import resume from '../resume.pdf';
import me from '../images/other/me.jpg'
import { NavLink } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({top: 0});
};


export default function About(){
    return(
        <>
        <div className = "about-container">
            <div className = "about-img">
                <img src={me} alt="picture of teresa yang"></img>

            </div>

            <div className = "about-bio">
            <p>Hi, I’m Teresa! I’m a recent graduate from Carnegie Mellon University, where I studied Information Systems and 
            Human-Computer Interaction with a minor in Business. I think people are inspiring, so I strive to understand them better.</p><p>
         A lover of all things creative, I want to uplift human experiences through my creations and build things that people not only can use, but will enjoy using. I'm particularly interested in gamification techniques and persuasive design. My background in human-centered design, technology, and business thinking shapes the way I solve problems and design for people.</p>
            <p>In my free time, I enjoy <NavLink to='/play' onClick={scrollToTop}>drawing</NavLink> and watching cat videos.</p>
            <hr/>
            <p>Resume available upon request. Feel free to contact me at <a href="mailto:tyang218@gmail.com">tyang218@gmail.com</a>!</p>
           
            
            {/* Resume available upon request. Feel free to contact me at tyang218@gmail.com.<br/><br/> */}

            </div>

        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
}