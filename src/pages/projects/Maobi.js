import ProjectOverview from "../../components/ProjectOverview"
import NextProject from "../../components/NextProject"
import maobi from "../../images/maobi/hero.webm"

import poster from "../../images/maobi/poster.png"
import datamapping from "../../images/maobi/datamapping.png"
import comparison from "../../images/maobi/comparison.png"

import familiarity from "../../images/maobi/familiarity.jpg"
import selflearningchallenges from "../../images/maobi/selflearningchallenges.jpg"

// lofi
// import lofi1 from "../../images/maobi/lofi1.png"
// import lofi2 from "../../images/maobi/lofi2.png"
// import lofi3 from "../../images/maobi/lofi3.png"
// import lofi4 from "../../images/maobi/lofi4.png"
import lofi5 from "../../images/maobi/lofi5.png"
import lofi6 from "../../images/maobi/lofi6.png"
import lofi7 from "../../images/maobi/lofi7.png"
import lofi8 from "../../images/maobi/lofi8.png"
import lofi9 from "../../images/maobi/lofi9.png"
import lofi10 from "../../images/maobi/lofi10.png"
import explanation from "../../images/maobi/explanation.jpg"

//hifi
import design from "../../images/maobi/design.png"
import feedback1 from "../../images/maobi/feedback1.png"
import feedback2 from "../../images/maobi/feedback2.png"
import feedback3 from "../../images/maobi/feedback3.png"

import learning from "../../images/maobi/learning.gif"
import camera from "../../images/maobi/camera.gif"
import unlock from "../../images/maobi/unlock.gif"



// import feedback2p1 from "../../images/maobi/feedback2p1.png"
// import feedback2p2 from "../../images/maobi/feedback2p2.png"
// import feedback2p3 from "../../images/maobi/feedback2p3.png"
// import hifi1 from "../../images/maobi/hifi1.png"
// import hifi2 from "../../images/maobi/hifi2.png"
// import hifi3 from "../../images/maobi/hifi3.png"
// import hifi4 from "../../images/maobi/hifi4.png"
// import hifi5 from "../../images/maobi/hifi5.png"
// import hifi6 from "../../images/maobi/hifi6.png"

import adjustment from "../../images/maobi/adjustment.gif"



export default function Maobi() {
    return(
        <>
        <div className = "project-page">
            <ProjectOverview key = "Maobi" 
            pic={maobi} 
            title="Maobi" 
            description="Maobi is an iOS app that provides instant feedback to Chinese calligraphy work by simply taking a picture. “Maobi” is the Chinese word for the calligraphy brush. 
            " 
            timeline="September 2023 - December 2023"
            role={"Lead Product Designer\nFront-End Engineer"}
            team={"2 Engineers\n1 Designer (Me)"}
            tools={"Figma\nSwiftUI\nProcreate"}/>
            
            <br/>
            <p><i>Created for the Mobile Application Design & Development course, which is sponsored by Capital One and concludes with a cash prize competition. In 12 weeks, we were challenged to ideate a unique product, develop a hi-fi prototype, and code a functional iOS app in SwiftUI.  </i></p><p><i>Capital One awarded our team the 2nd place prize. </i></p>

            <h2>Problem</h2>
            <h3>How might we provide <i style={{color:'#A67344'}}>instant, useful feedback</i> for beginners to learn Chinese calligraphy?</h3>
            {/* <p>Chinese calligraphy classes tend to be scarce, costly, and in-person, and there’s a high time commitment to pay for a recurring class and travel to it.
            Online tutorials aren't personalized to the user, and if the user is doing something wrong, they can't get any feedback on it. With this app, we aim to make learning Chinese calligraphy <strong>more accessible.</strong></p> */}
            
            <p>Classes can be costly and difficult to access, while tutorials can't tell learners when they're making mistakes. We saw an opportunity to make independent practice more useful by giving beginners immediate, personalized feedback.</p>
            <h3>No apps currently educate on physical Chinese calligraphy</h3>
            <p>At the time of this project, no apps educate and provide feedback on physical Chinese calligraphy work. Instead, existing apps focus on touch screen drawings with a finger, which does not represent the experience of physical Chinese calligraphy. </p>

            <h2>Solution</h2>
            <h3>Take a picture of your calligraphy work and receive instant visual feedback</h3>
            <p>Maobi tackles the challenge of beginners mastering Chinese calligraphy without expert supervision. Maobi takes advantage of the mobile platform, and uses a phone's camera and image analysis for immediate visual feedback on calligraphy technique. This approach transforms any space into a convenient learning environment.</p>
            <iframe width = "100%" src="https://www.youtube.com/embed/oPhMj68tpb0?si=v4gGJJOri7wU6ggQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            
            <h2>Ideation & Research</h2>
            <h3>Learning calligraphy alone makes it hard to know what you're doing wrong.</h3>
            <p>Traditional classes can be costly, inaccessible, or infrequent, making it hard for continuous practice and feedback.
                 I conducted a survey with 15 students interested in Chinese calligraphy about their methods of self-learning and 
                 familiarity with the practice. </p>
                 <div className = "half">
                    <div className = "item">
                        <p><strong>Many beginners have only some experience with Chinese characters.</strong></p>
                        <img src = {familiarity} alt = "pie chart showing people's familiarity with Chinese"></img>
                    </div>

                    <div className = "item">
                        <p><strong>And they anticipate several challenges learning on their own.</strong></p>
                        <img src = {selflearningchallenges} alt = "bar graph showing what people struggle most with self-learning"/>
                    </div>
                 </div>
                 

                 {/* <ul class="numbered-list">
                    <li><p>Many beginners are unable to recognize mistakes when learning a new skill on their own.</p></li>
                    <li><p>Most people use video tutorials online to learn new skills, but these aren’t personable to the user, and the <strong>lack of feedback</strong> makes it challenging.</p></li>
                    <li><p>It can be <strong>hard to stay motivated</strong> when teaching yourself a new skill.</p></li>
                    <li><p>Many people are familiar with Chinese calligraphy materials and characters, but fewer are familiar with the different kinds of strokes and scripts.</p></li>
                </ul> */}

            <h2>Design Explorations</h2>
            <h3>What if your phone could become your calligraphy coach?</h3>
            <p>Survey results indicated that beginners are often unable to recognize mistakes when learning a new skill on their own, so 
            I designed Maobi's core feedback experience around something most people always have on hand: a phone camera. Users take a picture of their calligraphy, and Maobi analyzes the taken image to visually highlight where they can improve.</p>
            {/* <p>Maobi takes advantage of the mobile platform's camera capabilities with image processing code to provide real-time feedback on the user's calligraphy work. A phone’s camera is the easiest for snapping a photo of calligraphy work.</p> */}

            <img src = {explanation} alt= "user flow of user taking a photo and receiving visual feedback"/>

            <h3>Lo-fi Wireframes</h3>

            <p>Because Maobi is designed for beginners, we focused the initial experience on foundational strokes, stroke order, and simple characters.  </p>
        

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

            
            <h3>Feedback should help users improve, not make them feel like they're failing</h3>
            <p>We conducted 6 usability tests with calligraphy beginners, using think-aloud protocols and semi-structured interviews. We asked each participant to navigate through one character level. </p>
            <p>Our goal was to understand if the user found value in our app’s features.</p>
            <br/>

            <div className = "container">
                <div className = "description">
                    <h4>Feedback Feels Discouraging</h4>
                    <p>Participants found the percentage score <strong>vague and intimidating</strong>.

                    </p><p>In response, I designed a <strong>three-star rating system</strong> similar to Cut the Rope, allowing users to accumulate stars and receive <strong>qualitative</strong> feedback instead of percentages.</p>
                </div>

                <div className = "screens">
                    <img src = {feedback1} alt= "feedback screen before and after"/>

                </div>
            </div>

            <div className = "container reverse">

                <div className = "screens">
                    <img src = {feedback2} alt= "new daily challenge screens"/>


                </div>
                <div className = "description">
                    <h4>Too hard to unlock new characters</h4>

                    <p>Users felt it was too difficult to unlock new characters, <strong>reducing their incentive</strong> to continue using the app.

                        </p><p>To encourage <strong>consistent app use,</strong> I came up with a “daily challenge” feature allows users to unlock a free character if completed.</p>
                </div>

            </div>

            <div className = "container">
                <div className = "description">
                <h4>Confusing Hierarchy</h4>
                    <p>Some elements were emphasized too strongly despite not being too significant to the app’s main purpose, such as “Materials.” Also the bottom navigation bar, which was a way to sign out, added confusion.</p>
                    <p>I moved this information to a hamburger menu. Removing the bottom bar reduced clutter and created a <strong>cleaner design.</strong></p>     
                </div>

                <div className = "screens">
                        <img src = {feedback3} alt= "new hamburger menu added"/>

                </div>
            </div>


            
            <h2>Final Design</h2>
            <h3>Style Guide</h3>
            <p>As we transitioned into hi-fi, I chose the color palette based on colors commonly associated with Chinese calligraphy while 
                ensuring there was an adequate amount of contrast. Because the “mao” in “maobi” is similar to the word for cat in Chinese, 
                I illustrated a cat for our logo to add some more fun into our app. </p>
                <img src = {design} className = "design-sys" alt = "image of color palette, typography choices, and assets"/>
            <h3>Your Personal Calligraphy Coach</h3>

            {/* <div className = "container">
                <div className = "description">
                    <h4>Onboarding</h4>
                    <p>Complete an fun interactive introduction to Chinese script, and feel a sense of accomplishment before learning about the different features of the app. </p>
                </div>
                <div className = "screens">

                </div>
            </div> */}

            <div className = "container one-phone">
                <div className = "description">
                    <h4>Learn fundamentals</h4>
                    <p>Users can learn and practice basic Chinese calligraphy strokes, then progress to simple characters and themed packs. Each character level begins by teaching the stroke order.</p>
                </div>
                <div className = "screens">
                    <img className = "phone" src={learning} alt="learning characters screens"/>

                </div>
            </div>

            <div className = "container one-phone">
                <div className = "description">
                    <h4>Get instant feedback</h4>
                    <p>Within each level, users can take a picture of their physical calligraphy work. Maobi will analyze it and provide visual feedback, highlighting any mistakes.</p>
                </div>
                <div className = "screens">
                    <img className = "phone" src={camera} alt="camera feedback screens"/>

                </div>
            </div>

            <div className = "container one-phone">
                <div className = "description">
                    <h4>Use stars to unlock more</h4>
                    <p>With the stars accumulated each level, users can use these stars as currency to unlock more character levels, serving as motivation to keep going. </p>
                </div>
                <div className = "screens">
                    <img className = "phone" src={unlock} alt="unlocking characters screens"/>
                </div>
            </div>

            {/* <div className = "container">
                <div className = "description">
                    <h4>A new challenge everyday</h4>
                    <p>Users can complete a daily challenge everyday, unlocking the respective character once completed. </p>
                </div>
                <div className = "screens">

                </div>
            </div> */}



            <h2>Development</h2>

            {/* <h3>From Design to Code</h3> */}

            {/* <div className = "container">

                <div className = "description">
                    <p>In transitioning from design to code, we documented the API calls and data flow between objects to understand how information would move through the app.
                    </p><p>I identified the essential features for our MVP: app onboarding, levels for basic strokes and characters, and the camera feedback function. We spent two weeks developing the MVP, conducted another round of user testing, and then spent two more weeks making final adjustments.</p>
                </div>

                <div className = "screens">
                    <img src={datamapping} alt = "data mapping"/>
                </div>
                
            </div> */}

            <h3>When our initial image-processing approach didn't work, I redesigned the interaction.</h3>
            <div className = "container one-phone">

            <div className = "description">
                <p>I initially designed Maobi to transform the perspective of the paper after taking a picture (similar to paper scanning apps like <a href="https://apps.apple.com/us/app/camscanner-pdf-scanner-app/id388627783" target="_blank">CamScanner</a>). However, our code couldn’t adjust angled images or recognize characters accurately.

                </p><p>To resolve this, I re-designed the screen so users can <strong>rotate, move, and resize</strong> their work to fit an overlay of the template image, ensuring our image processing code could recognize the submitted image to provide feedback.</p>
            </div>

            <div className = "screens">
                <img className = "phone shadow" src={adjustment} alt="adjusting taken photo"/>

            </div>
            </div>


           

            {/* <p>Below is a demo video of how our app looked after being developed in SwiftUI.</p>

            <iframe width = "100%" src="https://drive.google.com/file/d/1Ya0dvYiQsKLBRYcu5Uv4t4tpsFUdK09M/preview" title="drive video"></iframe> */}
            
            <p>In addition to coding the app in SwiftUI, we presented an 8-minute pitch to Capital One employees, and they awarded us the 2nd place prize out of 19 teams.</p>
            <h2>Reflection</h2>

            <h3>Working with Developers</h3>
            <p>This project was especially valuable to me because I got to work as both a designer and a developer. I was the only designer on the team, so it was important that I communicated effectively with my team of developers. My Information Systems background helped me to collaborate well with my team, since I understood the technical sides of implementing a design.</p>

            <h3>Understanding What's Feasible</h3>
            <p>As we began coding out the app, I discovered that many design decisions I made in our prototype were not entirely feasible 
                due to iOS and Swift/Xcode limitations. We ended up having to adapt and change our initial 
                plans for our features during the development process. In the future, I am sure to keep in mind the technology and its limits.</p>

                <h3>The Power of Rapid Iteration</h3>
            <p>This project was done with the agile work process in a series of sprints. As a result, I was able to experiment a lot with what worked and what didn't by testing and refining ideas quickly.</p>
        </div>

        {/* <NextProject key = "Bridge"
                        url = "/bridge"
                        title = "Bridge"
                        /> */}

        </>

    );
}