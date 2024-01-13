import React from 'react';
import LogoImg from "../Assets/MLogo.png";
import './navbar.css';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';


const Navbar = () => {

    const handleMenuClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleLogoClick = () => {
        // Scroll to the top section
        handleMenuClick('main-section');
    };

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <div className='logo' onClick={handleLogoClick}>

                    <div className='logo-M' >
                        <img src={LogoImg} alt="Masters' Union Logo" />
                    </div>
                    <div className='logo-text'>
                        <span id='child-1'>asterCamp</span><br />
                        <span id='child-2'>BY MASTERS' UNION</span>
                    </div>

                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"><AppsOutlinedIcon /></span>
                </button>
                <div className="collapse navbar-collapse menu" id="navbarSupportedContent">

                    <div onClick={() => handleMenuClick('masters-section')} className='menu-btn'>
                        <a src="#">Masters</a>
                    </div>
                    <div onClick={() => handleMenuClick('courses-Section')} className='menu-btn'>
                        <a src="#">Admissions</a>
                    </div>
                    <div onClick={() => handleMenuClick('student-life')} className='menu-btn'>
                        <a src="#">Student Life</a>
                    </div>

                </div>

                <div className='btn collapse navbar-collapse  menu' id="navbarSupportedContent">
                    <span>Strategic Marketing & AI</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
