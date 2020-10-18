import React from "react";
import Typed from "react-typed";
import Skills from "./Skills"

const Header = ({ name, authorImage }) => {
    return (
        <div>
            <div className="home_container_top">
                <div className="home_head_wrapper">
                    <h1>
                        Hi! I'm<br></br> <span> {name} </span>{" "}
                    </h1>
                    <p>
                        <Typed
                            className="typed_text"
                            strings={['Full Stack Developer',
                                "Energetic and motivated to learn",
                                'Excellent people skills',
                                'Always up for new challenges!']}
                            typeSpeed={80}
                            backSpeed={30}
                            loop
                        />
                    </p>
                </div>
                <div className="image_container">
                    <img src={authorImage} alt="Author">
                    </img>
                    <div className="bg"> </div>
                </div>
                <Skills />
            </div>
        </div>
    );
};

export default Header;
