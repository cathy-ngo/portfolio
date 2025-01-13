import { useState } from "react";
import Tag from "../Tag"
import ProjectTitle from "./ProjectTitle"

type ProjectProps = { 
    project: Project 
};

function Cover({project}: ProjectProps) {
    return (
        <div className="flex flex-col p-4 justify-between bg-cover h-96 w-96 rounded transition duration-200 cursor-pointer hover:scale-105" style={{backgroundImage: `url(${project.image})`}}>
            <ProjectTitle title={project.name}/>
            <div className="flex gap-3 justify-end">
                {project.tags.map(tag => {
                    return <Tag key={tag} type={tag}></Tag>
                })}
            </div>
        </div>
    )
}

function Details({project}: ProjectProps) {
    return (
        <div className="flex flex-col justify-between h-96 w-96 rounded transition duration-200 cursor-pointer hover:scale-105 bg-white p-4 opaque-white">
            <div>
                <div className="flex flex-row justify-between">
                    <ProjectTitle title={project.name}/>
                    {project.url &&
                    <a target="_blank" rel="noopener noreferrer" href={project.url}>
                        <div className="w-9 h-9 rounded flex justify-center bg-strawberry">
                            <div className="flex flex-col justify-center">
                                <img src="icons/arrow-up-right.svg" alt="External link" className="w-6 h-6"></img>
                            </div>
                        </div>
                    </a>
                    }

                </div>
                <div className="mt-4 flex flex-col gap-4">
                    <div>
                        <h4 className="gaegu text-brownie">{`// DESCRIPTION`}</h4>
                        <p className="gaegu text-brownie text-lg">{project.description}</p>
                    </div>
                    <div>
                        <h4 className="gaegu text-brownie">{`// BUILT WITH`}</h4>
                        <p className="gaegu text-brownie text-lg">{project.tools.join(', ')}</p>
                    </div>
                </div>
            </div>
            <img src="images/projects/pattern.svg" alt="Pattern"></img>
        </div>
    )
}

export default function Project({project} : ProjectProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div key={project.name} onClick={() => setIsFlipped(!isFlipped)}>
            { isFlipped ? <Details project={project}/> : <Cover project={project}/> }
        </div>
    )
}