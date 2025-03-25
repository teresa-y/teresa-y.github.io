import Projects from "../components/Projects";
import me from "../images/other/me.gif"
import fish from "../images/other/fish.png"


export default function Home() {
    return (
        <>
            <div className="intro">
                <div className="intro-words">

                    <div className = "top">
                        {/* <img style={{ height: "1.5em", verticalAlign: "middle" }} src={fish} alt="fish" />  */}
                         Hi! I'm Teresa. </div>
                    <div className = "bottom"><p>I am an interdisciplinary UX designer who builds worlds, stories, and experiences that connect with people.</p>
                        
                    </div>

                </div>
                <div className="intro-pic">

                    <img src={me} alt="drawing of teresa yang" ></img>

                </div>
            </div>

            {/* project list */}
            
            <Projects />
        </>
    );
}