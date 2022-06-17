import React from 'react';

interface AboutMeProps {}

export const AboutMe: React.FC<AboutMeProps> = () => {
    return (
        <section className="about-me">
            <img className="about-me__image" src="https://i.imgur.com/La9cCRC.png" alt="pixel art rat" />
            <div className="about-me__bio">
                <h1>My name is John</h1>
            </div>
        </section>
    );
};
