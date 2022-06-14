import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
    return (
        <>
            <div id="content-container">
                <Header />
                <div id="content">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
};
