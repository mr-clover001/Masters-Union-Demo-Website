import { React, useState } from "react";
import NewsCard from "./News-Card/NewsCard"
import './newsSection.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ImgUrl1 from "./News-Card/News18.png";
import ImgUrl2 from "./News-Card/eduGraph.png";
import ImgUrl3 from "./News-Card/Economic times news.png";
import ImgUrl4 from "./News-Card/Aajtak.png";
import ArrowOutwardOutlinedIcon from '@material-ui/icons/CallMadeOutlined';

const NewsSection = () => {

    const [startIndex, setStartIndex] = useState(0);

    const handleRightArrowClick = () => {
        setStartIndex((startIndex + 1) % NewsData.length);
    };

    const handleLeftArrowClick = () => {
        setStartIndex((startIndex - 1 + NewsData.length) % NewsData.length);
    };

    const NewsData = [
        {
            name: "News18",
            imgUrl: ImgUrl1,
        },
        {
            name: "eduGraph",
            imgUrl: ImgUrl2,
        },
        {
            name: "Economics times",
            imgUrl: ImgUrl3,
        },
        {
            name: "AajTak",
            imgUrl: ImgUrl4,
        },
    ];


    // Ensure there are always three visible elements
    const visibleNews = [];
    for (let i = 0; i < 3; i++) {
        visibleNews.push(NewsData[(startIndex + i) % NewsData.length]);
    }

    return (
        <div className="News-component">
            <div className='News-component-head'>
                <div className='News-component-text'>
                    <h1>In the News</h1>
                    <p>Have a look at what the dailies have to say about masterCamp.</p>
                </div>

                <div className="arrow-container">
                    <div className='left' onClick={handleLeftArrowClick} ><ArrowBackIcon /></div>
                    <div className='right' onClick={handleRightArrowClick}><ArrowForwardIcon /></div>

                </div>

            </div>


            <div className="News-card-container">
                {visibleNews.map((news, index) => (
                    <NewsCard key={index} {...news} />
                ))}
            </div>

            <div className="News-card-community">
                <div className="News-card-community-heading"><h1>GET A PEEK INTO THE<br /> MASTERCAMP LIFE </h1></div>
                <div className="community-btn"><span>JOIN OUR COMMUNITY <ArrowOutwardOutlinedIcon /></span></div>
            </div>

        </div>
    );
}

export default NewsSection;