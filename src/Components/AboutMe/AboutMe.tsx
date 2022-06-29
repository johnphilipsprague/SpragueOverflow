import React from 'react';

interface AboutMeProps {}

export const AboutMe: React.FC<AboutMeProps> = () => {
    return (
        <section className="about-me">
            <img className="about-me__image" src="https://i.imgur.com/La9cCRC.png" alt="pixel art rat" />
            <div className="about-me__bio">
                <h1 className="about-me__intro"> Hey, I'm John!</h1>
                <p className="about-me__para">
                    To kick things off, lets cover some history about little ol' me. I was born and raised in southern Maine by a music instructor and an electrical engineer, so while over the course
                    of my life I’ve had many different interests, music and technology have always been large aspects of my life.
                </p>
                <p className="about-me__para">
                    You aren't here to hear about my sick mixtape dropping this summer though, so let's talk about my lifelong relationship with tech. Growing up, computers were always within arms
                    reach. Whether I was playing chess against my father's A.I. he had written in C, farming trees in old school RuneScape, or trouble shooting errors on my neighbors browser so that
                    she could play NeoPets, it was obvious to anyone who knew me that I was captivated.
                </p>
                <p className="about-me__para">
                    Fast forward to January 2022. Over the previous 5 years, opportunity and circumstance had taken me from the forests of Maine to the Rocky Mountains of Colorado to the lake shore of
                    Illinois. Throughout that time, my relationship with tech had come to somewhat of a standstill. It still surrounded my life in a major capacity, but somewhere along the way I had
                    stopped learning and I felt its absence in my heart.
                </p>
                <p className="about-me__para">
                    Thus, the path ahead became clear. On January 21st of 2022 I was accepted into Fullstack Academy's immersive JavaScript coding bootcamp program, where I was taught front and back
                    end technologies over the course of 17 weeks. Now my passion for this field has been relit, and there is no going back. I've started learning again with no intention to stop, and
                    I'm excited to see where opportunity and circumstance will lead me now!
                </p>
            </div>
        </section>
    );
};
