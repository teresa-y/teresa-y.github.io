import ProjectOverview from "../../components/ProjectOverview"
import vagary from "../../images/thumbnails/vagary.png"

import affinitydiagram from "../../images/vagary/affinitydiagram.png"
import empathymap from "../../images/vagary/empathymap.png"
import journeymap from "../../images/vagary/journeymap.png"

import crazy8teresa from "../../images/vagary/crazy8teresa.png"
import crazy8yifei from "../../images/vagary/crazy8yifei.jpg"
import crazy8jessica from "../../images/vagary/crazy8jessica.png"

import storyboardteresa from "../../images/vagary/storyboardteresa.png"
import storyboardstephen from "../../images/vagary/storyboardstephen.png"
import storyboardyifei from "../../images/vagary/storyboardyifei.jpg"
import storyboardjessica from "../../images/vagary/storyboardjessica.jpg"

import prototype from "../../images/vagary/prototype.png"


export default function Vagary() {
    return (
        <div className = "project-page">
            <ProjectOverview key = "Vagary" 
                pic={vagary} 
                title="Vagary" 
                description="A travel planning application to help travelers accommodate for unexpected situations as well as add some spontaneity in their trips.                " 
                info = "<strong>Role:</strong> UX Design, UX Research<br/> <strong>Timeline:</strong> Fall 2022, 12 weeks<br/> <strong>Team:</strong> Yifei Chen, Jessica Lai, Stephen Tao<br/><strong>Tools:</strong> Figma, Miro"/>
            
            <h2>Overview</h2>
            <p>Trip planning can be a stressful and arduous process, and even with the most experienced of planners, 
                unforeseen circumstances may still arise. As risk-taking and spontaneity are a natural part of the travel process, 
                we asked the following question:</p>
                
                <p style={{fontSize: 20}}>How might we support spontaneity by providing more assistance for pressured and last minute travel planning?</p>
                
            <h2>Interviews</h2>
            <p>Using directed storytelling as our contextual method, we interviewed four undergraduate students who have previously traveled and had to or wanted 
                to make spontaneous decisions, and asked them to walk through their decision making process on a previous trip they had. 
                Here are some quotes that stood out to us during these interviews: </p>

                <p>"Compromises come from <strong>companions, language barriers, safety issues, and luck</strong>, which adds more time and effort into the decision making process."</p>
                <p>"Spontaneity is less stressful because <strong>planning can be too much</strong>, planning is just to not waste time and the unexpected is inevitable"</p>
                <p>"I think a <strong>general structure and outline of a travel plan is still needed</strong> but could leave out space and time for free exploration."</p>
            
            
            <h2>Interpreting our Findings</h2>
                <p>Following these interview sessions, we built several models to analyze and synthesize our findings, which included an 
                    affinity diagram, an empathy map, and a customer journey map.</p>

                <div className = "synthesis">

                    <img src={affinitydiagram} alt = "affinity diagram"/>
                    <img src={journeymap} alt = "customer journey map"/>
                    <img src={empathymap} alt = "empathy map"/>

                 </div>

            <h2>Insights</h2>
                <ul>
                    <li>Participants prefer small-scale spontaneity with a loose-structured plan when travelling.</li>
                    <li>The main hesitancy against spontaneous travel is the perception of induced risks in safety, time, and budget.</li>
                    <li>The main drive for spontaneous travel is internal: freedom, relaxation, excitement and the unexpected reward afterwards.</li>
                    <li>Users decide to make a spontaneous decision by weighting the different factors involved to create a rough idea of the benefits and potential risks.</li>
                </ul>

            <h2>Idea Generation and Validation</h2>
            <p>With the insights we gained from our data models, my team and I generated product ideas through the Crazy 8’s exercise– we 
                each sketched out 8 ideas in 8 minutes total. </p>
                <div className="crazy8">
                <img src={crazy8yifei} alt = "crazy 8 exercise"/>
                <img src={crazy8jessica} alt = "crazy 8 exercise"/>

                    <img src={crazy8teresa} alt = "crazy 8 exercise"/>


                </div>
            <p>We discussed our ideas and what kinds of user needs they met, and we narrowed them down to the following:
</p>    
            <ul>
                <li>Flexibility for change for unexpected circumstances</li>
                <li>Having access to risk safety information and resources</li>
                <li>Having activities that are compatible with traveling companions to minimize conflict</li>
                <li>Leaving space for unknown and unexpected encounters</li>
            </ul>

            <p>We sketched out these user needs through storyboards and conducted speed dating sessions with college students 
                to see which storyboards resonated with them the most and to validate our ideas. 
                We wanted to discover what features would be most valuable for travel planning.</p>

                <div className = "storyboards">

                    <img src={storyboardteresa} alt = "storyboard of flexibility of change"/>
                    <img src={storyboardstephen} alt = "storyboard of having access to risk safety information"/>
                    <img src={storyboardyifei} alt = "storyboard of having compatible activites"/>
                    <img src={storyboardjessica} alt = "storyboard of leaving space for the unknown"/>

                </div>

            <p>Key findings from speed dating:</p>
            <ul>
                <li>Participants preferred an idea of trust from real users as opposed to arbitrary/mechanical number</li>
                <li>People value customization, so in addition to generating schedules, we could also add replacement 
                    activities to provide alternatives in the case users don’t like some of the activities.</li>
                <li>A platform for suggested activities filtered by area and/or priorities of the user would be useful to help with exploring the area.</li>
            </ul>

            <h2>Prototype</h2>
            <p>From our insights, we designed a lo-fi prototype, focusing on creating an 
                application that catered to the desire for flexibility for spontaneity and 
                adaptation to unexpected circumstances.</p>
            
            <img src={prototype} alt = "key aspects of lofi prototype"/>

        </div>

    )
}