import { useParams } from "react-router-dom"
import { products } from "/src/App.jsx"
import ViewCard from "./ViewCard"
import HeaderL from "./HeaderL"
import Features, { features } from "./Features"


export default function ProductPage({ cartState, setCartState }) {
    const { id } = useParams()
    
    const pid = Number(id)
    return (
        <>
            <div className="view-body">
                
                {
                    products.map(p => {
                        if (p.id === pid) {
                            return (
                                <>
                                    <div className="product-view">
                                        <ViewCard title={p.title} description={p.description} img={p.img} key={p.id} productId={p.id} cartState={cartState} setCartState={setCartState} />
                                    </div>

                                </>

                            )
                        }
                    })

                }
                {
                    features.map(p => {
                        if(p.id == id) {
                            return (
                                <Features times={6} cId={id - 1}/>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}