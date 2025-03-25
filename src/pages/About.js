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
            Human-Computer Interaction with a minor in Business.</p><p>
            I am captivated by the power of design to bring people together, generate conversations, and invoke excitement. A lover of all things creative, I enjoy finding ways I can use my background in human-centered design, art, technology, and product thinking to shape the way I solve problems and design for people.
            I'm particularly interested in gamification, interactive narratives, and designing for social good.</p>
            <p>In my free time, I <NavLink to='/play' onClick={scrollToTop}>draw</NavLink>, attend art fairs and pop-ups, and watch cat videos.</p>
            <hr/>
            <p>Resume available upon request. Feel free to contact me at <a href="mailto:tyang218@gmail.com">tyang218@gmail.com</a>!</p>
           
            
            {/* Resume available upon request. Feel free to contact me at tyang218@gmail.com.<br/><br/> */}

            </div>

        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
}