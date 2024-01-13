import { React, useEffect } from "react";
import './mainSection.css';
import LogoImg from "../Main-Section/Wallpaper.png";

const MainSection = () => {

    useEffect(() => {
        const textElements = document.querySelectorAll('.mainSection-moto h1 span');

        textElements.forEach((element, index) => {
            const delay = index * 500;
            setTimeout(() => {
                element.classList.add('show');
            }, delay);
        });
    }, []);


    return (
        <section id="main-section" className="mainSection">
            <div className="mainSection-top">
                <div className="mainSection-moto">

                    <h1 className="animate-text">
                        <span>Online</span>
                        <span>Practitioner-Led</span><br />
                        <span>Learning with Offline</span><br />
                        <span>Community Experiences</span>
                    </h1>

                </div>
                <div className="mainSection-gotoCourse">
                    <div className="text"><p>Our hybrid & experiential programmes are deigned to<br /> help you elvate your skills and embrak on a unique <br />learning journey that redefines your career path.</p>
                    </div>
                    <div className="Btn">
                        <a >WHICH PROGRAMME IS RIGHT FOR ME?</a>
                    </div>
                </div>

            </div>
            <div className="mainSection-bottom">
                <div className="Img">
                    <img src={LogoImg} alt=" Master's Union ClassRoom" />
                </div>
            </div>
        </section>
    );
};

export default MainSection;