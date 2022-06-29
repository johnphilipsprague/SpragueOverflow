import React from 'react';
import { projectData, ProjectData } from './projectData';
import { IoGlobeOutline } from 'react-icons/io5';
import { RiGithubLine } from 'react-icons/ri';

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
    return (
        <section className="projects">
            {projectData.map((project: ProjectData, idx: number) => (
                <div key={idx} className="projects__project-container">
                    <img className="projects__thumbnail" src={project.imageURL} alt="project thumbnail" />
                    <div className="projects__info">
                        <h1 className="projects__title">{project.title}</h1>
                        <p className="projects__description">{project.description}</p>
                        <p className="projects__data">
                            <span className="projects__data-category">Team Size: </span>
                            {project.teamSize}
                        </p>
                        <p className="projects__data">
                            <span className="projects__data-category">Tech Stack: </span>
                            {project.technologies}
                        </p>
                        <p className="projects__data">
                            <span className="projects__data-category">Duration: </span>
                            {project.time}
                        </p>
                        <div className="projects__link-container">
                            <a className="projects__link" href={project.appLink} rel="noreferrer" target="_blank">
                                <IoGlobeOutline />
                            </a>
                            <a className="projects__link" href={project.gitHubLink} rel="noreferrer" target="_blank">
                                <RiGithubLine />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
