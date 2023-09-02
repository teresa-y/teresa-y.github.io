import Projects from "../components/Projects";

export default function Home() {
    return (
        <>
            <div className="intro">
                <div className = "top">hi! i'm teresa </div><br/>
                <div className = "bottom">ux designer and developer | information systems + hci @ cmu </div>
            
            </div>

            {/* project list */}
            <Projects />
        </>
    );
}