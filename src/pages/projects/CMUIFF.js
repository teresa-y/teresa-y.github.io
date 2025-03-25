import ProjectOverview from "../../components/ProjectOverview"
import NextProject from "../../components/NextProject"

import cmuiff from "../../images/thumbnails/cmuiff.png"

import iffimages from "../../images/cmuiff/iffimages.png"
import currentissues from "../../images/cmuiff/currentissues.png"
import crazy8 from "../../images/cmuiff/crazy8.png"
import archivedef from "../../images/cmuiff/archivedef.png"
import initialbooth from "../../images/cmuiff/initialbooth.png"
import storyboardp1 from "../../images/cmuiff/storyboardp1.png"
import storyboardp2 from "../../images/cmuiff/storyboardp2.png"

import lofiscreens from "../../images/cmuiff/lofiscreens.png"
import lofibooth from "../../images/cmuiff/lofibooth.png"

import midfispinglobe from "../../images/cmuiff/midfispinglobe.png"
import midfifilms from "../../images/cmuiff/midfifilms.png"

import colorchange from "../../images/cmuiff/colorchange.png"
import visualinterest from "../../images/cmuiff/visualinterest.png"
import browsefilmsquickly from "../../images/cmuiff/browsefilmsquickly.png"
import browsefilmsquickly2 from "../../images/cmuiff/browsefilmsquickly2.png"


import improvednav from "../../images/cmuiff/improvednav.png"
import moreautonomy from "../../images/cmuiff/moreautonomy.png"
import newpromotion from "../../images/cmuiff/newpromotion.png"
import newpromotion2 from "../../images/cmuiff/newpromotion2.png"

import onboarding from "../../images/cmuiff/onboarding.webm"
import filter from "../../images/cmuiff/filter.mp4"
import browsing from "../../images/cmuiff/browsing.mp4"
import filmdetails from "../../images/cmuiff/filmdetails.mp4"


export default function CMUIFF() {
    return(
        <>

        <div className = "project-page">
            <ProjectOverview key = "CMUIFF" 
            pic={onboarding} 
            title="CMU International 'Faces' Film Festival Archive" 
            description="The CMU International Film Festival (CMU IFF) archive is an interactive platform that showcases the festival's history and highlights its multicultural focus. 
            " 
            info = "<strong>Role:</strong> UX/UI Design, Research, Technical Lead<br/> <strong>Timeline: </strong>12 weeks<br/> <strong>Team:</strong> Jennifer Kim, Srishty Bhavsar, Julianna Bolivar, Graana Khan <br/><strong>Tools:</strong> Figma, Three.js, Google Suite"/>
            
            <h2>What is the CMU IFF?</h2>
            <h3>A film festival that promotes cultural exchange and expression to the Pittsburgh community through film.</h3>
            <p>The CMU International Film Festival (IFF) is the only student-run international film festival in the world. 
            Their programming includes not only film screenings, but also <strong>interactive events, discussion panels, and catering from local businesses</strong>, creating an experience dedicated to the respective film’s cultural richness. </p>

            <img src={iffimages} alt="CMU IFF's calligraphy event and film screening"/>

            <h2>Problem Space</h2>
            <h3>The IFF does not have a platform to effectively share festival highlights with the public.</h3>
            <p>The CMU IFF asked us to help them design a festival archive that showed the history of the festival’s screenings in an <strong>interactive and engaging</strong> way. While an "archive" page exists on their website, a dedicated space would allow for a more focused user experience.</p>
            
            <p> In designing this archive, we aimed to create something <strong>uniquely tailored</strong> for the IFF, and that it couldn't be substituted by any other film festival. Our solution would create a meaningful connection with its audience-- It would not only attract a larger audience, but serve as a place for attendees to learn more about the films that were screened.

</p>

            <h2>What makes the IFF so special?</h2>
            <h3>Understanding the IFF's Operations  </h3>
            <p>Through our research, we sought to find out what the archive meant for different stakeholders and who would be likely to interact with it the most.</p>
            <ul class="numbered-list">
                    <li><p>How can the identity of the film festival and those involved be represented in an archive?</p></li>
                    <li><p>How do you create intrigue circulating the archive and festival?</p></li>
                    <li><p>Which stakeholder would benefit the most from an archive?</p></li>
                </ul>

            {/* <h3>Competitive Analysis</h3>
            <p>To discover potential design opportunities and gaps, we observed the archives of other film festivals to understand how they expressed themselves in an archive. This included the Criterion Collection, Three Rivers Film Festival, and ReelAbilities. We also looked into websites of prominent CMU organizations due to the IFF wanting to highlight them being student-run. This included Lunar Gala, Activities Board, and Buggy. </p> */}

            <h3>Choosing to focus on attendees</h3>
            <p>We held 8 interviews with different stakeholders, including interns, sponsors, advancement staff, and long-time attendees. We synthesized our findings through affinity diagramming and identified four key insights. 
</p>
            <div className = "quarter">
                <div className = "item">
                    <h5>1/ New Perspectives</h5>
                <p>Attendees appreciate the <strong>opportunity to challenge their beliefs</strong> through exposure to the festival’s curated and diverse selection of films</p>
                </div>
                <div className = "item">
                    <h5>2/ Multicultural Value</h5>
                    <p>Attendees value the festival’s <strong>educational and cultural themes</strong>, and believe this sets the IFF apart.</p>
                </div>
                <div className = "item">
                    <h5>3/ Training Interns</h5>
                    <p>With interns leaving each year, it’s important to attract and train new interns.</p>
                </div>
                <div className = "item">
                    <h5>4/ Comprehensive Sponsorship Packet</h5>
                    <p>Sponsors prefer engaging with the sponsorship packet because it is comprehensive in communicating the festival’s impact.</p>
                </div>

            </div>

            <p>From these insights, we saw that a film archive would benefit attendees the most while still addressing our client's desire in communicating the IFF's identity and the team behind it. Thus, we narrowed our focus to the <strong>first two insights centered on attendees</strong>.</p>
            <h3>The current archive fails to capture the IFF's appeal</h3>
            <p>Attendees participated in a think-aloud protocol, where they narrated their navigation of the IFF’s current archive. This helped us identify opportunities for improvement, such as featuring critic reviews and adding a filter to see films by region.</p>
            
            <img src={currentissues} alt="issues with the IFF's current archive"/>

            
            <h2>Reframing the Problem</h2>
            <h3>How might we increase attendees’ awareness of the festival’s multicultural emphasis and showcase film events in an engaging way?</h3>
            <p>Reflecting on our research, we developed the following goals as we moved on to the visioning stage.</p>

            <ul class="numbered-list">
                    <li><p>Emphasize the festival's identity.</p></li>
                    <li><p>Organize and communicate years of the festival's history.</p></li>
                    <li><p>Increase awareness of the festival’s extensive programming.</p></li>
                </ul>


            <h2>Initial Explorations</h2>
            <h3>Idea Generation</h3>
            <div className = "container">
                <div className = "description">
                <p>We conducted a Crazy 8’s exercise to rapidly generate ideas, where we each sketched 8 ideas in 8 minutes. Ideas from this exercise included an interactive scrapbook and exploring a globe. </p>

                </div>

                <div className = "screens">
                    <img src={crazy8} alt = "one page of crazy 8's"></img>
                </div>
            </div>

            <p>We visualized our most promising ideas through storyboarding; we speed dated these storyboards, and gained some valuable findings.</p>
            {/* <img src={storyboardp1} alt = "speed dating findings"></img>
            <p>However, when sketching lo-fi wireframes, we realized our scope during storyboarding was too broad, and we needed more context and details for clarity.</p> 
 */}
            {/* <h3>Taking a Step Back...</h3>
            <p>In drawing our storyboards, we overemphasized the "interactive" aspect to make it interesting, but lost sight of the "archive" aspect. Each team member had different ideas of what an archive should be. Consequently, we settled on a <strong>single definition</strong> of an archive to guide our visioning process.</p>

            <img style={{width:"70%",   margin: "auto", display: "block"}} src={archivedef} alt = "definition of archive as Consists of films (titles, trailers, genre, and synopsis), directors, sponsors, interns, special guests, caterers, critic reviews, discussion notes, workshop description, graphics/logos, event photos."></img>

            <p>We standardized our methods of drawing storyboards, and defined them with these goals based on our research insights: </p>
            <ul>
                <li><p><strong>Users need a fun way to learn about what films were shown in past festivals</strong></p></li>
                <li><p><strong>Users need to become more aware of one of the festival’s greatest values: its multicultural emphasis</strong></p></li>
            </ul>

            <p>From there, we storyboarded more ideas, where we also thought about how someone might come across the archive to begin with.</p> */}

            <h3>A game-like experience with a form of outreach</h3>
                    <p>Many participants, as well as our client, resonated with a <strong>gamified archive and booth concept</strong> because of its potential for <strong>publicity</strong>. </p><p>Interviewees also mentioned that check-in lines can get long. The booth could be something that <strong>attendees could interact with as they wait.</strong> </p>


                    <img src = {storyboardp2} alt = "finalized storyboard ideas"/>


            <img src = {lofiscreens} alt = "lofi screens"/>
            <h2>The Iterative Process</h2>
            <h3>Initial Prototypes</h3>
            <div className="container">
                <div className = "description">
                    <p>The user could find our archive not only through the IFF website, but also through a booth that existed in the University Center (where many film events are held).</p>
                </div>

                <div className = "screens">
                    <img src={initialbooth} alt = "mockups of physical booth"/>

                </div>
            </div>

            <div className="container">
                <div className = "description">
                    <p>I designed a "spin the globe" feature to attract users to the archive and highlight its multicultural focus.</p>
                </div>

                <div className = "screens">
                    <img src={midfispinglobe} alt = "mid-fi globe spinning feature"/>

                </div>
            </div>


            <div className="container">
                <div className = "description">
                    <p>After spinning the globe, users see a list of films from the selected country. Each film links to a detailed page with information about the film and the interns who produced the screening.</p>
                </div>

                <div className = "screens">
                    <img src={midfifilms} alt = "mid-fi film list and details"/>

                </div>
            </div>


            <h3>It feels boring...?</h3>
            <br/>
            <div className = "container">
                <div className = "description">
                    <h4>Reconsidering Colors</h4>
                    <p>The archive didn’t feel immersive--  after the fun beginning interactions, the rest <strong>felt boring, like a wiki page.</strong>
                    </p>

                    <p>We reconsidered the colors we were using, shifting to use darker colors that mimic the film experience. </p>

                </div>

                <div className = "screens">
                    <img src={colorchange} alt="before and after of the archive color changes"/>
                </div>
            </div>

            {/* <div className = "container reverse">
                <div className = "screens">
                    <img src={visualinterest} alt="new large visual on film list screens"/>

                </div>

                <div className= "description">
                    <h4>More Visual Interest</h4>
                    <p>Additional visual elements further immerse the user, such as a large GIF that simulates a movie screen upon entering the archive.</p>
                </div>
            </div> */}

            <div className = "container">
                <div className = "description">
                    <h4>Browse Films Quicker</h4>
                    <p>Users wanted quick access to basic information, so we made two key changes:</p>
                    <p><strong>Hovering:</strong> When a user hovers over a film, they can instantly see the director, country, and language(s). They can then choose to click for more details if desired.</p>
                </div>

                <div className = "screens">
                    <img src={browsefilmsquickly} alt="hovering features"/>

                </div>
            </div>

            <div className = "container">
                <div className = "description">
                    <p><strong>Overlay:</strong> Film details now appear in a overlay instead of a new page, so users don’t have to navigate away from the main page.</p>
                </div>

                <div className = "screens">
                    <img src={browsefilmsquickly2} alt="overlay features"/>

                </div>
            </div>


            <h3>User Testing with Festival Attendees</h3>

            <p>We conducted another round of user testing at an IFF screening while the festival was going on to get insights from actual festival attendees.</p>

            <div className = "container">
                <div className = "description">
                    <h4>Improved Navigation</h4> 
                    <p>Since spinning the globe was the first action, users were confused when clicking on a year took them out of the selected country.</p>   
                    <p>To address this, we moved the year filter from the top bar and instead separated the film list by year on the main pages. We redesigned the top bar to only include options to see all films or explore the globe for simplicity.</p>
                </div>

                <div className = "screens">
                    <img src = {improvednav} alt = "comparison of navigation before and after"/>
                </div>
            </div>

            <div className = "container reverse">
                <div className = "screens">
                    <img src={moreautonomy} alt="dragging globe and filter options"/>

                </div>
                <div className = "description">
                    <h4>More Autonomy through Filtering</h4>
                    <p>Users wanted the filtering to be more <strong>robust</strong> and to be able to <strong>choose</strong> from the different countries on the globe.</p>
                    <p>I coded a fully 3D interactive globe in Three.js, and added <strong>location markers and labels</strong> that users can click to see the film list for that country. We added <strong>personalization</strong> in the filtering options, including country, language, and genre. </p>
                </div>
            </div>

            <div className = "container">
                <div className = "description">
                    <h4>No More Booth</h4>
                    <p>Although our initial research led to believe otherwise, we learned users <strong>weren’t likely to interact with a physical booth</strong>. Instead, most attendees focused on checking in and finding a seat.</p>
                    <p>We noticed that once attendees sat down, they would flip through the IFF booklet. </p>
                                    </div>
                
                <div className = "screens">
                    <img src={newpromotion} alt="attendees flipping through booklet"/>
                    
                </div>
            </div>

            <div className = "container">
                <div className = "description">
                    <p>This inspired us to give the archive <strong>its own page</strong> in the booklet, making it more <strong>integrated</strong> into their festival experience. We prototyped a mobile version attendees could access through a QR code.</p>
                    </div>

                <div className = "screens">
                    <img src={newpromotion2} alt="new ways of promotion: flyer + mobile prototype"/>
                    
                </div>
            </div>

            <h2>Final Prototype</h2>
            <h3>Exploring the world through film.</h3>
                    <h4>Onboarding</h4>
                    <video
                        src={onboarding}
                        type="video/webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ pointerEvents: 'none' }} />

                    <p>Drag the globe to explore the different countries with IFF films, click a location to see the films for that country, or click a button to randomize the selection.</p>
                    <p>Users can gain <strong>exposure</strong> to different cultures and films that they may not be familiar with, while having the <strong>freedom</strong> to choose the country on their own if so desired.</p>                    

                    <h4>A Personalized Browsing Experience</h4>
                    <video
                        src={filter}
                        type="video/mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ pointerEvents: 'none' }} />

                    <p>The archive rows are organized by festival years. Users can further <strong>personalize their experience</strong> by filtering based on country, language, and genre.</p>
                    <br/>
                    <video
                        src={browsing}
                        type="video/mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ pointerEvents: 'none' }} />
                    <p>Quick view and detailed overlay features <strong>balance</strong> the needs of casual viewers wanting basic information and film enthusiasts seeking more in-depth details.</p>


                    <h4>Film Details</h4>
                    <video
                        src={filmdetails}
                        type="video/mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ pointerEvents: 'none' }} />
                    <p>Film details can be viewed in an overlay for <strong>easy navigation</strong>.</p>
                    <p> In addition to basic information such as title, language, and director, the archive features the student interns that produced the screening and event photos to show visitors the <strong>different aspects of the IFF</strong>.</p>
                    <p> Quotes from directors and/or film critics appeal to attendees' <strong>value for discussion</strong>.</p>



             <h2>Beyond the Screens</h2>
             <h3>Impact on the IFF</h3>

             <div className = "third">
                    <div className = "item">

                        <h5>Increase Audience Engagement</h5>
                        <p>Features that emphasize the IFF's multicultural aspects brings exposure to the IFF’s vast film selection and consequently, the <strong>opportunity for attendees to challenge their knowledge and experience new perspectives.</strong></p>
                    </div>


                    <div className = "item">

                        <h5>Gain Competitive Edge</h5>
                        <p>This archive <strong>communicates the IFF’s identity</strong> and sets it apart from other film festivals and archives. By bringing more awareness of the IFF’s events, this generates more interest towards not only the IFF, but <strong>cultural films as a whole</strong>. </p>
                    </div>

                    <div className = "item">

                    <h5>Streamline Internal Organization</h5>
                    <p>As opposed to the scattered, outdated documents currently in use, the archive provides IFF student interns with an <strong>organizational system</strong> to keep track of information as the IFF continues to hold screenings. </p>


                    </div>

                </div>

                <h2>Reflection</h2>
                <h3>Seeing the big picture</h3>
                <p>With attendees, interns, sponsors, and advancement staff, the IFF has a large and complex ecosystem. It was important to understand how each role was involved in the organization when making design decisions.</p>
                <h3>Balancing user and stakeholder needs</h3>
                <p>As I collaborated with our client throughout this project, I learned the importance of strking a balance between user and stakeholder needs. Since both sides want a successful product, I also saw how there's often an overlap between the two.</p>
                <h3>Keeping an open mind</h3>
                <p>Staying adaptable and constantly exploring new ideas leads to creating more effective solutions. There were several times I thought one design would be well-received based on our user research, but user testing insights would disprove that. Instead of fixating on one idea, staying flexible and exploring more possibilities will lead to more fruitful outcomes.</p>


        </div>
                                <NextProject key = "heuristicats"
                        url = "/heuristicats"
                        title = "Heuristicats"
                        />

        
        </>
        

        );
}