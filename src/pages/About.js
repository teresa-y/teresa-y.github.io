import resume from '../resume.pdf';
import me from '../images/other/me.png'

export default function About(){
    return(
        <>
        <h1>about</h1>
        <div className = "about-container">
            <div className = "about-img">
                <img src={me} alt="drawing of teresa yang"></img>

            </div>

            <div className = "about-bio">
            Hi, I’m Teresa! I’m currently a student at Carnegie Mellon University studying Information Systems and 
            Human-Computer Interaction with a minor in Business. My goal is to deliver meaningful and immersive experiences, and my background in human-centered design, technology, and visual arts shapes the way I design for people.<br/><br/>
            
            In my free time, I love drawing and watching cat videos.<br/><br/>
            
            Let’s connect! Feel free to contact me at tyang218@gmail.com<br/><br/>

            <a href={resume} target = "_blank" rel="noreferrer">Resume</a>
            </div>

        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
}