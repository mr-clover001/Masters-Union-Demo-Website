import React, { useState } from "react";
import "./courseSection.css";
import Course from "./Course/Course";
import ImgUrl1 from "./Course/Img2.avif";
import ImgUrl2 from "./Course/img4.avif";
import ImgUrl3 from "./Course/Img3.avif";
import ImgUrl4 from "./Course/img6.jpg";
import ImgUrl5 from "./Course/img5.jpg";

const CoursesSection = () => {
    const courseTopics = [
        {
            name: "User Experience Design",
            taughtBy: "TATA Motor in India",
            duration: 3,
            imgUrl: ImgUrl3,
        },
        {
            name: "Human Resource Management",
            taughtBy: "KPMG in India",
            duration: 6,
            imgUrl: ImgUrl1,
        },
        {
            name: "Creatorpreneur Bootcamp",
            taughtBy: "WIPRO in India",
            duration: 4,
            imgUrl: ImgUrl5,
        },
        {
            name: "Applied Auditing & Analytics",
            taughtBy: "L&T in India",
            duration: 5,
            imgUrl: ImgUrl4,
        },
        {
            name: "Strategic Marketing & AI",
            taughtBy: "INFOSIS in India",
            duration: 4,
            imgUrl: ImgUrl2,
        }
    ];

    const [selectedTopic, setSelectedTopic] = useState(courseTopics[0]);

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
    };

    return (
        <div id="courses-Section" className="coursesSection">
            <div className="courseSection-heading">
                <span>Learn from</span><br />
                <span>Masters, Hands-On</span>
            </div>

            <div className="coursesSection-courses">
                <div className="courseSection-topics">
                    <div className="topic-head">Applied Finance</div>
                    {courseTopics.map((topic, index) => (
                        <div
                            key={index}
                            className={`courseSection-topics-name ${selectedTopic === topic ? 'selected' : ''}`}
                            onClick={() => handleTopicClick(topic)}
                        >
                            {topic.name}
                        </div>
                    ))}
                </div>

                <div className={`coursesSection-details ${selectedTopic ? 'show' : ''}`}>
                    {selectedTopic && <Course selectedTopic={selectedTopic} />}
                </div>
            </div>
        </div>
    );
};

export default CoursesSection;

