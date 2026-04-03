import ProductCard from './ProductsCard'

export default function CardsWrapper({ classContent }) {
    const classN = `product-wrapper ${classContent}`
    return (
        <>
            <div className={classN}>
                <ProductCard content={"HEADPHONES"} name={'ProS1'} />
                <ProductCard content={"SPEAKERS"} name={'ProS2'} />
                <ProductCard content={"EARPHONES"} name={'ProS3'} />
            </div>
        </>
    )
}