import React from "react";
import "./contactSection.css"
import ArrowOutwardOutlinedIcon from '@material-ui/icons/CallMadeOutlined';

const ContactSection = () => {
    return (
        <div className="Contact-section">
            <div className="Contact-section-container">
                <div className="Contact-section-container-title"><h1>The MasterCamps<br />Experience, First Hand.</h1></div>
                <div className="Contact-section-container-btn"><span>CONNECT WITH US <ArrowOutwardOutlinedIcon /></span></div>
            </div>
        </div>
    );
}

export default ContactSection;