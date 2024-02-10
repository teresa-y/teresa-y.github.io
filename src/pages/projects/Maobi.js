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
import hifi1 from "../../images/maobi/hifi1.png"
import hifi2 from "../../images/maobi/hifi2.png"
import hifi3 from "../../images/maobi/hifi3.png"
import hifi4 from "../../images/maobi/hifi4.png"
import hifi5 from "../../images/maobi/hifi5.png"
import hifi6 from "../../images/maobi/hifi6.png"



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
            <p><i>Created for the Mobile Application Design & Development course, which is sponsored by Capital One and concludes with a cash prize competition. Capital One awarded our team the 2nd place prize. </i></p>

            <div className = "container">
                <div className = "item">
                    <h3>Problem</h3>
                    <p>After researching existing calligraphy apps, we discovered that no apps 
                        currently educate and provide feedback on physical Chinese calligraphy work. Instead, existing apps focus on touch 
                        screen drawings with a finger, which does not represent the experience of physical Chinese calligraphy.</p> 
                </div>
                <div className = "item">
                    <h3>Solution</h3>
                    <p>Maobi tackles the challenge of beginners mastering Chinese calligraphy without expert supervision. 
                        Maobi utilizes a phone's camera for real-time feedback on calligraphy technique. 
                        This approach transforms any space into a convenient learning environment, avoiding the difficulties of seeking opinions from scarce professionals with potential language barriers and higher costs.</p>
                </div>
            </div>
            <h2>Design Exploration</h2>
            <p>In Chinese culture, beginners are expected to learn foundational rules before they attempt artistic expression. These rules 
                include stroke order, composition, and shape, which are ideally learned by imitating the standards set by calligraphy masters. 
                Because Maobi is targeted towards beginners (no prior calligraphy experience), our app focuses on standard-script Chinese 
                calligraphy. </p>
            

            <p>Maobi teaches beginners the basic strokes of Chinese calligraphy before moving on to 
                practice different characters, with a camera-based feedback at the end of each level. 
                In each level, users take and submit a picture of their physical work, and receive a visual 
                comparison between their work and a “correct” standardized image. The user can tap each stroke to get feedback on each stroke.
</p>
<img src = {explanation} alt= "user flow of user taking a photo and receiving visual feedback"/>


            <div className = "flow">
                <div className = "flow-desc">
                    <p>Flow for one character level:</p>
                </div>
                <div className = "flow-lofi-images">
                    <img className="phone" src = {lofi5} alt = "home screen wireframe"/>
                        <img className="phone" src = {lofi6} alt = "character level list wireframe"/>
                        <img className="phone" src = {lofi7} alt = "character stroke order wireframe"/>
                        <img className="phone" src = {lofi8} alt = "camera alignment wireframe"/>
                        <img className="phone" src = {lofi9} alt = "feedback screen wireframe"/>
                        <img className="phone" src = {lofi10} alt = "new coins wireframe"/>
                </div>
            </div>

            <p>We conducted 6 user tests– participants thought the percentages on the feedback screen were confusing, 
                as they found it vague and wondered if it was a similarity score or another metric. In response, we replaced the percentages 
                with more explicit feedback descriptions. Many also did not associate the coins earned at the end of levels 
                with unlocking new levels– to address this, we revamped the system, opting for a three-star rating akin to games like 
                Cut the Rope.</p>

            <img src = {comparison} alt = "comparison between original feedback and new feedback"/>
            
            <h2>Final Prototype</h2>

            <p>After I created a hi-fi, interactive prototype, we conducted another round of user testing. 
                We ended up removing the bottom navigation bar as it confused users and did not add much value to our app.</p>

            <p>For the hi-fi, I chose the color palette based on colors commonly associated with Chinese calligraphy while ensuring 
                there was an adequate amount of contrast. Because the “mao” in “maobi” is similar to the word for cat in Chinese, 
                I illustrated a cat for our logo to add some more fun into our app. </p>
                <img src = {design} alt = "image of color palette, typography choices, and assets"/>

                <div className = "flow-images">
                    <img className="phone" src = {hifi1} alt = "hifi login"/>
                    <img className="phone" src = {hifi2} alt = "hifi home screen"/>
                    <img className="phone" src = {hifi3} alt = "hifi character list"/>
                    <img className="phone" src = {hifi4} alt = "hifi character stroke order"/>
                    <img className="phone" src = {hifi5} alt = "hifi camera alignment"/>
                    <img className="phone" src = {hifi6} alt = "hifi feedback screen"/>

                </div>


            <h2>Development</h2>
            <p>As we transitioned from the design stage to coding the app, we performed data mapping on our hi-fi wireframes to understand how data would interact with the app.</p>

            <img src = {datamapping} alt = "data mapping of maobi"/>
            <p>In developing our app from scratch, we spent 2 weeks implementing the MVP version, did another round of user testing, 
                and spent another 2 weeks making any final changes and adjustments. For the first version of the app, we prioritized
                having onboarding the app, levels for basic strokes and some characters, and the camera feedback function.</p>

            <p>In our final version of our application, we added the daily challenge feature as incentive to 
                return to the app, a way to filter through characters, a user account system, a stroke-order quiz for each 
                character, and a way to purchase stars.</p>

            <p>Below is a demo video of how our app looked after being developed in SwiftUI.</p>

            <iframe width = "100%" src="https://drive.google.com/file/d/1Ya0dvYiQsKLBRYcu5Uv4t4tpsFUdK09M/preview" title="drive video"></iframe>
            
            <p>We presented an 8-minute pitch to Capital One employees, and I created a promotional video and poster for our app.</p>
            <img src = {poster} alt = "promotional poster of maobi"></img>
            <iframe width = "100%" src="https://www.youtube.com/embed/oPhMj68tpb0?si=v4gGJJOri7wU6ggQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <h2>Reflection</h2>

            <h3>A Role on Both Sides</h3>
            <p>As the sole UX/UI designer on the team, it was important that I communicated effectively with my teammates, who were 
                mainly developers. I focused on ensuring consistency in user flow and design vision throughout iterations. This project was especially valuable to me because
                I had the opportunity to take on both the role of a designer and a developer, which gave me insights 
                into both the design and technical aspects of creating an app. I really enjoyed this dual-role experience-- I got to
                understand how my designs would translate into the development side, and it also improved my technical proficiency in Swift/XCode and 
                collaboration through GitHub.</p>

            <h3>Navigating Limits</h3>
            <p>As we began coding out the app, I discovered that many design decisions I made in our prototype were not entirely feasible 
                due to iOS and Swift/Xcode limitations or because of time constraints. We ended up having to adapt and change our initial 
                plans for our features during the development process. This experience underscored the importance of understanding 
                technical limitations early in the design process, and I am sure to keep in mind the technology and structural elements when designing 
                for development in the future.</p>

            <h3>Feature Prioritization</h3>
            <p>In the face of technical challenges, especially concerning the camera feedback function, our team underwent a critical exercise of feature prioritization. 
                We had a lot of ideas in the beginning, but it became evident that some were either too time-consuming to 
                implement or did not align with our core objectives. This process of narrowing down the feature list was a 
                valuable lesson in focusing on essentials.</p>
        </div>

    );
}