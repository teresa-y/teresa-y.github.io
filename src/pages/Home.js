import Projects from "../components/Projects";
import me from "../images/other/me.gif"

export default function Home() {
    return (
        <>
            <div className="intro">
                <div className="intro-words">

                    <div className = "top">hi! i'm teresa </div><br/>
                    <div className = "bottom">ux designer and developer <br/><br/>  information systems + hci @ cmu </div>

                </div>
                <div className="intro-pic">

                    <img src={me} alt="drawing of teresa yang"></img>

                </div>
            </div>

            {/* project list */}
            <Projects />
        </>
    );
}