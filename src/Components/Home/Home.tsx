import React from 'react';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
    return (
        <div className="Home">
            <div className="Home-div">
                <p>John is currently working tirelessly on Sprague Overflow at the moment.</p>
                <p>Enjoy this gif of a kitten while you wait!</p>
                <img alt={'Silly Cat Gif'} src={'https://i.imgur.com/zlFH5oo.gif'} />
            </div>
        </div>
    );
};
