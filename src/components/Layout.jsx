import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

export default function Layout({ cart, toggle, setToggle, removeFunction, updateQuantity }) {
  return (
    <>
      <NavBar updateQuantity={updateQuantity} cart={cart} toggle={toggle} setToggle={setToggle} removeFunction={removeFunction} />
      <Outlet />
    </>
  )
}