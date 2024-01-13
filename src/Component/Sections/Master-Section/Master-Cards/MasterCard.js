import React, { useState } from 'react';
import '../masterSection.css';

const MasterCard = ({ name, designation, imgUrl }) => {
    return (
        <div className="master-card">
            <div className='master-card-img'><img src={imgUrl} alt={name} /></div>
            <div className='master-card-text'>
                <div className='master-card-name'><h3>{name}</h3></div>
                <div className='master-card-design'><p>{designation}</p></div>
            </div>


        </div>
    );
};

export default MasterCard;