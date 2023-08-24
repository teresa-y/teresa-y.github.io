import ProjectCard from "./ProjectCard"

import market2u from "../images/thumbnails/market2u.png"

const projectData = [


    {
        "title": "Market2U",
        "pic": market2u,
        "alt": "thumbnail of market2u project",
        "skills": "responsive web design, ui/ux design"
      },

      {
        "title": "Vagary",
        "pic": market2u,
        "alt": "thumbnail of vagary project",
        "skills": "ux research, ux design"
      },

      {
        "title": "Toby",
        "pic": market2u,
        "alt": "thumbnail of toby project",
        "skills": "cui design, ux design, ux research"
      },

      {
        "title": "Redesigned Internet Cookies Banner",
        "pic": market2u,
        "alt": "thumbnail of cookies banner project",
        "skills": "ui/ux design"
      },

      {
        "title": "Heuristicats",
        "pic": market2u,
        "alt": "thumbnail of heuristicats project",
        "skills": "game art, ux design"
      }
]



const projects = projectData.map(proj => (
    <ProjectCard key = {proj.title} pic={proj.pic} alt={proj.alt} title={proj.title} skills={proj.skills}/>
  ));


export default function Projects() {
    return(
        <div className = "projects-container">
            {projects}
        </div>

    );
}