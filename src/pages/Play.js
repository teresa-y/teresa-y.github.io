import heuristicats from "../images/thumbnails/heuristicats.png"
import tca from "../images/thumbnails/tca.png"
import art from "../images/thumbnails/art.png"

import ProjectCard from "../components/ProjectCard"

const projectData = [
        {
          "title": "Heuristicats",
          "pic": heuristicats,
          "alt": "thumbnail of heuristicats project",
          "skills": "cat-themed rpg that teaches ux design",
          "url" : "https://adrianma.itch.io/heuristicats",
          "target" : "_blank"
        },
        {
            "title": "Technical Character Animation Reel",
            "pic": tca,
            "alt": "thumbnail of technical animation reel",
            "skills": "character animation reel animated in maya",
            "url" : "https://www.youtube.com/watch?v=qXx1mPgNslM",
            "target" : "_blank"
          },
          {
            "title": "2D Artwork",
            "pic": art,
            "alt": "thumbnail of 2d artwork",
            "skills": "2d digital art for fun",
            "url" : "/art",
            "target" : ""

          }
        
  ]
  
  
  
  const projects = projectData.map(proj => (
      <ProjectCard key = {proj.title} pic={proj.pic} alt={proj.alt} title={proj.title} skills={proj.skills} url = {proj.url} target = {proj.target}/>
    ));
  
export default function Play() {
    return (
        <>
            <h1>play</h1>
            <div className = "play-container">
                {projects}
                {/* <p>Coming Soon!</p> */}
            </div>

        </>
    );
}
