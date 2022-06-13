import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutMe } from './Components/AboutMe/AboutMe';
import Home from './Components/Home/Home';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';

interface RoutesProps {}

export const routes: React.FC<RoutesProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/aboutme" element={<AboutMe />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
