import React from 'react';
import { projectData, ProjectData } from './projectData';

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
    return (
        <section>
            {projectData.map((project: ProjectData, idx: number) => (
                <div key={idx} className="single-project-container">
                    <img className="project-image" src={project.imageURL} alt="project logo" />
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <p>Team Size: {project.teamSize}</p>
                    <p>Duration: {project.time}</p>
                    <p>Tech Stack: {project.technologies}</p>
                    <p>Duration: {project.time}</p>
                    <a href={project.appLink}>ad</a>
                </div>
            ))}
        </section>
    );
};
