import ProjectOverview from "../../components/ProjectOverview"
import heuristicats from "../../images/thumbnails/heuristicats.png"

export default function Heuristicats() {
    return(
        <div className = "project-page">
            <ProjectOverview key = "Heuristicats" 
            pic={heuristicats} 
            title="Heuristicats" 
            description="A cat-themed role-playing game that teaches players about UX design." 
            info = "<strong>Role:</strong> 2D Art, Game Design<br/> <strong>Timeline:</strong> Spring 2023, 6 weeks<br/> <strong>Team:</strong> Jeremia Lo, Adrian Ma, Nellie Tonev<br/><strong>Tools:</strong> Procreate, Figma"/>

        <div>
            <a href = "https://adrianma.itch.io/heuristicats">Link to Game</a>
        </div>

        </div>

    );
}