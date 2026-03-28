export default function ProductCard({ name, content }) {
    const Class = `img-product ${name}`;
    return (
        <>
            <div className="wrapper-content">
              <div className="background"></div>
              <div className={Class} ></div>
              <div className="shadow"></div>
              <p className='wrapper-tt'>{content}</p>
              <p className='shop'>SHOP <span className='arrow-right'>›</span></p>
            </div>
        </>
    )
}