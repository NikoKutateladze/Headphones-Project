import { useEffect, useState } from "react";
import Counter from "./Counter";
import ParagraphS from "./ParagraphS"
import HeaderL from "./HeaderL"
import { useNavigate } from "react-router-dom"
import { products } from "/src/App.jsx"

export const cartProducts = [

]

export default function ViewCard({ title, description, img, productId, price, cartState, setCartState }) {

    const navigate = useNavigate();

    const imgStyle = {
        backgroundImage: `url(${img})`,
    }

    const [count, setCount] = useState(0);

    function handleUpFunction() {
        setCount(prev => prev + 1);
    }

    function handleDownFunction() {
        setCount(prev => {
            if (prev !== 0) {
                prev -= 1
            }
            return prev
        })

    }

    useEffect(() => {
        console.log("Cart Updated")
    }, [cartState])

    const pid = Number(productId)
    return (
        <>

            <div className="view-wrapper">
                <div className="img-c">
                    <p className="go-back" onClick={() => navigate(-1)}>Go Back</p>
                    <div className="headphone-img view-img">
                        <div className="headphone-prdct" style={imgStyle}></div>
                        <div className="headphone-shadow"></div>
                    </div>
                </div>
                <div className="headphone-text">
                    <HeaderL content={title} />
                    <ParagraphS content={description} classContent={"dark-gray responsiveS"} />
                    <p className="price__product">$ 899</p>
                    <div className="product-interaction">
                        <Counter countVal={count} functionUp={handleUpFunction} functionDown={handleDownFunction} />
                        <div className="button" onClick={() => {
                            if (count !== 0) {
                                setCartState(prev => {
                                    const exists = prev.find(p => p.id === pid)
                                    if (exists) {
                                        return prev.map(p => 
                                            p.id === pid
                                                ? { ...p, quantity: p.quantity + count }
                                                : p
                                        )
                                    } else {
                                        const product = products.find(p => p.id === pid);
                                        return [...prev, { ...product, quantity: count }]
                                    }
                                })
                                console.log(cartState)
                                setCount(0)
                            }
                        }}>ADD TO CART</div>

                    </div>
                </div>
            </div>
        </>
    )
}