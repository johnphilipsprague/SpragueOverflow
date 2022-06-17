import React from 'react';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
    return (
        <div className="home">
            <p className="home__greeting">Whether it was intentional or accidental, you've landed on my corner of the internet. I welcome you all the same!</p>
            <p className="home__greeting">
                My name is John Philip Sprague and this is my portfolio. In it's pages you will find information on me, my ventures into the tech industry, and records of what I've learned so far on
                my journey.
            </p>
            <p className="home__greeting">Now go! Explore! If you get lost, be not afraid, for I remembered my error handling! </p>
        </div>
    );
};
