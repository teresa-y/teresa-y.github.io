import ProjectOverview from "../../components/ProjectOverview"
import market2u from "../../images/thumbnails/market2u.png"

import businessowner from "../../images/market2u/businessowner.png"
import customer from "../../images/market2u/customer.png"
import scenarios from "../../images/market2u/scenarios.png"
import screenmap from "../../images/market2u/screenmap.png"
import serviceprovider from "../../images/market2u/serviceprovider.png"
import storyboard from "../../images/market2u/storyboard.png"
import styleguide from "../../images/market2u/styleguide.png"


export default function Market2U(props) {
    return (
        <div className = "project-page">

            <ProjectOverview key = "Market2U" 
                            pic={market2u} 
                            title="Market2U" 
                            description="Market2U is a grocery shopping and delivery application that provides small local business owners access to a greater number of customers and provides customers that can’t leave their homes access to fresh food from local stores. " 
                            info = "<strong>Role:</strong> UX/UI Design, Research <br/> <strong>Timeline:</strong> Fall 2022, 4 weeks<br/> <strong>Team:</strong> Ankitha Vasudev, Alice Nie, Parvathy Anand<br/><strong>Tools:</strong> Figma"/>

            <h2>Overview</h2>
            <p>For Interaction Design Studio, we were tasked to create a responsive web design for a grocery store application for 
                customers who cannot leave their homes. With the goal of providing a new grocery experience for shoppers as well as 
                increasing business sales, my team and I designed a cross-platform grocery shopping application that allows customers to 
                discover new recipes and buy their groceries in “bundles.”</p>
            
            <h2>Research</h2>
            <p>We did a combination of primary and secondary research on three stakeholders– the customer, the service provider, and 
                the business owner– to gain a deeper understanding of the user needs and pain points.</p>
                <p>To gain the customer’s perspective, we used semi-structured interviews and observed customers at local grocery stores in
                 Pittsburgh, such as Seoul Mart and Bombay Food Market. We also interviewed the store owner on their thoughts on adding 
                 delivery services. We also conducted secondary research through browsing on forums (Reddit) for all three stakeholders. </p>
                 
                 <p>Based on our findings, we created a persona for the customer (grocery shoppers), service provider (delivery person), and business owner. </p>

            <div className = "personas">
                <img src={customer} alt = "persona of a customer"/>
                <img src={serviceprovider} alt = "persona of a service provider"/>
                <img src={businessowner} alt = "persona of a business owner"/>

            </div>

            <h2>Scenarios</h2>
            <p>As we gained insights on user needs and pain points, each team member created hypothetical scenarios for each of the stakeholders. 
                After we finished, we voted on which scenarios would add the most value to our designs. As we ideated scenarios and 
                empathized with the users, we considered more deeply about what sort of screens would be most valuable to them.</p>
            
            <img src = {scenarios} alt = "screenshot of brainstormed scenarios"></img>

            <h2>Validating our Ideas</h2>
            <p>To brainstorm ideas and how it could affect the customer’s end-to-end experience, we created storyboards and user flow sketches, 
                and we conducted a speed dating exercise with potential customers to validate that our ideas actually met user needs. </p>

            <img src = {storyboard} alt = "two of the storyboards created"></img>
            
               <p> From the speed dating exercise, we noted that “bundles” didn’t necessarily have to just be food and their complements, but could also 
                include recipes to build a more community-like aspect to our product.</p> 

            <h2>Screen Maps</h2>   
            <p>Before jumping into the actual designs, we needed to think about what device each stakeholder would be using the most frequently. <br/><br/>
                We ideated screens for all three stakeholders. For the customer, we created both mobile and desktop screens for as many customers 
                use a combination of both devices when ordering groceries. The service provider (delivery man) is usually on the go, so we only 
                created mobile screens for them. Because the business owner is mainly concerned with data and analytics of the store, we created 
                desktop screens for them as there would be a large amount of information at once. </p>
            
                <img src = {screenmap} alt = "screenmap ideation"></img>


            <h2>Style Guide</h2>

            <img src = {styleguide} alt = "style guide"></img>

            <h2>Iterations</h2>
            <h2>Solution</h2>
            <h2>Reflection</h2>
            <p>Through this project, I learned a lot about thinking about when a user would use what kind of device as a means to pursue a specific action. 
                For example, I initially thought maybe a recipe description would be best on a laptop, but as we iterated through our prototypes, 
                I realized that I myself often look at recipes on my phone when cooking and our designs should reflect that. I often found myself 
                imagining myself in the user’s positions, and that combined with the research we did for our stakeholders directed what sort of screens 
                we chose to design for.</p>
                <p>This was also my first time designing for a mobile screen, which I found rather challenging. 
                There was a lot of information we wanted to incorporate into our screens, and because a mobile screen is so small, 
                I struggled a lot with trying to fit in all the information we wanted to include while maintaining the design’s readability. In the future, I will be more aware
                of the readability of certain font and icon sizes, and ensure my layouts are not crowded on a mobile screen in earlier stages of creating the design.</p>
        </div>

    )
}