import CardsWrapper from "./CardsWrapper"
import HeadphoneCardV1 from "./HeadphoneCard"
import HeadphoneCardV2 from "./HeadphoneCardV2"
import HeaderL from "./HeaderL"


import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductPage from "./Product"
import { products } from "/src/App.jsx"

export default function HeadphonesPage() {

    let filteredEarphones = products.filter(p => p.category == "earphones")
    return (
        <>
            <div className="header">
                <div className="inner-header">

                    <div className="container">
                        <HeaderL content={"EARPHONES"} classContent={"headphones-tt"} />
                    </div>
                </div>
            </div>
            <div className="headphones-wrapper">
                {   

                    filteredEarphones.map(p =>
                        p.version === "right"
                            ? (
                                <>
                                    <div className="headphone" key={p.id}>
                                        <HeadphoneCardV1 title={p.title} description={p.description} img={p.img} linkId={p.id} linkSrc={"earphones"} />
                                    </div>
                                </>
                            ) : (
                                <div className="headphone" key={p.id}>
                                    <HeadphoneCardV2 title={p.title} description={p.description} img={p.img} linkId={p.id} linkSrc={"earphones"} />
                                </div>
                            )


                    )}
            </div>
            <CardsWrapper classContent={"p2"}/>
        </>
    )
}