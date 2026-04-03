import ProductCard from "./ProductsCard"
import WrapperContent from "./WrapperContent";
import CardsWrapper from "./CardsWrapper";
import HomeHeader from "./HeaderContent";

import { useState } from "react";

export default function HomePage() {

    const [hover, setHover] = useState(false);

    const baseStyle = {
        position: "absolute",
        bottom: "-30px",
        left: "72px",
        width: "500px",
        height: "500px",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        transition: ".35s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    };

    const hoverStyle = {
        transform: "rotate(-5deg) scale(1.05) translateY(-12px)",
    };

    const noHover = {
        transform: "rotate(0) scale(1) translateY(0)",
    };

    return (
        <>
            <div className="header">
                <div className="inner-header">

                    <div className="container">
                        <HomeHeader />
                    </div>
                </div>
            </div>

            <div className="body2">
                <div className="products-container">
                    <CardsWrapper />
                </div>
                <div className="products-container">
                    <div className="product-wrapper1">
                        <div className="circle c1"></div>
                        <div className="circle c2"></div>
                        <div className="circle c3"></div>
                        <div className="wrapper1-img" style={{
                            ...baseStyle,
                            ...(hover ? hoverStyle : noHover)
                        }}></div>
                        <div className="wrapper1-container">
                            <div className="container-tt">ZX9
                                SPEAKER</div>
                            <div className="container-description">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</div>
                            <div className="container-btn" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>SEE PRODUCT</div>
                        </div>
                    </div>
                    <div className="product-wrapper2">
                        <WrapperContent txtContent={'ZX7 SPEAKER'} />
                    </div>
                    <div className="product-wrapper3">
                        <div className="wrapper3-img"></div>
                        <div className="wrapper3-container">
                            <WrapperContent txtContent={'YX1 EARPHONES'} />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}