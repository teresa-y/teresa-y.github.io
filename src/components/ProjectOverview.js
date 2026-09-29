

export default function ProjectOverview(props) {
    return (
        <div className = "project-overview-container">

            <div className = "project-overview-pic">
            <video
                src={props.pic}
                type="video/webm"
                autoPlay
                loop
                muted
                playsInline
                style={{ pointerEvents: 'none' }}
      />
            </div>

            <div className = "project-overview-title">
                <h1>{props.title}</h1>
            </div>

            <div className = "project-summary">

                <div className = "project-desc">
                    <p>{props.description}</p>
                </div>

<div className="project-info-grid">
        <div className="info-column">
          <h2>Timeline</h2>
          <p>{props.timeline}</p>
        </div>
        
        <div className="info-column">
          <h2>Role</h2>
          <p>{props.role}</p>
        </div>
        
        <div className="info-column">
          <h2>Team</h2>
          {/* Using white-space: pre-line in CSS allows \n to create new lines */}
          <p>{props.team}</p>
        </div>
        
        <div className="info-column">
          <h2>Tools</h2>
          <p>{props.tools}</p>
        </div>
        </div>
            </div>



        </div>

    )
}