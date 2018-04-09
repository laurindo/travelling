import React from 'react';
import img from '../../img/travel.jpg';
import Book from './Book.jsx';

const Banner = ({}) => {
    return (
        <div className='banner'>
            <div className='backdrop'>&nbsp;</div>
            <div className='overbackdrop'>
                <h2>Book Trains, Buses and Flight</h2>
                <h6>Find a better way to travel</h6>
                <Book />
            </div>
        </div>
    );
};

export default Banner;