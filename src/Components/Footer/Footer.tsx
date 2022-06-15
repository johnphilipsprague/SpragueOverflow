import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <h1>Contact Me</h1>
            <div id="contact-icons">
                <div>
                    <a href="https://www.linkedin.com/in/johnphilipsprague/" rel="noreferrer" target="_blank">
                        <AiFillLinkedin />
                    </a>
                </div>
                <div>
                    <a href="mailto:jpsprague95@gmail.com" rel="noreferrer" target="_blank">
                        <AiFillMail />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/johnphilipsprague" rel="noreferrer" target="_blank">
                        <AiFillGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
};
