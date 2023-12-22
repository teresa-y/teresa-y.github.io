import ProjectOverview from "../../components/ProjectOverview"
import maobi from "../../images/thumbnails/maobi.png"

export default function Maobi() {
    return(
        <div className = "project-page">
            <ProjectOverview key = "Maobi" 
            pic={maobi} 
            title="Maobi" 
            description="Maobi is an iOS that teaches beginners Chinese calligraphy by providing instant feedback to their work using image processing. Unlike most Chinese calligraphy apps, Maobi serves to help users with physical brush-writing (as opposed to using a touch screen), and displays visual feedback to show users exactly where they can improve. “Maobi” is the Chinese word for the calligraphy brush.
            " 
            info = "<strong>Role:</strong> UX/UI Design, Front-End Development<br/> <strong>Timeline:</strong> Fall 2023, 12 weeks<br/> <strong>Team:</strong> Dora Xiao, Lucy Yang<br/><strong>Tools:</strong> Figma, SwiftUI, Procreate"/>
            
            <br/>
            <p><i>Created for the Mobile Application Design & Development course, which is sponsored by Capital One and concludes with a cash prize competition. Capital One awarded our team the 2nd place prize out of 21 teams. </i></p>

            <p><strong>This page is under construction. Please check back later!</strong></p>
        </div>

    );
}