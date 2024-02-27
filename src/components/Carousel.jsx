import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
    const [imgCount, setImgCount] = useState(0);

    const rightButton = () => {
        if (imgCount < 2) {
            setImgCount(imgCount + 1);
        } else {
            setImgCount(0);
        }
    };

    const leftButton = () => {
        if (imgCount > 0) {
            setImgCount(imgCount - 1);
        } else {
            setImgCount(2);
        }
    };
    
    return (
        <>
            <div className="kkk">
                <div className="rightButton" onClick={rightButton} style={{ right: 0 }}><ArrowBackIosIcon /></div>
            </div>
            <div className="body">
                <img src={images[imgCount].img} alt="" className="img" />
                <h1 className="title">{images[imgCount].title}</h1>
                <h2 className="subtitle">{images[imgCount].subtitle}</h2>
                <div className="leftButton" onClick={leftButton}><ArrowForwardIosIcon /></div>
            </div>
        </>
    );
};

export default Carousel;
