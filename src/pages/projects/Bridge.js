import ProjectOverview from "../../components/ProjectOverview"
import NextProject from "../../components/NextProject"
import maobi from "../../images/maobi/hero.webm"

import poster from "../../images/maobi/poster.png"
import datamapping from "../../images/maobi/datamapping.png"
import comparison from "../../images/maobi/comparison.png"


export default function Bridge() {
    return(
        <>
        <div className = "project-page">
            <ProjectOverview key = "Bridge" 
            pic={maobi} 
            title="Bridge" 
            description="Designing AI-powered fintech tools to streamline the process of accessing capital for hotel owners and consumer brands." 
            timeline="September 2025 - August 2026"
            role="Product Designer + Engineer"
            team={"2 Product Managers\n6 Engineers\n 2 Designers"}
            tools={"Figma\nClaude Code"}/>
        </div>

        <NextProject key = "CMUIFF"
                        url = "/cmuiff"
                        title = "International 'Faces' Film Festival"
                        />

        </>

    );
}