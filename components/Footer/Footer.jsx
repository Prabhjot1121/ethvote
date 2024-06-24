import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Style from "./Footer.module.css"; // Create a CSS module file for styling

const Footer = () => {
    return (
        <footer className={Style.footer}>
            <div className={Style.footerContent}>
                <p>Made with ❤️ by Your Name</p>
                <div className={Style.socialIcons}>
                    <a
                        href="https://github.com/Prabhjot1121"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://twitter.com/Prabhjo47190719"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/prabhjot-singh-252b77261/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
