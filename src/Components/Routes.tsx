import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import pages from './';

const { AboutMe, App, Home, Projects, Skills } = pages;

interface RoutesProps {}

export const routes: React.FC<RoutesProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/aboutme" element={<AboutMe />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/skills" element={<Skills />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
