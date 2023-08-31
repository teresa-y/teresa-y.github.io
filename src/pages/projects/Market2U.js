import ProjectOverview from "../../components/ProjectOverview"
import placeholder from "../../images/market2u/placeholder.png"

export default function Market2U(props) {
    return (
        <div className = "project-page">

            <ProjectOverview key = "Market2U" 
                            pic={placeholder} 
                            title="Market2U" 
                            description="Market2U is a grocery shopping and delivery application that provides small local business owners access to a greater number of customers and provides customers that can’t leave their homes access to fresh food from local stores. " 
                            info = "<strong>Role:</strong> UX Design, UX Research<br/> <strong>Timeline:</strong> Fall 2022, 4 weeks<br/> <strong>Team:</strong> Ankitha Vasudev, Alice Nie, Parvathy Anand<br/><strong>Tools:</strong> Figma"/>
        </div>

    )
}