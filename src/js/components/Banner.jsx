import React from 'react';
import img from '../../img/travel.jpg';

const Banner = () => {
    return (
        <div>
            <img src={img} alt="banner" style={{ width: "100%" }} />
        </div>
    );
};

export default Banner;