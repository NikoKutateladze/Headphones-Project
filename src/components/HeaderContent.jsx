import HeaderL from "./HeaderL"
import ParagraphS from "./ParagraphS"

export default function HomeHeader() {
    return (
        <>
            <div className="header-wrapper">
              <p className='wrapper-prdct'>NEW PRODUCT</p>
              <HeaderL content={"XX99 MARK II HEADPHONES"}/>
              <ParagraphS content={"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."} classContent={"gray"}/>

              <div className="wrapper-button">SEE PRODUCT</div>
            </div>
            <div className="container-img"></div>
        </>
    )
}