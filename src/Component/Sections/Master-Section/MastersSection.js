import React, { useState } from 'react';
import MasterCard from './Master-Cards/MasterCard';
import './masterSection.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ImgUrl1 from "./Images/Screenshot 2024-01-12 224427.png"
import ImgUrl2 from "./Images/Edward.png";
import ImgUrl3 from "./Images/Manoj.png";
import ImgUrl4 from "./Images/Vipin.png";

const MastersSection = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handleRightArrowClick = () => {
        setStartIndex((startIndex + 1) % mastersData.length);
    };

    const handleLeftArrowClick = () => {
        setStartIndex((startIndex - 1 + mastersData.length) % mastersData.length);
    };

    const mastersData = [
        {
            name: 'Mihir Mankad',
            designation: 'Professor of Practice, Tufts & Harvard',
            imgUrl: ImgUrl1,
        },
        {
            name: 'Edward Rogers',
            designation: 'Former Chief Knowledge Officer, NASA',
            imgUrl: ImgUrl2,
        },
        {
            name: 'Manoj Kohli',
            designation: 'Former Chairman Airtel',
            imgUrl: ImgUrl3,
        },
        {
            name: 'Vipin Sondhi',
            designation: 'Former Managing Director Ashok Levyland',
            imgUrl: ImgUrl4,
        },
    ];


    // Ensure there are always three visible elements
    const visibleMasters = [];
    for (let i = 0; i < 4; i++) {
        visibleMasters.push(mastersData[(startIndex + i) % mastersData.length]);
    }

    return (
        <div id="masters-section" className="masters-component">
            <div className='masters-component-head'>
                <div className='masters-component-text'>
                    <h1>Meet Your Masters</h1>
                    <p>Take a closet look at Masters who've been there, and done that.</p>
                </div>

                <div className="arrow-container">
                    <div className='left' onClick={handleLeftArrowClick} ><ArrowBackIcon /></div>
                    <div className='right' onClick={handleRightArrowClick}><ArrowForwardIcon /></div>

                </div>

            </div>


            <div className="master-card-container">
                {visibleMasters.map((master, index) => (
                    <MasterCard key={index} {...master} />
                ))}
            </div>

        </div>
    );
};

export default MastersSection;


