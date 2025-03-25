import ProjectOverview from "../../components/ProjectOverview"
import NextProject from "../../components/NextProject"
import heuristicats from "../../images/heuristicats/heuristicats.webm"

import insp from "../../images/heuristicats/insp.png"
import insights from "../../images/heuristicats/insights.svg"
import learninggoals from "../../images/heuristicats/learninggoals.png"
import learningscience from "../../images/heuristicats/learningscience.png"

import coreloop from "../../images/heuristicats/coreloop.png"
import innerloop from "../../images/heuristicats/innerloop.png"
import styleinsp from "../../images/heuristicats/styleinsp.png"

import heuristicatsbath from "../../images/play/heuristicatsbath.gif"
import applyknowledge from "../../images/heuristicats/applyknowledge.png"

import arcatect from "../../images/heuristicats/arcatect.gif"
import catatouille from "../../images/heuristicats/catatouille.gif"
import cateye from "../../images/heuristicats/cateye.gif"
import villagers from "../../images/heuristicats/villagers.jpg"
import enemy from "../../images/heuristicats/enemy.jpg"



export default function Heuristicats() {
    return(
        <>
        <div className = "project-page">
            <ProjectOverview key = "Heuristicats" 
            pic={heuristicats} 
            title="Heuristicats" 
            description="Heuristicats is a narrative role-playing game that teaches players UX design principles through turn-based battles. In Heuristicats, defend your village, defeat enemies, and help villagers return to their normal lives by applying UX design concepts." 
            info = "<strong>Role:</strong> 2D Art & Animation, UI/UX Design<br/> <strong>Timeline:</strong> 10 weeks<br/> <strong>Team:</strong> Jeremia Lo, Adrian Ma, Nellie Tonev<br/><strong>Tools:</strong> Procreate, Figma"/>

        <div>
            <h2>Problem</h2>
            <h3>Learning UX can be overwhelming</h3>
            <p>With so many resources, processes, and standards, getting started with UI/UX design can be daunting. Some learners, especially those who are not looking to be UX Designers but would find a broad understanding of the field helpful, may be looking for a more casual experience that requires less time commitment.</p>
            <h2>Solution</h2>
            <h3>Learn UX by playing a game!</h3>
            <p>In Heuristicats, Cat Town is a village riddled with usability issues. Players must help the residents of Cat Town fight the evil Meowstermind and his UX-interfering henchmen by learning and applying heuristics (UX principles) to battle enemies and fix the game’s usability issues. As players progress through the game and solve its UX issues, they experience how their actions improve the game’s usability. </p>
            <h3>References and Inspirations</h3>
            <img src = {insp} alt="Jakob Nielsen's heuristics, Hochleitner's Game Framework, User Inyerface, Can't Unsee"/>

            <h2>Learning Design</h2>
            <h3>Establishing Learning Goals</h3>
            <p>I interviewed students interested in UI/UX (but had little background) to evaluate a game’s interface and propose potential solutions to usability errors that they found. </p>
            <br/>
            <img src={insights} alt = "insights"/>
            <br/><br/><br/>
            <img src={learninggoals} alt= " learning goals"/>

            <h3>Learning Science Principles</h3><br/>
            <img src={learningscience} alt= " learning science principles"/>

            <h2>Game Overview</h2>
            <h3>Core Gameplay Loop</h3>
            <p>Player interacts with surrounding environment, which exposes them to different heuristics through UX-broken minigames.</p>
            <img src = {coreloop} alt="core gameplay loop"/>
            <p><strong>Example of minigame with broken UX:</strong> </p>
            <div className = "container">
                <div className = "screens">
                    <img src={heuristicatsbath} alt= " bath minigame"/>

                </div>

                <div className = "description">
                    <p>When the bath minigame’s UX is broken, it is inconsistent in how it show which bath the cat should be put in. Players learn the importance of consistency and standard in UX design through this game.</p>
                </div>

            </div>

            <h3>Inner Gameplay Loop (Battle)</h3>
            <p>Player applies their knowledge in battle: the enemy interferes with the game’s interface, and the player fixes it by identifying the problem and a solution. This also applies stronger damage on the enemy.</p>
            <img src = {innerloop} alt="inner gameplay loop"/>
            
            <p><strong>Example of player being asked to apply their knowledge of UX principles:</strong></p>
            <div className = "container">
            <div className = "screens">
                    <img src={applyknowledge} alt= "player asked to apply knowledge during battle"/>

                </div>

                <div className = "description">
                    <p>By applying what they've learned in battle, players solidify their understanding of the material.</p>
                </div>

            </div>


            <h2>Visual Direction</h2>
            <h3>Style and UI Inspiration</h3>
            <img src = {styleinsp} alt="style inspirations include pokemon, undertale, and omori"/>

            <h3>The Heuristicats</h3>

            <div className = "third" style = {{alignItems: 'flex-end'}}>
                <div className = "item">
                    <img src = {catatouille} alt="catatouille gif"/>

                    <p><strong>Catatouille</strong> <br/> Consistency & Standards</p>
                </div>
                <div className = "item">
                    <img src = {arcatect} alt="arcatect gif" />

                    <p><strong>Arcatect</strong> <br/> Information Architecture</p>
                </div>
                <div className = "item">
                    <img src = {cateye} alt="cateye gif" />

                    <p><strong>Cateye</strong> <br/> User Control</p>
                </div>


            </div>
            
            <h3>Non-playable Cats</h3>

                <div className = "half" style={{alignItems:'flex-end'}}>
                    <div className = "item" style = {{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <img src = {villagers} alt = "villager cats"/>
                    <p><strong>Villager Cats</strong></p>

                    </div>                    
                    
                    <div className = "item" style = {{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <img src = {enemy} alt = "enemy cats"/>
                    <p><strong>Enemy Cats</strong></p>


                    </div>


                </div>
                <div className = "half">
                    <div className = "item">
                    </div>
                    <div className = "item">
                    Examples of UI/UX-altering attacks:
                    <ul>
                        <li>Flip the color-coding of skills (Consistency & Standards)</li>
                        <li>Action menu becomes ordered from least to most-used actions (Information Architecture)</li>
                        <li>Remove back button in sub-menus (User Control)</li>
                    </ul>

                    </div>
                </div>
                

            <h2>Reflection</h2> 
            <h3>Potential Improvements</h3>
            <h4>Slower Progression of Battles</h4>
                <ul>
                    <li>First battle can start with a simpler interface so players are more gradually introduced to the system and have more time to interact with learning concepts.</li>
                    <li>Animating the UI/UX changes during battles can help draw attention to the changes happening and their results.</li>
                </ul>
            
            <h4>Make "Fixed UX" Version More Entertaining</h4>

                <ul>
                    <li>Playtesters thought the “bad usability version” of the bath minigame was more entertaining than the fixed UX version.</li>
                    <li>Adding game elements unrelated to the UX fixes (ex: making players remove clean cats from the bath) can make sure the game stays entertaining after usability issues are fixed.</li>
                </ul>


            <h3>Takeaways</h3>  
            <h4>Making an Educational Game</h4>
            <p>People loved the cats and narrative, and thought of them as a tutor that they would want to listen to. It was also very cool to learn about the psychology behind learning and how to make it more fun while designing this game.</p>
    
            <h4>Constant Communication</h4>
            <p>With some working on backgrounds, others programming, and myself character design and art, we were all working on multiple tasks at the same time. In-person work sessions, bouncing ideas off each other, and providing constant updates helped keep us all on the same track. </p>

        </div>

        </div>

                                        <NextProject key = "maobi"
                                url = "/maobi"
                                title = "Maobi"
                                />
        </>
        

    );
}