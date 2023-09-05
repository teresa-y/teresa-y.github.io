import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



export default function Footer(){
    return(
        <div className = "footer-container">

            <div className = "copyright">
                &copy; Coded with React by Teresa Yang.
            </div>

            <div className = "socmed">
                <a href="https://www.linkedin.com/in/teresa-yang-02083516a/"><FontAwesomeIcon icon={ faLinkedin } size = "2x"/></a>
                <a href="https://github.com/teresa-y"><FontAwesomeIcon icon={ faGithub } size = "2x"/></a>

            </div>

        </div>
    );
}