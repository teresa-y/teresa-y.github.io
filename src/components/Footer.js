import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



export default function Footer(){
    return(
        <div className = "footer-container">

            <div className = "copyright">
                &copy; 2024 Teresa Yang <br/>
                This website was coded by hand in React ₍ᐢ. ̫.ᐢ₎
            </div>

            <div className = "socmed">
                <a href="https://www.linkedin.com/in/teresa-yang-02083516a/" target = "_blank" rel="noreferrer"><FontAwesomeIcon icon={ faLinkedin } size = "2x"/></a>
                <a href="mailto:tyang218@gmail.com"><FontAwesomeIcon icon={ faEnvelope } size = "2x"/></a>

            </div>

        </div>
    );
}