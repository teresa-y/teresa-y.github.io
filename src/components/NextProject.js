// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-regular-svg-icons';
import {NavLink} from 'react-router-dom'


const scrollToTop = () => {
    window.scrollTo({top: 0});
};

export default function NextProject(props){
    return(
        <div className = "nextproject-container">
             <NavLink to={props.url} onClick={scrollToTop}>Up next: {props.title}</NavLink>
        </div>
    );
}
