import Projects from "../components/Projects";
// import me from "../images/other/me.gif"
import Play from "./Play"

export default function Home() {
    return (
        <>
            <div className="intro">
                <div className="intro-words">

                    <div className = "top">
                        {/* <img style={{ height: "1.5em", verticalAlign: "middle" }} src={fish} alt="fish" />  */}
                         ✿˖° Teresa Yang is a product designer with a technical and visual background in front-end code, product thinking, and illustration.  </div>

                </div>
                {/* <div className="intro-pic">

                    <img src={me} alt="drawing of teresa yang" ></img>

                </div> */}
            </div>

            {/* project list */}
            
            <Projects />

        </>
    );
}