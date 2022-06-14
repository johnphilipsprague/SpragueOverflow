import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
    return (
        <>
            <div id="content-container">
                <NavBar />
                <div id="content">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
};
