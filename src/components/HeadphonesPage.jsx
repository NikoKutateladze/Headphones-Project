import CardsWrapper from "./CardsWrapper"
import HeadphoneCardV1 from "./HeadphoneCard"
import HeadphoneCardV2 from "./HeadphoneCardV2"

export default function HeadphonesPage() {
    return (
        <>
            <div className="headphones-wrapper">
                <div className="headphone n1">
                    <HeadphoneCardV1 title={'XX99 Mark II Headphones'} description={"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."} img={'/src/Pro6.png'}/>
                </div>
                <div className="headphone n2">
                    <HeadphoneCardV2 title={"XX99 Mark I Headphones"} description={"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."} img={'/src/Pro7.png'}/>
                </div>
                <div className="headphone n3">
                    <HeadphoneCardV1 title={'XX59 Headphones'} description={"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."} img={'/src/Pro8.png'}/>
                </div>
            </div>
            <CardsWrapper />
        </>
    )
}