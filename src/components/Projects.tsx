import snakeImage from "../static/assets/images/projects/snake.png"
import loldleImage from "../static/assets/images/projects/loldle.png"
import asaviImage from "../static/assets/images/projects/asavi.png"
import CardTitle from "./CardTitle";
import Tag from "./Tag";

export default function Projects() {
    const projects: Project[] = [ 
        {
            name: "snake",
            image: snakeImage,
            tags: ["dev", "design"]
        },
        {
            name: "loldle",
            image: loldleImage,
            tags: ["dev", "design"]
        },
        {
            name: "asavi",
            image: asaviImage,
            tags: ["dev", "design"]
        },
    ]

    console.log(projects);

    const array = projects.map(project => {
        return project.name
    });

    return (
        <div>
            <div className="flex justify-center">
                <h2 className="jua gradient-text text-4xl mb-8">projects</h2>
            </div>
            <div className="flex justify-center flex-wrap gap-10">
                {projects.map(project => {
                    return (
                        <div key={project.name} className="flex flex-col p-4 justify-between bg-cover h-96 w-96 rounded transition duration-200 cursor-pointer hover:scale-105" style={{backgroundImage: `url(${project.image})`}}>
                            <CardTitle title={project.name}></CardTitle>
                            <div className="flex gap-3 justify-end">
                                {project.tags.map(tag => {
                                    return <Tag type={tag}></Tag>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

