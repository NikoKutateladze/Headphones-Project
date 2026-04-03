import { useState } from "react";
import Counter from "./Counter";
import ParagraphS from "./ParagraphS"
import HeaderL from "./HeaderL";

export default function HeadphoneCard({ title, description, img, linkSrc, linkId }) {
    const imgStyle = {
        backgroundImage: `url(${img})`,
    }

    const link = `/${linkSrc}/${linkId}`;

    return (
        <>
            <div className="headphone-img">
                <div className="headphone-prdct" style={imgStyle}></div>
                <div className="headphone-shadow"></div>
            </div>
            <div className="headphone-text">
                <HeaderL content={title}/>
                <ParagraphS content={description} classContent={"dark-gray"}/>
                <div className="product-interaction">
                    <a href={link} className="button responsiveXS">SEE PRODUCT</a>
                </div>
                
            </div>
        </>
    )
}