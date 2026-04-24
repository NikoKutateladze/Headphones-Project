import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import FooterNav from './components/FooterNav'
import HomePage from './components/HomePage'
import HeadphonesPage from './components/HeadphonesPage'
import HomeHeader from './components/HeaderContent'
import NavBar from './components/NavBar'
import HeaderL from './components/HeaderL'
import SpeakersPage from './components/SpeakersPage'
import EarphonesPage from './components/EarphonesPage'
import HeaderM from './components/HeaderL'
import ParagraphS from './components/ParagraphS'
import ProductPage from './components/Product'
import Layout from './components/Layout'

export const products = [
  { model: "XX99 MK II", title: "XX99 Mark II Headphones", description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.", version: 'right', category: "headphones", img: "/src/Pro6.png", quantity: 0, price: 2999, id: 1 },
  { model: "XX99 MK I", title: "XX99 Mark I Headphones", description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.", category: "headphones", img: "/src/Pro7.png", quantity: 0, price: 2199, id: 2 },
  { model: "XX59", title: "XX59 Headphones", description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.", category: "headphones", price: 899, img: "/src/Pro8.png", version: 'right', quantity: 0, id: 3 },
  { model: "ZX9", title: "ZX9 SPEAKER", description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.", category: "speakers", img: "/src/ProS2.png", version: 'right', quantity: 0, price: 1199, id: 4 },
  { model: "ZX7", title: "ZX7 SPEAKER", description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.", img: "/src/Pro9.png", version: 'left', category: "speakers", quantity: 0, price: 999, id: 5 },
  { model: "YX1", title: "YX1 WIRELESS EARPHONES", description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.", img: "/src/ProS3.png", version: 'right', category: "earphones", quantity: 0, price: 599, id: 6 },
]



function App() {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  });

  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function removeFunction() {
    setCart([]);
  }

  function updateQuantity(id, type) {
    setCart(prev =>
      prev.map(i => {
        if (i.id !== id) return i
        const newQuantity =
          type === "inc"
            ? i.quantity + 1
            : i.quantity - 1
        return {
          ...i,
          quantity: newQuantity
        }
        
      }).filter(p => p.quantity > 0)
    )
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, [location])

  const [icon1Hover, setIcon1Hover] = useState(false)
  const [icon2Hover, setIcon2Hover] = useState(false)
  const [icon3Hover, setIcon3Hover] = useState(false)

  const iconBaseColor = "#fff";
  const iconHoverColor = "#D87D4A";

  useEffect(() => {
    { console.log("© NikoKutateladze 2026") }
  }, [])

  useEffect(() => {

    console.log(cart)
  }, [cart])

  return (
    <>
      <Routes>
        <Route element={
          <Layout cart={cart} setToggle={setToggle} toggle={toggle} removeFunction={removeFunction} updateQuantity={updateQuantity} />
        }>
          <Route path='/' element={<HomePage />} />
          <Route path='/headphones' element={<HeadphonesPage />} />
          <Route path='/speakers' element={<SpeakersPage />} />
          <Route path='/earphones' element={<EarphonesPage />} />
          <Route path='/:id/:id' element={<ProductPage setCartState={setCart} cartState={cart} />} />
        </Route>



      </Routes>
      <div className="body2">
        <div className="container-blog">
          <div className="text-wrapper">
            <div className="txt-container">
              <HeaderM />
              <h1 className='wrapper-header'>
                BRINGING YOU THE <span className='orange'>BEST</span> AUDIO GEAR
              </h1>
              <ParagraphS
                classContent={"dark-gray"}
                content={"Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."}
              />
            </div>
          </div>
          <div className="blog-img"></div>
        </div>
      </div>


      <footer>
        <div className="footer-navbar">
          <div className="footer-section">
            <FooterNav content={"HOME"} />
            <FooterNav content={"HEADPHONES"} />
            <FooterNav content={"SPEAKERS"} />
            <FooterNav content={"EARPHONES"} />
          </div>
        </div>

        <div className="footer-container">
          <div className="left-footer">
            <p className='footer-txt'>
              Audiophile is an all in one stop to fulfill your audio needs.
            </p>
            <p className='footer-copyright'>
              Copyright 2021. All Rights Reserved
            </p>
          </div>

          <div className="right-footer">
            <div className="icons">
              <svg
                onMouseEnter={() => setIcon1Hover(true)}
                onMouseLeave={() => setIcon1Hover(false)}
              >
                <path fill={icon1Hover ? iconHoverColor : iconBaseColor} />
              </svg>

              <svg
                onMouseEnter={() => setIcon2Hover(true)}
                onMouseLeave={() => setIcon2Hover(false)}
              >
                <path fill={icon2Hover ? iconHoverColor : iconBaseColor} />
              </svg>

              <svg
                onMouseEnter={() => setIcon3Hover(true)}
                onMouseLeave={() => setIcon3Hover(false)}
              >
                <path fill={icon3Hover ? iconHoverColor : iconBaseColor} />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default App