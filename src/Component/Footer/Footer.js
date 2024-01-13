import React from 'react';
import './footer.css';
import LogoImg from "../Assets/LOGO.png";
import IconButton from '@material-ui/core/IconButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={LogoImg} alt="Masters' Union Logo" />
                    </div>
                    <div className="footer-info">
                        <div className='Icon'>
                            <IconButton color="primary" aria-label="delete">
                                <LocationOnIcon />
                            </IconButton>
                        </div>
                        <div className='address'>
                            <p>DLF Cyberpark, Phase II, Udyog Vihar, Sector 20</p>
                            <p>Gurugram, Haryana, 122008</p>
                        </div>

                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Cookie Policy</a>
                        <p className="footer-note">*T&C apply. Images shown here may differ from actual product</p>
                        <p className='social-media-icons'>
                            <InstagramIcon className='social-media' style={{ fontSize: 30, marginRight: 10 }} />
                            <TwitterIcon className='social-media' style={{ fontSize: 30, marginRight: 10 }} />
                            <FacebookIcon className='social-media' style={{ fontSize: 30, marginRight: 10 }} />
                            <LinkedInIcon className='social-media' style={{ fontSize: 30 }} />
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;