import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    const navigate = useNavigate();
    return (
        <header>
            <div id="title">
                <button onClick={() => navigate('/')}>Sprague Overflow</button>
            </div>
            <nav>
                <div className="link-container">
                    <button onClick={() => navigate('/aboutme')}>About Me</button>
                </div>
                <div className="link-container">
                    <button onClick={() => navigate('/projects')}>Projects</button>
                </div>
                <div className="link-container">
                    <button onClick={() => navigate('/skills')}>Skills</button>
                </div>
            </nav>
        </header>
    );
};
