import React from "react";
import "../newsSection.css"
const NewsCard = ({ name, imgUrl }) => {
    return (
        <div className="News-card">
            <div className="News-card-Image">
                <img src={imgUrl} alt={name} />
            </div>
        </div>
    );
}

export default NewsCard;