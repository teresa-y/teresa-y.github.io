export default function ProjectOverview(props) {
    return (
        <div className = "project-overview-container">

            <div className = "project-overview-pic">
                {props.pic}
            </div>

            <div className = "project-overview-title">
                {props.title}
            </div>

            <div className = "project-summary">

                <div>
                    {props.description}
                </div>

                <div>
                    {props.info}
                </div>

            </div>



        </div>

    )
}