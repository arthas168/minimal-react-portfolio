import React from 'react';
import Typed from 'react-typed';

const Home = ({name, paragraph, authorImage}) => {

    return (
        <div>
            <div className="home_container_top">
                <div className="home_head_wrapper">
                    <h1>
                        Hi! I'm<br></br>
                        <span>{name}</span>
                    </h1>
                    <p>
                        <Typed className="typed_text"
                            strings={
                                ['Full Stack Developer',
                                 'Proficient in Javascript and Kotlin',
                                 'Strong teamwork and leadership skills',
                                 'Always up for new challenges!']
                            }
                            typeSpeed={80}
                            backSpeed={30}
                            loop
                            />
                    </p>
                </div>
                <div className="image_container">
                    <img src={authorImage}
                        alt="Author"></img>
                    <div className="bg"></div>
                </div>

            </div>
        </div>
    )
}

export default Home;
