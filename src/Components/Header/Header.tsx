import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <button className="header__logo button" onClick={() => navigate('/')}>
                    <img className="header__logo-image" src="https://i.imgur.com/2HGQoWo.png" alt="Sprague Overflow" />
                </button>
            </div>
            <nav className="header__nav-bar">
                <div className="header__link-wrapper">
                    <button className="header__link button" onClick={() => navigate('/aboutme')}>
                        About
                    </button>
                </div>
                <div className="header__link-wrapper">
                    <button className="header__link button" onClick={() => navigate('/projects')}>
                        Projects
                    </button>
                </div>
                <div className="header__link-wrapper">
                    <button className="header__link button" onClick={() => navigate('/skills')}>
                        Skills
                    </button>
                </div>
            </nav>
        </header>
    );
};
