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
            Human-Computer Interaction. My goal is to deliver meaningful and immersive experiences, whether it be through designing interactions, building digital spaces, or illustration. <br/><br/>
            
            In my free time, I love drawing, watching cat videos, and playing digital games. Currently playing AI: The Somnium Files!<br/><br/>
            
            I am currently looking for full-time opportunities starting Summer/Fall 2024. Let’s connect! Feel free to contact me at tyang218@gmail.com<br/><br/>

            <a href={resume} target = "_blank" rel="noreferrer">Resume</a>
            </div>

        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
}