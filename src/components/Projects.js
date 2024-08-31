import ProjectCard from "./ProjectCard"

import market2u from "../images/thumbnails/market2u.png"
import vagary from "../images/thumbnails/vagary.png"
import toby from "../images/thumbnails/toby.png"
import heuristicats from "../images/thumbnails/heuristicats.png"
import maobi from "../images/thumbnails/maobi.png"
import cmuiff from "../images/thumbnails/cmuiff.png"



const projectData = [
  {
    "title": "CMU International Film Festival",
    "pic": cmuiff,
    "alt": "thumbnail of cmu iff project",
    "skills": "Capturing years of festival history through an interactive digital archive.",
    "url" : "/cmuiff",
    "target" : ""
  },

  {
    "title": "Maobi",
    "pic": maobi,
    "alt": "thumbnail of maobi project",
    "skills": "Enhancing accessibility to Chinese calligraphy through a mobile app.",
    "url" : "/maobi",
    "target" : ""
  },

    {
        "title": "Market2U",
        "pic": market2u,
        "alt": "thumbnail of market2u project",
        "skills": "Improving access to local small businesses for homebound individuals.",
        "url" : "/market2u",
        "target" : ""
      },

      // {
      //   "title": "Vagary",
      //   "pic": vagary,
      //   "alt": "thumbnail of vagary project",
      //   "skills": "ux research, ux design",
      //   "url" : "/vagary"
      // },

      // {
      //   "title": "TOBY",
      //   "pic": toby,
      //   "alt": "thumbnail of toby project",
      //   "skills": "cui design, ux design",
      //   "url" : "/toby",
      //   "target" : ""
      // }
      // {
      //   "title": "Redesigned Internet Cookies Banner",
      //   "pic": market2u,
      //   "alt": "thumbnail of cookies banner project",
      //   "skills": "ux design"
      // },

      // {
      //   "title": "Heuristicats",
      //   "pic": heuristicats,
      //   "alt": "thumbnail of heuristicats project",
      //   "skills": "game art, educational game design",
      //   "url" : "/heuristicats"
      // }
]



const projects = projectData.map(proj => (
    <ProjectCard key = {proj.title} pic={proj.pic} alt={proj.alt} title={proj.title} skills={proj.skills} url = {proj.url} target = {proj.target}/>
  ));


export default function Projects() {
    return(
        <div className = "projects-container">
            {projects}
        </div>

    );
}