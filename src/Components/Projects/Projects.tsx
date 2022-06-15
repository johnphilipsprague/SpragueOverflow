import React from 'react';
import { projectData, ProjectData } from './projectData';
import { IoGlobeOutline } from 'react-icons/io5';
import { RiGithubLine } from 'react-icons/ri';

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
    return (
        <section>
            {projectData.map((project: ProjectData, idx: number) => (
                <div key={idx} className="single-project-container">
                    <img className="project-image" src={project.imageURL} alt="project logo" />
                    <div className="project-info">
                        <h1>{project.title}</h1>
                        <p className="project-description">{project.description}</p>
                        <p>
                            <span>Team Size: </span>
                            {project.teamSize}
                        </p>
                        <p>
                            <span>Tech Stack: </span>
                            {project.technologies}
                        </p>
                        <p>
                            <span>Duration: </span>
                            {project.time}
                        </p>
                        <p className="project-links">
                            <a href={project.appLink} rel="noreferrer" target="_blank">
                                <IoGlobeOutline />
                            </a>
                            <a href={project.gitHubLink} rel="noreferrer" target="_blank">
                                <RiGithubLine />
                            </a>
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};
