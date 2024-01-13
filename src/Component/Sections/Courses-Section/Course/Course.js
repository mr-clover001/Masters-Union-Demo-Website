import React from "react";
import "./course.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import UserIcon from "@material-ui/icons/VerifiedUser";
import VideocamIcon from "@material-ui/icons/Videocam";
import ArrowForwardIcon from '@material-ui/icons/StarOutlined';
import ArrowOutwardOutlinedIcon from '@material-ui/icons/CallMadeOutlined';




const Course = ({ selectedTopic }) => {
    return (
        <div className="Course">
            <div className="course-title">
                <span>{selectedTopic.name}</span>
            </div>
            <div className="course-details">
                <div className="course-details-info">

                    <div className="details">
                        <div className="deadline-duration">
                            <div className="deadline block">
                                <div className="icon">
                                    <AccessTimeIcon />
                                </div>
                                <div className="info">
                                    <span className="info-head">Round | Deadline</span><br />
                                    <span className="info-body">TBD</span>
                                </div>
                            </div>
                            <div className="duration block">
                                <div className="icon">
                                    <LocationOnIcon />
                                </div>
                                <div className="info">
                                    <span className="info-head">{selectedTopic.duration} Months</span><br />
                                    <span className="info-body">8 hours/weekend</span>
                                </div>
                            </div>

                        </div>

                        <div className="Mode-taughtBy">
                            <div className="Mode block">
                                <div className="icon">
                                    <VideocamIcon />
                                </div>
                                <div className="info ">
                                    <span className="info-head">Hybrid</span><br />
                                    <span className="info-body">In-person + Online</span>
                                </div>
                            </div>
                            <div className="taughtBy block">
                                <div className="icon">
                                    <UserIcon />
                                </div>
                                <div className="info">
                                    <span className="info-head">Taught by:</span><br />
                                    <span className="info-body">{selectedTopic.taughtBy}</span>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="course-details-points">
                        <ArrowForwardIcon className="pointer-icon" /><span>All cllases led by <b>{selectedTopic.taughtBy}</b> Experts</span><br />
                        <ArrowForwardIcon className="pointer-icon" /><span>Get <b>1:1 mentorship</b> & a <b>career development plan</b></span><br />
                        <ArrowForwardIcon className="pointer-icon" /><span><b>{selectedTopic.duration} Months virtual & hands-on internship</b> at {selectedTopic.taughtBy}</span><br />
                    </div>

                    <div className="Apply-button">
                        <span>Apply Now <ArrowOutwardOutlinedIcon /></span>
                    </div>
                </div>

                <div className="Course-detail-img">
                    <img src={selectedTopic.imgUrl} alt="Masters' Union" />
                </div>

            </div>

        </div>
    );
};

export default Course;
{/* <h2 > Selected Course:</h2 >
            <p>Name: {selectedTopic.name}</p>
            <p>Taught By: {selectedTopic.taughtBy}</p>
            <p>Duration: {selectedTopic.duration}</p> */}