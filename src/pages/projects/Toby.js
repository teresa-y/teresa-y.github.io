import ProjectOverview from "../../components/ProjectOverview"
import toby from "../../images/thumbnails/toby.png"

export default function Toby() {
    return (
        <div className = "project-page">
                        <ProjectOverview key = "Toby" 
                pic={toby} 
                title="Toby" 
                description="TOBY is a conversational user interface (CUI) that helps first responders, specifically emergency medical technicians (EMTs), give a patient their undivided attention by helping them note patient symptoms while also keeping their hands free." 
                info = "<strong>Role:</strong> UX Design, Research<br/> <strong>Timeline:</strong> Spring 2023, 4 weeks<br/> <strong>Team:</strong> Joanie Lam, Alana Rogers<br/><strong>Tools:</strong> Figma, Voiceflow"/>

        <h2>Problem</h2>
        <p>Currently, when an EMT is helping a patient, they must take care of many different duties at once. During this time, EMTs have difficulty processing patient information due to stress and trying to take care of the patient. 
            </p>

        <h2>Solution</h2>
        <p>As a means to provide support during this stressful and busy process, my team and I designed TOBY, a CUI that can help record patient information and symptoms to free the hands of and allow the EMT to simultaneously performs patient examinations</p>
        
        <h2>Pitch Presentation</h2>
        <p>Below is our team's pitch presentation for TOBY.</p>

        <iframe src="https://drive.google.com/file/d/183r1oCvMy0cVgPg6OTQh-_xe7aQgTZek/preview" width = "100%" allow="autoplay" title = "TOBY Pitch"></iframe>
        </div>


    )
}