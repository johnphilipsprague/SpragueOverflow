import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
    const navigate = useNavigate();
    return (
        <header>
            <button onClick={() => navigate('/')}>Sprague Overflow</button>
            <button onClick={() => navigate('/aboutme')}>About Me</button>
            <button onClick={() => navigate('/projects')}>Projects</button>
            <button onClick={() => navigate('/skills')}>Skills</button>
        </header>
    );
};
