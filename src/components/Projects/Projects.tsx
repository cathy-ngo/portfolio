import Project from "./Project";
import { PROJECTS } from "../../constants/projects";

export default function Projects() {
    return (
        <div>
            <div className="flex justify-center">
                <h2 className="jua gradient-text text-4xl mb-8">projects</h2>
            </div>
            <div className="flex justify-center flex-wrap gap-10">
                {PROJECTS.map(project => <Project project={project}/>)}
            </div>
        </div>
    );
}
