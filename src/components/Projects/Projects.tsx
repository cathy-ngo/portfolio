import snakeImage from "../../static/assets/images/projects/snake.png"
import loldleImage from "../../static/assets/images/projects/loldle.png"
import asaviImage from "../../static/assets/images/projects/asavi.png"
import ProjectTitle from "./ProjectTitle";
import Tag from "../Tag";
import { useState } from "react";
import Project from "./Project";

export default function Projects() {
   
    const projects: Project[] = [ 
        {
            name: "snake",
            image: snakeImage,
            tags: ["dev", "design"],
            description: "a modern rendition of the timeless Snake game",
            tools: ["html", "css", "javascript", "figma"],
            url: "https://snake.cathy.ngo/"
        },
        {
            name: "loldle",
            image: loldleImage,
            tags: ["dev", "design"],
            description: "a wordle-inspired puzzle game based off the popular online game League of Legends",
            tools: ["html", "css", "javascript", "flask", "python", "sqlite"],
            url: "https://loldle.cathy.ngo/"
        },
        {
            name: "asavi",
            image: asaviImage,
            tags: ["dev", "design"],
            description: "a user-friendly website centralising data, research and resources on Strep A",
            tools: ["html", "css", "javascript", "django", "python"],
            url: "https://database.asavi.org.au/"
        },
    ]

    return (
        <div>
            <div className="flex justify-center">
                <h2 className="jua gradient-text text-4xl mb-8">projects</h2>
            </div>
            <div className="flex justify-center flex-wrap gap-10">
                {projects.map(project => <Project project={project}/>)}
            </div>
        </div>
    );
}
