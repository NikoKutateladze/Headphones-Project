import CardsWrapper from "./CardsWrapper"
import HeadphoneCard from "./HeadphoneCard"
import HeadphoneCardV2 from "./HeadphoneCardV2"


import HeaderL from "./HeaderL"


import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductPage from "./Product"
import { products } from "/src/App.jsx"

export default function HeadphonesPage() {

    let filteredSpeakers = products.filter(p => p.category == "speakers")
    return (
        <>
            <div className="header">
                <div className="inner-header">

                    <div className="container">
                        <HeaderL content={"SPEAKERS"} classContent={"headphones-tt"} />
                    </div>
                </div>
            </div>
            <div className="headphones-wrapper">
                {

                    filteredSpeakers.map(p =>
                        p.version === "right"
                            ? (
                                <>
                                    <div className="headphone" key={p.id}>
                                        <HeadphoneCard title={p.title} description={p.description} img={p.img} linkId={p.id} linkSrc={"speakers"} />
                                    </div>
                                </>
                            ) : (
                                <div className="headphone" key={p.id}>
                                    <HeadphoneCardV2 title={p.title} description={p.description} img={p.img} linkId={p.id} linkSrc={"speakers"} />
                                </div>
                            )


                    )}
            </div>
            <CardsWrapper classContent={"p2"}/>
        </>
    )
}