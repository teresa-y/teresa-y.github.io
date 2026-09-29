import { NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react';

const scrollToTop = () => {
    window.scrollTo({ top: 0 });
};

export default function ProjectCard(props) {
    // This is an SVG image encoded into a string so the browser can use it as a cursor.
    // It draws a gray rounded rectangle (pill) with white "COMING SOON" text.
    // The "60 17" centers the cursor on the mouse pointer.
const customCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='32'%3E%3Crect width='128' height='32' rx='16' fill='black'/%3E%3Ctext x='64' y='21' fill='white' font-size='11' font-family='IBM%20Plex%20Mono,%20monospace' font-weight='bold' text-anchor='middle' letter-spacing='0.5'%3ECOMING%20SOON%20%E2%9C%BF%3C/text%3E%3C/svg%3E") 64 16, auto`;    return (
        <div className="project-card-container">
            
            {/* 1. THUMBNAIL SECTION */}
            <div 
                className="project-img" 
                // Apply the custom cursor only if the project is coming soon
                style={props.comingSoon ? { cursor: customCursor } : {}}
            >
                {props.comingSoon ? (
                    // Just render the image (unclickable) if coming soon
                    <img src={props.pic} alt={props.alt} />
                ) : (
                    // Render the clickable link if it's a finished project
                    <NavLink 
                        to={props.url}
                        onClick={props.target ? () => { } : scrollToTop}
                        target={props.target ? props.target : ""}
                    >
                        <img src={props.pic} alt={props.alt} />
                    </NavLink>
                )}
            </div>

            {/* 2. INFO SECTION */}
            <div className="project-card-info">
                <div className="project-title">
                    {props.title}
                </div>

                <div className="project-card-desc">
                    {props.desc}
                </div>

                {/* 3. BUTTON SECTION */}
                <div className="project-button">
                    {props.comingSoon ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '15px', color: 'gray' }}>
                            <i>Coming Soon</i>
                        </span>
                    ) : (
                        <NavLink
                            to={props.url}
                            onClick={props.target ? () => { } : scrollToTop}
                            target={props.target ? props.target : ""}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '15px' }}
                        >
                            View Project
                            <ArrowUpRight />
                        </NavLink>
                    )}
                </div>
            </div>
            
        </div>
    );
}