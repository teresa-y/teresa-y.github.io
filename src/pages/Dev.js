import maobi from "../images/dev/maobi.png"
import cmuiff from "../images/dev/cmuiff.png"
import tp from "../images/dev/tp.png"
import pams from "../images/dev/pams.png"



import ProjectCard2 from "../components/ProjectCard2"


const projectData = [
  {
    "title": "Maobi",
    "pic": maobi,
    "alt": "thumbnail of maobi project",
    "desc": "Teaching Chinese calligraphy through personalized feedback",
    "skills": "iOS app, SwiftUI, Firebase",
    "url" : "https://drive.google.com/file/d/1SocL73ZVzJlkqKSNr-zipfL2b_F67HwJ/view?usp=sharing",
    "target" : "_blank"
  },
//   {
//     "title": "CMU International Film Festival",
//     "pic": cmuiff,
//     "alt": "thumbnail of cmuiff project",
//     "desc": "Onboarding experience for a film festival archive",
//     "skills": "Website, Three.js, HTML, CSS, JavaScript",
//     "url" : "https://teresayy.com/iff-globe",
//     "target" : "_blank"
//   },
  {
    "title": "Pamela's Diner",
    "pic": pams,
    "alt": "thumbnail of maobi project",
    "desc": "Hypothetical website for a local Pittsburgh brunch diner",
    "skills": "Website, HTML, CSS, JavaScript, jQuery",
    "url" : "https://www.teresayy.com/pamelas-diner/index.html",
    "target" : "_blank"
  },
  {
    "title": "Getting my Life Together",
    "pic": tp,
    "alt": "thumbnail of 112 project",
    "desc": "Productivity app that helps schedule tasks based on priority",
    "skills": "Python, TKinter",
    "url" : "https://www.youtube.com/watch?v=qRM2Cz4dwMU",
    "target" : "_blank"
  }
]

const projects = projectData.map(proj => (
    <ProjectCard2 key = {proj.title} pic={proj.pic} alt={proj.alt} title={proj.title} desc={proj.desc} skills={proj.skills} url = {proj.url} target = {proj.target}/>
  ));


export default function Dev() {
    return(
        <>

        <div className = "dev-container">
            {projects}
        </div>

        </>

    );
}