import React from 'react';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Use the navigation bar at the top of this page to leave this barren wastelands.</p>
        </div>
    );
};
