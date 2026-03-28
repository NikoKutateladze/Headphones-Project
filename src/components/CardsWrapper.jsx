import ProductCard from './ProductsCard'

export default function CardsWrapper() {
    return (
        <>
            <div className="product-wrapper">
                <ProductCard content={"HEADPHONES"} name={'ProS1'} />
                <ProductCard content={"SPEAKERS"} name={'ProS2'} />
                <ProductCard content={"EARPHONES"} name={'ProS3'} />
            </div>
        </>
    )
}