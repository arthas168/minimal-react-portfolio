import React from 'react';
import Home from './home';

import data from './yourdata';

const Landing = () => {
    return (
        <div className="App">
            <Home name={
                    data.landingPageName
                }
                paragraph={
                    data.landingPagePara
                }
                authorImage={
                    data.landingPageImage
                }/>

        </div>
    )
}

export default Landing
