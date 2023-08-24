export default function ProjectCard(props){
    return(
        // todo:
        // add hovering
        
        <div className = "project-card-container">
            <div className = "project-img">
                <img className="img-fluid" src= {props.pic} alt={props.alt}/>
            </div>

            <div className = "project-title">
                {props.title}
            </div>

            <div className = "project-skills">
                {props.skills}
            </div>
        </div>

    );
}