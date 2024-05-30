import {useRef} from 'react'

import ProjectOverview from "../../components/ProjectOverview"
import market2u from "../../images/thumbnails/market2u.png"

import businessowner from "../../images/market2u/businessowner.png"
import customer from "../../images/market2u/customer.png"
import userflow from "../../images/market2u/userflow.png"
import serviceprovider from "../../images/market2u/serviceprovider.png"
import storyboard from "../../images/market2u/storyboard.png"
import styleguide from "../../images/market2u/styleguide.png"
import customeriterations from "../../images/market2u/customeriterations.png"
import serviceprovideriterations from "../../images/market2u/serviceprovideriterations.png"
import businessowneriterations from "../../images/market2u/businessowneriterations.png"

import customerbundledetails from "../../images/market2u/customerbundledetails.png"
import customerbundledetailsphone from "../../images/market2u/customerbundledetailsphone.png"
import customerbundles from "../../images/market2u/customerbundles.png"
import customerbundlesphone from "../../images/market2u/customerbundlesphone.png"
import customercart from "../../images/market2u/customercart.png"
import customercartphone from "../../images/market2u/customercartphone.png"
import customerhome from "../../images/market2u/customerhome.png"
import customerhomephone from "../../images/market2u/customerhomephone.png"
import customerrecipe from "../../images/market2u/customerrecipe.png"
import customerrecipedetails from "../../images/market2u/customerrecipedetails.png"
import customerrecipephone from "../../images/market2u/customerrecipephone.png"
import customerrecipedetailsphone from "../../images/market2u/customerrecipedetailsphone.png"

import sphome from "../../images/market2u/sphome.png"
import splivechat from "../../images/market2u/splivechat.png"
import sporderstatus from "../../images/market2u/sporderstatus.png"
import sporderstatus2 from "../../images/market2u/sporderstatus2.png"

import bizactivebundles from "../../images/market2u/bizactivebundles.png"
import bizactiveorders from "../../images/market2u/bizactiveorders.png"
import bizanalytics from "../../images/market2u/bizanalytics.png"
import bizbundlecreator from "../../images/market2u/bizbundlecreator.png"
import bizhome from "../../images/market2u/bizhome.png"

import customerphone1 from "../../images/market2u/customerphone1.gif"
import customerphone2 from "../../images/market2u/customerphone2.gif"
import serviceprovidergif from "../../images/market2u/serviceprovider.gif"
import ownerweb from "../../images/market2u/ownerweb.gif"
import customerweb from "../../images/market2u/customerweb.gif"
import customerweb2 from "../../images/market2u/customerweb2.gif"

export default function Market2U(props) {
    const final = useRef(null);
  
    // Function to scroll to the referenced element
    const scrollToElement = () => {
    if (final.current) {
        final.current.scrollIntoView({ behavior: 'smooth' });
    }
    };


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
            <h3>Discovering User Needs</h3>
            <p>We did a combination of primary and secondary research on three stakeholders– the customer, the service provider, and 
                the business owner– to gain a deeper understanding of the user needs and pain points.</p>
                <p>To gain the customer’s perspective, we used semi-structured interviews and observed customers at local grocery stores in
                 Pittsburgh, such as Seoul Mart and Bombay Food Market. We also interviewed the store owner on their thoughts on adding 
                 delivery services. We also conducted secondary research through browsing on forums (Reddit) for all three stakeholders. </p>
                 
                 <p>Based on our findings, we created a persona for the customer (grocery shoppers), service provider (delivery person), and business owner. </p>

                <div className="persona">
                    <img src={customer} alt = "persona of a customer"/>
                    <p><strong>Customer: Susan Smith</strong><br/>Susan is an elderly woman who used to regularly go grocery shopping, but has now turned to online groceries due 
                        to exhaustion and leg pains. She seeks a simple ordering experience and wants to find specialty products that 
                        align with her dietary needs.</p>
                </div>
                <div className="persona">
                    <img src={serviceprovider} alt = "persona of a service provider"/>
                    <p><strong>Service Provider: Chris Chan</strong><br/>Chris is a college student who works as a grocery delivery driver to generate income to help him pay for rent. 
                        With multiple deliveries in his queue, he values precise and clear drop-off instructions to stay on schedule.</p>
                </div>
                <div className="persona">
                    <img src={businessowner} alt = "persona of a business owner"/>
                    <p><strong>Business Owner: Maya Brooks</strong><br/>Maya is the owner of a small local farmers' market. She wants to expand her customer base and boost her store’s visibility, 
                        but it’s difficult to do so when she’s competing with so many corporate grocery chains. </p>
                </div>
                <br/>

            <h2>Narrowing it Down</h2>
            <h3>Validating our Ideas</h3>
            <p>We developed storyboards to brainstorm and visualize ideas. One idea was about "bundles," which would contain multiple items that, 
                when combined, could create a complete dish. We used these storyboards in a 'speed dating' exercise with potential 
                customers to help us gauge if any of our ideas resonated with our users. Our aim was to make shopping decisions easier for 
                customers and also offer a platform for business owners to showcase their products.</p>

            <img src = {storyboard} alt = "one of the storyboards created with the concept of bundles-- Maya is a business owner of a new local grocery store. Recently, she has been trying to create new ways to increase business and get more customers at her store. Using a new grocery app, she can put items in bundles. This puts ingredients that go together (ex: tomato sauce and pasta) to entice customers to order them together. Customers can order items and get them delivered with the help of service providers. The added convenience of bundles helps them remember to buy certain items for specific recipes."></img>

               <p> Participants responded positively to the bundle concept. They particularly liked the idea of specialized bundles such as a 
                "get well soon" pack for the sick and elderly. We also realized that our bundles could go beyond just food items. 
                For example, including recipes would not only provide added value but also foster a sense of community among our users. </p>

                <h3>User Flow</h3>
                <p>Based on these insights, we developed a user flow of how our users would interact with our product.</p> 

<img src = {userflow} alt = "user flow diagram for the customer, service provider, and business owner"></img>

            {/* <h2>Screen Maps</h2>   
            <p>We ideated screens specific to each of the three key stakeholders.</p>
            <p>For the <strong>customer</strong>, understanding that many often switch between devices when ordering groceries, we designed an integrated experience across both mobile and desktop platforms.</p>
            <p>For the <strong>service provider</strong>, given their on-the-move nature, we used a mobile-first approach, crafting screens optimized for quick access and ease of use while on the go.</p>
            <p>For the <strong>business owner</strong>, who primarily focuses on in-depth data and store analytics, we designed comprehensive desktop screens. These screens present large volumes of data in a cohesive and digestible manner.</p>
 */}

            <h2>Prototyping</h2>
            <h3>Style Guide</h3>
            <p>We chose a color palette of greens, pinks, and yellows—colors synonymous with health and positivity, and picked colors of varying values for contrast. 
                We used the easily readable sans serif 'Inter' 
                font for both headers and body text. On the other hand, our logo and brand name use a bold serif font for differentiation. 
                To highlight headers and price tags, we adjusted their color, size, and boldness for better user navigation 
                and section differentiation.</p>

            <img className = "design-sys" src = {styleguide} alt = "style guide"></img>

            <h3>Initial Designs</h3>
            <div className = "flow">
                <div className = "flow-desc">
                <p>The customer can select a store and browse through offered bundles and recipes. </p>
                </div>

                <div className = "flow-images">
                <img src = {customerhome} alt = "customer home screen"></img>
                    <img src = {customerbundles} alt = "customer bundles screen"></img>
                    <img src = {customerbundledetails} alt = "customer bundle details screen"></img>
                    {/* <img src = {customercart} alt = "customer cart screen"></img> */}
                    <img src = {customerrecipe} alt = "customer recipe screen"></img>
                    {/* <img src = {customerrecipedetails} alt = "customer recipe details screen"></img> */}

                </div>
                <div className = "flow-images phone">
                    <img className="phone" src = {customerhomephone} alt = "customer home screen"></img>
                    <img className="phone" src = {customerbundlesphone} alt = "customer bundles screen"></img>
                    <img className="phone" src = {customerbundledetailsphone} alt = "customer bundle details screen"></img>
                    {/* <img className="phone" src = {customercartphone} alt = "customer cart phone screen"></img> */}
                    <img className="phone" src = {customerrecipephone} alt = "customer recipe phone screen"></img>
                    {/* <img className="phone" src = {customerrecipedetailsphone} alt = "customer recipe details phone"></img> */}

                </div>

            </div>

            <div className = "flow">
                <div className = "flow-desc">
                <p>The service provider receives alerts for new orders, see the route guide and destination, view the order status and details, and chat with the customer</p>
                </div>
                <div className = "flow-images">
                    <img className="phone" src = {sphome} alt = "service provider home screen"/>
                    <img className="phone" src = {sporderstatus} alt = "service provider order status screen"/>
                    {/* <img className="phone" src = {sporderstatus2} alt = "service provider other order status screen"/> */}
                    <img className="phone" src = {splivechat} alt = "service provider live chat screen"/>


                </div>
    
            </div>

            <div className = "flow">
                <div className = "flow-desc">
                <p>The business owner can see an overview of their store, create new bundles, and observe in-depth store analytics.</p>

                </div>
                <div className = "flow-images">

                    <img src = {bizhome} alt = "business owner home screen"></img>
                    <img src = {bizbundlecreator} alt = "business owner bundle creator screen"/>
                    <img src = {bizanalytics} alt = "business owner analytics screen"/>
                    {/* <img src = {bizactiveorders} alt = "business owner active orders screen"/> */}
                    {/* <img src = {bizactivebundles} alt = "business owner active bundles screen"/> */}

                </div>
    
                
            </div>

            <h3>Iterations</h3>

    
            <p>Based on critique from our peers and our own discretion, we received and implemented feedback on how we organized our screens. Here are some highlights:
</p>
            <img src = {customeriterations} alt = "iteration on customer screens to improve navigation"></img>
            <img src = {serviceprovideriterations} alt = "iteration on serviceprovider screens to be more visual"></img>
            <img src = {businessowneriterations} alt = "iteration on business owner screens to focus on statistics"></img>

            
            <h3 ref={final}>Final Prototypes</h3>
            <div id = "final" className = "final-prototypes">
                <p>Market2U brings local stores right to your fingertips. The charm of your town’s farmer’s markets and mom-and-pop shops 
                    is now accessible from the comfort of your home. Homebound customers can order specialty items or regular groceries and 
                    know that every dollar spent supports the growth and sustainability of local businesses.</p>
            <div className = "row">
                <p>Food bundles provide a simplified shopping solution, eliminating the need to pick items individually and 
                    encouraging exploration of new food combinations.</p>

                <div className = "final-screens">
                    <img className = "phone" src = {customerphone1} alt = "gif of customer owner phone screens"></img>
                    <img className = "desktop" src = {customerweb} alt = "gif of customer screen desktop view"></img>
                </div>

            </div>

            <div className = "row">
                <p>Once the customer makes their order, the service provider is notified and is equipped with a detailed breakdown– 
                    where they need to pick up groceries, which ones to pick up, and how to get there and where to drop it off. </p>

                <div className = "final-screens">
                    <img className = "phone" src = {serviceprovidergif} alt = "gif of service provider screens"></img>
                </div>

            </div>

            <div className = "row">
                <p>Before their next grocery purchase on Market2U, customers can explore a variety of recipes. Each recipe is paired with a 
                    grocery bundle, allowing users to easily add all required ingredients to their cart with a single click.</p>

                <div className = "final-screens">
                    <img className = "phone" src = {customerphone2} alt = "gif of customer owner phone screens"></img>
                    <img className = "desktop" src = {customerweb2} alt = "gif of customer screen desktop view"></img>
                </div>
            </div>

            <div className = "row">
                <p>As transactions take place, store owners can monitor popular bundles and overall sales via Market2U's analytics, 
                    as well as create new bundles. This data-driven approach empowers local businesses to refine offerings and strategies, 
                    ensuring they thrive in today's digital landscape.</p>

                <div className = "final-screens">
                    <img className = "desktop" src = {ownerweb} alt = "gif of business owner screens"></img>
                </div>
            </div>



            {/* <div>
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
            </div> */}
            </div>
            <h2>Takeaways</h2>
            <h3>Stay Focused</h3>
            <p>As we iterated through our designs, we often had to remind ourselves to focus on our pain point, as it was 
                tempting to try to address every user need out there. For future projects, I would create a hypothesis at the 
                beginning to maintain a focused scope, ensuring that our designs cater thoroughly to that specific need and 
                follow our hypothesis.</p>
            <h3>Dynamics of Device Selection</h3>
            <p>It was important to consider the environment in which users will engage with certain content. 
                As we decided what screens to design for, it was crucial that we think about the nuances of each 
                situation the user could be in and what kind of screen was the best suited for it. I spent 
                a lot of time thinking about how to translate a screen from one platform to another, and learned the importance of a 
                “mobile-first” approach to create readable and clear designs. 
</p>
        </div>

    )
}