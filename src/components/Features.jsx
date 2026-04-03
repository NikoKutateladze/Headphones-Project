import HeaderM from "./HeaderM"
import ParagraphS from "./ParagraphS"


export const features = [
    {
        id: 1, description1: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.", description2: "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",

        box: [{ id: 1, title: "Headphone Unit", quantity: 1 }, { id: 2, title: "Replacement Earcups", quantity: 2 }, { id: 3, title: "User Manual", quantity: 1 }, { id: 4, title: "3.5mm 5m Audio Cable", quantity: 1 }, { id: 5, title: "Travel Bag", quantity: 1 },],

        images: [{ id: 1, src: "/src/Pro5.png", class: "n1" }, { id: 2, src: "/src/Pro1.png", class: "n2" }, { id: 3, src: "/src/ProGrid4.png", class: "n3" }]
    },


    {
        id: 2, description1: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz", description2: "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
        box: [{ id: 1, title: "Headphone Unit", quantity: 1 }, { id: 2, title: "Replacement Earcups", quantity: 2 }, { id: 3, title: "User Manual", quantity: 1 }, { id: 4, title: "3.5mm 5m Audio Cable", quantity: 1 }],

        images: [{ id: 1, src: "/src/ProGrid1.png", class: "n1" }, { id: 2, src: "/src/ProGrid3.png", class: "n2" }, { id: 3, src: "/src/ProGrid2.png", class: "n3" }]
    },

    {
        id: 3, description1: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.", description2: "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        box: [{ id: 1, title: "Headphone Unit", quantity: 1 }, { id: 2, title: "Replacement Earcups", quantity: 2 }, { id: 3, title: "User Manual", quantity: 1 }, { id: 4, title: "3.5mm 5m Audio Cable", quantity: 1 }],

        images: [{ id: 1, src: "/src/ProGrid5.png", class: "n1" }, { id: 2, src: "/src/ProGrid7.png", class: "n2" }, { id: 3, src: "/src/ProGrid6.png", class: "n3" }]
    },


]

export default function Features({ times, cId }) {

    let source;
    return (
        <>
            <div className="features-container">
                <div className="features-wrap">
                    <HeaderM content={"FEATURES"} />
                    <div className="paragraph-wrapper">
                        {features.map(p => (
                            p.id === cId + 1 ? <ParagraphS classContent={"gray-feature"} key={p.id} content={p.description1} /> : null
                        ))}
                        {features.map(p => (
                            p.id === cId + 1 ? <ParagraphS classContent={"gray-feature"} key={p.id} content={p.description2} /> : null
                        ))}
                    </div>

                </div>
                <div className="box-wrap">
                    <HeaderM content={"IN THE BOX"} />
                    <div className="list">
                        {features[cId].box.map(p => (
                            <p className="quantity gr" key={p.id}><span className="orng-quantity">{p.quantity}x </span>{p.title}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="images-grid">

                <div className="two-contain">
                    {features[cId].images
                        .filter(p => p.class !== "n2")
                        .map(p => {
                            return (
                                <div key={p.id} className={`image ${p.class}`} style={{ backgroundImage: `url(${p.src})` }}>
                                </div>
                            )
                        })}
                </div>
                {features[cId].images
                    .filter(p => p.class === "n2")
                    .map(p => {
                        return (
                            <div key={p.id} className={`image ${p.class}`} style={{ backgroundImage: `url(${p.src})` }}>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}