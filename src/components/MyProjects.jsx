import projects from "../projects"
import Card from "../components/Card"

export default function MyProjects() {


    const projectCard = projects.map(project =>
        <Card
            key={project.id}
            name={project.name}
            thumbnail={project.image}
            description={project.description}
            stacks={project.stacks}
            url={project.url}
            gitHub={project.gitHub}
        />
    );

    return (
        <div id="projects" className="my-projects">
            <div className="my-projects-flex-container container">
                <div className="text-center">
                    <h2>Here are some of  <span className="color-accent">my projects</span> </h2>
                </div>
                {projectCard}
            </div>
        </div>
    )
}