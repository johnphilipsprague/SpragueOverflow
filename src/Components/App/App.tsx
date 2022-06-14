import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { SideBar } from '../Sidebar/SideBar';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
    return (
        <div>
            <NavBar />
            <div style={{ border: 2, padding: 2, borderColor: 'pink', borderStyle: 'dashed' }}>
                <Outlet />
            </div>
            <span>
                <SideBar />
            </span>
        </div>
    );
};
