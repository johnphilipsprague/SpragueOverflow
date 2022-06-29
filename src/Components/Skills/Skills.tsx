import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SkillsData, skillsData } from './skillsData';

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
    const navigate = useNavigate();
    return (
        <section className="skills">
            <p className="skills__text">
                While attending Fullstack Academy I was primarily taught the PERN stack over the course of 550+ hours of lectures and workshops, but I think the greatest skill I learned during my time
                as a student was the ability to efficiently pick up technologies at rapid speeds.
            </p>
            <p className="skills__text">
                Applying the PQ4R ( Preview, Question, Read, Reflect, Recite, Review) approach to unfamiliar documentation and utilizing modern tutorials online allows me to immediately start
                implementing new libraries, frameworks, or methodologies.
            </p>
            <p className="skills__text">I’m a lifelong learner, and will never back down from adding a new technology to my stack.</p>
            <p className="skills__tag">
                The{' '}
                <button className="skills__stack-name button" onClick={() => navigate('/aboutme')}>
                    JOHN
                </button>{' '}
                stack
            </p>
            <div className="skills__container">
                {skillsData.map((skill: SkillsData, idx: number) => (
                    <div key={idx} className="skills__single-skill">
                        <div className="skills__icon">
                            <skill.icon></skill.icon>
                        </div>
                        <p className="skills__label">{skill.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
