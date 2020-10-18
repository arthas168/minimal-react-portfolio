import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = ({contactEmail, contactPara, socialLinks})=>{

    return (
      <div className="contact_container">
        <div className="social_links">
          <ul>
            <li>
              <a href={`mailto:${contactEmail}`}>
                <FaEnvelope></FaEnvelope>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                <FaGithub></FaGithub>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Contact