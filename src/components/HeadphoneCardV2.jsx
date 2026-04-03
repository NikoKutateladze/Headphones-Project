import ParagraphS from "./ParagraphS"
import Counter from "./Counter"
import HeaderL from "./HeaderL";
import { Link } from "react-router-dom";


export default function HeadphoneCardV2({ title, description, img, linkSrc, linkId }) {
    const imgStyle = {
        backgroundImage: `url(${img})`,
    }

    const link = `/${linkSrc}/${linkId}`;

    return (
        <>
            <div className="headphone-textV2">
                <HeaderL content={title}/>
                <ParagraphS content={description} classContent={"dark-gray"}/>
                <div className="product-interaction">
                    <Link to={link} className="button">SEE PRODUCT</Link>
                </div>
                
            </div>
            <div className="headphone-img">
                <div className="headphone-prdct" style={imgStyle}></div>
                <div className="headphone-shadow"></div>
            </div>
        </>
    )
}