import React from 'react';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <div className="not-found">
            <h1 className="not-found__code">404</h1>
            <h2 className="not-found__error">Page Not Found</h2>
            <p className="not-found__guide">Use the navigation bar at the top of this page to leave this barren wastelands.</p>
        </div>
    );
};
