import React from 'react';
import './residentSection.css';
import ImgUrl from "./Image.png";

function ResidentSection() {
    return (
        <div id="student-life" className='Resident-section'>

            <div className='Resident-section-heading'>
                <h1>
                    <span>Experience.</span><br />
                    <span>Engage. Elevate.</span>
                </h1>


            </div>

            <div className='Resident-section-container'>

                <div className='Resident-section-left'>

                    <span className='one'>1</span><span>OFFLINE</span>

                    <div className='Resident-section-left-title'>

                        <h1>In-Person Residencies</h1>

                    </div>

                    <div className='Resident-section-left-content'>

                        <p>For every programme, we host <b>3 offline residencies</b> across<br /> location in india & our <b>Gurgaon campaus</b> which gives cohort<br /> members the opportunity to learn, network & make <br />memories.</p>

                    </div>

                </div>

                <div className='Resident-section-right'>
                    <img src={ImgUrl} alt='masters union' />
                </div>
            </div>

        </div>
    );
}

export default ResidentSection;