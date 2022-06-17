import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="footer">
            <h1 className="footer__contact-me">Contact Me</h1>
            <div className="footer__icon-container">
                <div>
                    <a className="footer__icon" href="https://www.linkedin.com/in/johnphilipsprague/" rel="noreferrer" target="_blank">
                        <AiFillLinkedin />
                    </a>
                </div>
                <div>
                    <a className="footer__icon" href="mailto:jpsprague95@gmail.com" rel="noreferrer" target="_blank">
                        <AiOutlineMail />
                    </a>
                </div>
                <div>
                    <a className="footer__icon" href="https://github.com/johnphilipsprague" rel="noreferrer" target="_blank">
                        <AiFillGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
};
