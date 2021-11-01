import React from 'react';
import Header from './Header';
import Experience from "./Experience"
import Contact from "./Contact"

import data from './Data';

const Landing = () => {
    return (
        <div className="App">
            <Contact socialLinks={data.social} contactEmail={data.contactEmail}/>
            <Header name={
                data.landingPageName
            }
                    authorImage={
                        data.landingPageImage
                    }/>
            <Experience/>

        </div>
    )
}

export default Landing
