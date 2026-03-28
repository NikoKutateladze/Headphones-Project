export default function HeadphoneCard({ title, description, img }) {

    const imgStyle = {
        backgroundImage: `url(${img})`,
    }

    return (
        <>
            <div className="headphone-img">
                <div className="headphone-prdct" style={imgStyle}></div>
                <div className="headphone-shadow"></div>
            </div>
            <div className="headphone-text">
                <h1 className="heaphone-title">{title}</h1>
                <p className="headphone-description">{description}</p>
                <div className="button">SEE PRODUCT</div>
            </div>
        </>
    )
}