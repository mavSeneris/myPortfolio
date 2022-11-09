export default function Card(props) {


    return (
        <div className="project">
            <div className="project-wrapper">
                <img className="project-image" src={props.thumbnail} />
                <div className="project-description">
                    <h3 className="project-description-title">
                        {props.name}
                    </h3>
                    <h4 className="project-description-sub-title">
                        HTML, CSS, JavaScript and React
                    </h4>
                    <p className="project-description-para">
                        {props.description}
                    </p>
                    <div className="project-description-links">
                        <a href={props.gitHub} target="_blank" className="project-description-link">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div className="project-description-links">
                        <a href={props.url} target="_blank" className="project-description-link">
                            <i className="fas fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}