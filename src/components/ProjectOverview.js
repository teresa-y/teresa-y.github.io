

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
                    {props.description}
                </div>

                <div className = "project-info" dangerouslySetInnerHTML={{__html: props.info}}>
                </div>

            </div>



        </div>

    )
}