import ProjectOverview from "../../components/ProjectOverview"
import maobi from "../../images/thumbnails/maobi.png"

import poster from "../../images/maobi/poster.png"
import datamapping from "../../images/maobi/datamapping.png"
import comparison from "../../images/maobi/comparison.png"
// lofi
import lofi1 from "../../images/maobi/lofi1.png"
import lofi2 from "../../images/maobi/lofi2.png"
import lofi3 from "../../images/maobi/lofi3.png"
import lofi4 from "../../images/maobi/lofi4.png"
import lofi5 from "../../images/maobi/lofi5.png"
import lofi6 from "../../images/maobi/lofi6.png"
import lofi7 from "../../images/maobi/lofi7.png"
import lofi8 from "../../images/maobi/lofi8.png"
import lofi9 from "../../images/maobi/lofi9.png"
import lofi10 from "../../images/maobi/lofi10.png"
import explanation from "../../images/maobi/explanation.png"

//hifi
import design from "../../images/maobi/design.png"
import feedback1 from "../../images/maobi/feedback1.png"
import feedback2 from "../../images/maobi/feedback2.png"
import feedback3 from "../../images/maobi/feedback3.png"


// import feedback2p1 from "../../images/maobi/feedback2p1.png"
// import feedback2p2 from "../../images/maobi/feedback2p2.png"
// import feedback2p3 from "../../images/maobi/feedback2p3.png"
import hifi1 from "../../images/maobi/hifi1.png"
import hifi2 from "../../images/maobi/hifi2.png"
import hifi3 from "../../images/maobi/hifi3.png"
import hifi4 from "../../images/maobi/hifi4.png"
import hifi5 from "../../images/maobi/hifi5.png"
import hifi6 from "../../images/maobi/hifi6.png"

import adjustment from "../../images/maobi/adjustment.gif"



export default function Maobi() {
    return(
        <div className = "project-page">
            <ProjectOverview key = "Maobi" 
            pic={maobi} 
            title="Maobi" 
            description="Maobi is an iOS app that providers instant feedback to Chinese calligraphy work by simply taking a picture. “Maobi” is the Chinese word for the calligraphy brush.
            " 
            info = "<strong>Role:</strong> UX/UI Design, Front-End Development<br/> <strong>Timeline:</strong> Fall 2023, 12 weeks<br/> <strong>Team:</strong> Dora Xiao, Lucy Yang<br/><strong>Tools:</strong> Figma, SwiftUI, Procreate"/>
            
            <br/>
            <p><i>Created for the Mobile Application Design & Development course, which is sponsored by Capital One and concludes with a cash prize competition. In 12 weeks, we were challenged to ideate a unique product, develop a hi-fi prototype, and code a functional iOS app in SwiftUI.  </i></p><p><i>Capital One awarded our team the 2nd place prize. </i></p>

            <h2>Problem</h2>
            <h3>How might we provide real-time, useful feedback for beginners to learn physical Chinese calligraphy?</h3>
            <p>Chinese calligraphy classes tend to be scarce, costly, and in-person, and there’s a high time commitment to pay for a recurring class and travel to it.
We researched several existing calligraphy apps, and discovered that no apps currently educate and provide feedback on physical Chinese calligraphy work. Instead, existing apps focus on touch screen drawings with a finger, which does not represent the experience of physical Chinese calligraphy.</p>
            
            <h2>Solution</h2>
            <h3>Use the phone camera to capture images of calligraphy practice and receive instant visual feedback.</h3>
            <p>Maobi tackles the challenge of beginners mastering Chinese calligraphy without expert supervision. Maobi takes advantage of the mobile platform, and uses a phone's camera and image analysis for immediate visual feedback on calligraphy technique. This approach transforms any space into a convenient learning environment, avoiding the difficulties of seeking opinions from scarce professionals with potential language barriers and higher costs.</p>
            <iframe width = "100%" src="https://www.youtube.com/embed/oPhMj68tpb0?si=v4gGJJOri7wU6ggQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            
            <h2>Ideation & Research</h2>
            <h3>How do people learn new skills on their own?</h3>
            <p>Traditional classes can be costly, inaccessible, or infrequent, making it hard for continuous practice and feedback.
                 We conducted a survey with 15 CMU students interested in Chinese calligraphy about their methods of self-learning and 
                 familiarity with the practice. </p>

                 <ul class="numbered-list">
                    <li><p>Many beginners are unable to recognize mistakes when learning a new skill on their own.</p></li>
                    <li><p>Most people use video tutorials online to learn new skills, but these aren’t personable to the user, and the <strong>lack of feedback</strong> makes it challenging.</p></li>
                    <li><p>It can be <strong>hard to stay motivated</strong> when teaching yourself a new skill.</p></li>
                    <li><p>Many people are familiar with Chinese calligraphy materials and characters, but fewer are familiar with the different kinds of strokes and scripts.</p></li>
                </ul>

            <h2>Design Explorations</h2>
            <h3>Considering the Mobile Mindset</h3>
            <p>After gathering the above insights, we considered ways to provide immediate feedback to self-learners, and how to keep them motivated to continue learning.</p>
            <p>Maobi leverages the mobile platform's camera capabilities to provide real-time feedback on the user's calligraphy technique. A phone’s camera is the easiest for snapping a photo or video of calligraphy paper.</p>

            <img src = {explanation} alt= "user flow of user taking a photo and receiving visual feedback"/>

            <h3>Lo-fi Wireframes</h3>

            <p>In Chinese culture, beginners are expected to learn foundational rules before they attempt artistic expression. These rules include <strong> basic strokes, stroke order, and composition</strong>, which are learned by imitating standards set by calligraphy masters. Our survey results 
                also indicated few were familiar with the different strokes, so we focused on teaching these.  </p>
            
            <p>Because Maobi is targeted towards <strong>beginners</strong> (no prior calligraphy experience), our app focuses on standard-script Chinese calligraphy.
The flow for one character level is as follows: </p>


            <div className = "flow">
                <div className = "flow-lofi-images">
                    <img className="phone" src = {lofi5} alt = "home screen wireframe"/>
                        <img className="phone" src = {lofi6} alt = "character level list wireframe"/>
                        <img className="phone" src = {lofi7} alt = "character stroke order wireframe"/>
                        <img className="phone" src = {lofi8} alt = "camera alignment wireframe"/>
                        <img className="phone" src = {lofi9} alt = "feedback screen wireframe"/>
                        <img className="phone" src = {lofi10} alt = "new coins wireframe"/>
                </div>
            </div>
            
            <h3>Usability Testing Results</h3>
            <p>We conducted 6 usability tests using think-aloud protocols and semi-structured interviews; we asked each participant to navigate through one character level. We gained the following insights, and I adjusted the screens accordingly.</p>

            <br/>

            <div className = "container">
                <div className = "description">
                    <h4>Feedback Screen Feels Discouraging</h4>
                    <p>Participants found the percentage score <strong>confusing, vague, and intimidating</strong>. Additionally, many didn't realize that earned coins unlocked new levels.

                    </p><p>In response, we adopted a <strong>three-star rating system</strong> similar to Cut the Rope, allowing users to accumulate stars and receive <strong>qualitative</strong> feedback instead of percentages.</p>
                </div>

                <div className = "screens">
                    <img src = {feedback1} alt= "feedback screen before and after"/>

                </div>
            </div>

            <div className = "container">

                <div className = "screens">
                    <img src = {feedback2} alt= "new daily challenge screens"/>


                </div>
                <div className = "description">
                    <h4>Requires too much effort to unlock new characters</h4>

                    <p>Users felt it was too difficult to unlock new characters, <strong>reducing their incentive</strong> to continue using the app.

                        </p><p>To address this, we introduced a “daily challenge” feature, allowing users to unlock a free character if completed and <strong>encouraging consistent app use</strong>.</p>
                </div>

            </div>

            <div className = "container">
                <div className = "description">
                    <h4>Confusing Menu</h4>
                    <p>Participants were confused by the “person” icon in the navigation bar, which a menu with only sign-out and onboarding
                         options. It <strong>didn’t seem significant</strong> enough for its own page.</p>
                    <p>We removed the bottom bar and moved this information and the “materials” section to a hamburger menu at the top, which also reduced clutter and created a <strong>cleaner design.</strong></p>     
                </div>

                <div className = "screens">
                        <img src = {feedback3} alt= "new hamburger menu added"/>

                </div>
            </div>


            
            <h2>Final Prototype</h2>
            <h3>Style Guide</h3>
            <p>As we transitioned into hi-fi, I chose the color palette based on colors commonly associated with Chinese calligraphy while 
                ensuring there was an adequate amount of contrast. Because the “mao” in “maobi” is similar to the word for cat in Chinese, 
                I illustrated a cat for our logo to add some more fun into our app. </p>
                <img src = {design} className = "design-sys" alt = "image of color palette, typography choices, and assets"/>
            <h3>Your Personal Calligraphy Coach</h3>

        <img src = {poster} alt = "promotional poster of maobi"></img> 


            {/* <div className = "container">
                <div className = "description">
                    <h4>Onboarding</h4>
                    <p>Complete an fun interactive introduction to Chinese script, and feel a sense of accomplishment before learning about the different features of the app. </p>
                </div>
                <div className = "screens">

                </div>
            </div>

            <div className = "container">
                <div className = "description">
                    <h4>Learn fundamentals</h4>
                    <p>Users can learn and practice basic Chinese calligraphy strokes, then progress to simple characters and themed packs. Each character level begins by teaching the stroke order.</p>
                </div>
                <div className = "screens">

                </div>
            </div>

            <div className = "container">
                <div className = "description">
                    <h4>Get instant feedback</h4>
                    <p>Within each level, users can take a picture of their physical calligraphy work. Maobi will analyze it and provide immediate visual feedback, highlighting any mistakes.</p>
                </div>
                <div className = "screens">

                </div>
            </div>

            <div className = "container">
                <div className = "description">
                    <h4>Use stars to unlock more</h4>
                    <p>With the stars accumulated each level, users can use these stars as currency to unlock more character levels, serving as motivation to keep going. </p>
                </div>
                <div className = "screens">

                </div>
            </div>

            <div className = "container">
                <div className = "description">
                    <h4>A new challenge everyday</h4>
                    <p>Users can complete a daily challenge everyday, unlocking the respective character once completed. </p>
                </div>
                <div className = "screens">

                </div>
            </div> */}




            <h2>Development</h2>

            <h3>From Design to Code</h3>

            <div className = "container">

                <div className = "description">
                    <p>As we transitioned from design to coding, we documented the API calls and data flow between objects to understand how information would move through the app.
                    </p><p>I identified the essential features for our MVP: app onboarding, levels for basic strokes and characters, and the camera feedback function. We spent two weeks developing the MVP, conducted another round of user testing, and then spent two more weeks making final adjustments.</p>
                </div>

                <div className = "screens">
                    <img src={datamapping} alt = "data mapping"/>
                </div>
                
            </div>

            <br/>

            <h3>Navigating Technical Challenges</h3>
            <div className = "container">

            <div className = "description">
                <p>During implementation, we encountered issues with the image analysis for our camera feedback feature. Initially, we planned to scan calligraphy work like CamScanner and compare it to a template image for feedback. However, our code couldn’t adjust angled images or recognize characters accurately.

                </p><p>To resolve this, we added a screen allowing users to <strong>rotate, move, and resize</strong> their work to fit an overlay of the template image, ensuring proper image analysis to provide feedback.</p>
            </div>

            <div className = "screens">
                <img className = "phone" src={adjustment} alt="adjusting taken photo"/>

            </div>
            </div>


           

            {/* <p>Below is a demo video of how our app looked after being developed in SwiftUI.</p>

            <iframe width = "100%" src="https://drive.google.com/file/d/1Ya0dvYiQsKLBRYcu5Uv4t4tpsFUdK09M/preview" title="drive video"></iframe>
            
            <p>We presented an 8-minute pitch to Capital One employees, and I created a promotional video and poster for our app.</p>
            <img src = {poster} alt = "promotional poster of maobi"></img> */}

            <h2>Reflection</h2>

            <h3>A Role on Both Sides</h3>
            <p>As the sole UX/UI designer on the team, it was important that I communicated effectively with my teammates, who were 
                mainly developers. I focused on ensuring consistency in user flow and design vision throughout iterations. This project was especially valuable to me because
                I had the opportunity to take on both the role of a designer and a developer, which gave me insights 
                into both the design and technical aspects of creating an app. I really enjoyed this dual-role experience-- I got to
                understand how my designs would translate into the development side, and it also improved my technical proficiency in Swift/XCode and 
                collaboration through GitHub.</p>

            <h3>Adapting to Limits</h3>
            <p>As we began coding out the app, I discovered that many design decisions I made in our prototype were not entirely feasible 
                due to iOS and Swift/Xcode limitations or because of time constraints. We ended up having to adapt and change our initial 
                plans for our features during the development process. This experience underscored the importance of understanding 
                technical limitations early in the design process, and I am sure to keep in mind the technology and structural elements when designing 
                for development in the future.</p>
        </div>

    );
}