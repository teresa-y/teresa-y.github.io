import resume from '../resume.pdf';


export default function About(){
    return(
        <>
        <h1>about</h1>
        <div className = "about-container">
            <div className = "about-img">

            </div>

            <div className = "about-bio">
            Hi, I’m Teresa! I’m currently a student at Carnegie Mellon University studying Information Systems and 
            Human-Computer Interaction. My goal is to deliver meaningful and immersive experiences, whether 
            that be through whether it be through designing interactions, building digital spaces, or illustration.<br/><br/>
            
            In my free time, I love drawing and playing mobile games.<br/><br/>
            
            Let’s connect! Feel free to contact me at tyy@andrew.cmu.edu<br/><br/>

            <a href={resume} target = "_blank" rel="noreferrer">Resume</a>
            </div>

        </div>
        </>
    );
}