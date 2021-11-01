import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = ({ contactEmail, socialLinks }) => {

    return (
        <div className="contact">
            <div className="social_links">
                <ul>
                    <li>
                        <a href={`mailto:${contactEmail}`}>
                            <FaEnvelope></FaEnvelope>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href={socialLinks[0].url}>
                            <FaLinkedin></FaLinkedin>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href={socialLinks[1].url}>
                            <FaGithub></FaGithub>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact