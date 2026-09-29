import {NavLink} from 'react-router-dom'

const scrollToTop = () => {
    window.scrollTo({top: 0});
};


export default function ProjectCard2(props){
    return(
        
        <div className = "project-card-2-container">
            <div className = "project-2-img">
                <NavLink to={props.url} onClick={props.target ? () => {} : scrollToTop} target = {props.target ? props.target : ""}><img src= {props.pic} alt={props.alt}/></NavLink>
            </div>

            <div className = "project-card-2-info">

                <div className = "project-card-desc">
                    {props.title}
                </div>

                <div className = "project-skills">
                    {props.skills}
                </div>


            </div>

        </div>

    );
}