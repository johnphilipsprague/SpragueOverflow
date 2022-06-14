import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { routes as Routes } from './Components/Routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
);
