import {NavLink} from 'react-router-dom'

const scrollToTop = () => {
    window.scrollTo({top: 0});
};


export default function ProjectCard(props){
    return(
        
        <div className = "project-card-container">
            <div className = "project-img">
                <NavLink to={props.url} onClick={props.target ? () => {} : scrollToTop} target = {props.target ? props.target : ""}><img src= {props.pic} alt={props.alt}/></NavLink>
            </div>

            <div className = "project-card-info">

                <div className = "project-title">
                    {props.title}
                </div>

                <div className = "project-card-desc">
                    <NavLink to={props.url} onClick={props.target ? () => {} : scrollToTop} target = {props.target ? props.target : ""}>{props.desc}</NavLink>
                </div>

                <div className = "project-skills">
                    {props.skills}
                </div>


            </div>

        </div>

    );
}