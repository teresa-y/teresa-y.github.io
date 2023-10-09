import ProjectOverview from "../../components/ProjectOverview"
import market2u from "../../images/thumbnails/market2u.png"

import businessowner from "../../images/market2u/businessowner.png"
import customer from "../../images/market2u/customer.png"
import userflow from "../../images/market2u/userflow.png"
import screenmap from "../../images/market2u/screenmap.png"
import serviceprovider from "../../images/market2u/serviceprovider.png"
import storyboard from "../../images/market2u/storyboard.png"
import styleguide from "../../images/market2u/styleguide.png"
import customeriterations from "../../images/market2u/customeriterations.png"
import serviceprovideriterations from "../../images/market2u/serviceprovideriterations.png"
import businessowneriterations from "../../images/market2u/businessowneriterations.png"
import customerphone1 from "../../images/market2u/customerphone1.gif"
import customerphone2 from "../../images/market2u/customerphone2.gif"
import serviceprovidergif from "../../images/market2u/serviceprovider.gif"
import ownerweb from "../../images/market2u/ownerweb.gif"
import customerweb from "../../images/market2u/customerweb.gif"





export default function Market2U(props) {
    return (
        <div className = "project-page">

            <ProjectOverview key = "Market2U" 
                            pic={market2u} 
                            title="Market2U" 
                            description="Market2U is a grocery shopping and delivery application that empowers local businesses by connecting them to a wider customer base while offering customers that can’t leave their homes access to fresh food directly from local stores. Designed for the Interaction Design Studio course with an emphasis on responsive web design. 
                            " 
                            info = "<strong>Role:</strong> UX/UI Design, Research <br/> <strong>Timeline:</strong> Fall 2022, 4 weeks<br/> <strong>Team:</strong> Ankitha Vasudev, Alice Nie, Parvathy Anand<br/><strong>Tools:</strong> Figma"/>

            <h2>Problem</h2>
            <p>The rise of global e-commerce giants has dominated the online marketplace, often sidelining local grocery businesses. 
                These smaller local businesses offer unique products and fresher food alternatives, which fosters community growth. 
                Moreover, many people, due to various reasons such as age, disabilities, or health concerns, cannot leave their homes 
                but still require access to fresh food. While delivery apps exist, current grocery applications don’t take into account 
                local markets, and thus homebound individuals are unable to access their products.</p>
            
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

            <h2>Validating our Ideas</h2>
            <p>We developed storyboards to brainstorm and visualize ideas. One idea was about "bundles," which would contain multiple items that, 
                when combined, could create a complete dish. We used these storyboards in a 'speed dating' exercise with potential 
                customers to help us gauge if any of our ideas resonated with our users. Our aim was to make shopping decisions easier for 
                customers and also offer a platform for business owners to showcase their products.</p>

            <img src = {storyboard} alt = "one of the storyboards created with the concept of bundles"></img>

               <p> Participants responded positively to the bundle concept. They particularly liked the idea of specialized bundles such as a 
                "get well soon" pack for the sick and elderly. We also realized that our bundles could go beyond just food items. 
                For example, including recipes would not only provide added value but also foster a sense of community among our users. </p> 

                <p>With the idea of "bundles" in mind, we developed a user flow diagram to visualize how each stakeholder would interact with the app</p>

                <img src = {userflow} alt = "user flow diagram for the customer, service provider, and business owner"></img>

            <h2>Screen Maps</h2>   
            <p>We ideated screens specific to each of the three key stakeholders.</p>
            <p>For the <strong>customer</strong>, understanding that many often switch between devices when ordering groceries, we designed an integrated experience across both mobile and desktop platforms.</p>
            <p>For the <strong>service provider</strong>, given their on-the-move nature, we used a mobile-first approach, crafting screens optimized for quick access and ease of use while on the go.</p>
            <p>For the <strong>business owner</strong>, who primarily focuses on in-depth data and store analytics, we designed comprehensive desktop screens. These screens present large volumes of data in a cohesive and digestible manner.</p>
            
                <img src = {screenmap} alt = "screenmap ideation"></img>


            <h2>Style Guide</h2>
            <p>We chose a color palette of greens, pinks, and yellows—colors synonymous with health and positivity. 
                We picked colors of varying values for contrast. We used the easily readable sans serif 'Inter' 
                font for both headers and body text. To contrast this, our logo and brand name use a bold serif font. 
                To highlight headers and price tags, we adjusted their color, size, and boldness for better user navigation 
                and section differentiation.</p>

            <img src = {styleguide} alt = "style guide"></img>

            <h2>Iterations</h2>
            <img src = {customeriterations} alt = "iteration on customer screens to improve navigation"></img>
            <img src = {serviceprovideriterations} alt = "iteration on serviceprovider screens to be more visual"></img>
            <img src = {businessowneriterations} alt = "iteration on business owner screens to focus on statistics"></img>

            
            <h2>Final Prototypes</h2>
            <div className = "final-prototypes">
            <div>
                <p><strong>Customer Screens</strong></p>
                <img className = "phone" src = {customerphone1} alt = "gif of customer owner phone screens"></img>
                <img className = "phone" src = {customerphone2} alt = "gif of customer owner phone screens with recipe flow"/>
                <img className = "desktop" src = {customerweb} alt = "gif of customer screen desktop view"></img>
            </div>
            <div>
                <p><strong>Service Provider Screens</strong></p>
                <img className = "phone" src = {serviceprovidergif} alt = "gif of service provider screens"></img>
            </div>
            <div>
                <p><strong>Business Owner Screens</strong></p>
                <img className = "desktop" src = {ownerweb} alt = "gif of business owner screens"></img>
            </div>
            </div>
            <h2>Reflection</h2>
            <p>This being the first time I was learning to apply responsive web design, I learned a lot about thinking about when a user would use what kind of device as a means to pursue a specific action. 
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