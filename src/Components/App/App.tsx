import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
    return (
        <div className="app">
            <Header />
            <div className="app__content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
