import ProjectCard from "./ProjectCard"

import market2u from "../images/thumbnails/market2u.png"
import vagary from "../images/thumbnails/vagary.png"
import toby from "../images/thumbnails/toby.png"
import heuristicats from "../images/thumbnails/heuristicats.png"
import maobi from "../images/thumbnails/maobi.png"
import cmuiff from "../images/thumbnails/cmuiff.png"
import bridge from "../images/thumbnails/bridge.png"



const projectData = [
  {
    "title": "Bridge",
    "pic": bridge,
    "alt": "thumbnail of bridge project",
    "desc": "Simplifying how businesses and teams move funding forward",
    // "skills": "zero-to-one, product design",
    "url" : "/bridge",
    "target" : "",
    "comingSoon": true // 
  },

  {
    "title": "International 'Faces' Film Festival",
    "pic": cmuiff,
    "alt": "thumbnail of cmu iff project",
    "desc": "Connecting with festival attendees in an interactive digital archive.",
    "skills": "client work, product design, ux research, prototyping",
    "url" : "/cmuiff",
    "target" : ""
  },

  {
    
    "title": "Maobi",
    "pic": maobi,
    "alt": "thumbnail of maobi project",
    "desc": "Improving calligraphy skills through personalized feedback.",
    "skills": "mobile design, prototyping, ios development, full-stack",
    "url" : "/maobi",
    "target" : ""
  },

      // {
      //   "title": "Heuristicats",
      //   "pic": heuristicats,
      //   "alt": "thumbnail of heuristicats project",
      //   "desc": "Redefining UX design education through gamification.",
      //   "skills": "educational game design, ui illustration, 2d animation",
      //   "url" : "/heuristicats"
      // }
]



const projects = projectData.map(proj => (
    <ProjectCard 
    key = {proj.title} 
    pic={proj.pic} 
    alt={proj.alt} 
    title={proj.title} 
    desc={proj.desc} 
    skills={proj.skills} 
    url = {proj.url} 
    target = {proj.target}
    comingSoon={proj.comingSoon} ></ProjectCard>
  ));


export default function Projects() {
    return(
        <div className = "projects-container">
            {projects}
        </div>

    );
}