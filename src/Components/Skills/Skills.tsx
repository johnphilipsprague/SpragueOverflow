import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SkillsData, skillsData } from './skillsData';

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
    const navigate = useNavigate();
    return (
        <section className="skills">
            <p className="skills__text">I learned that</p>
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
