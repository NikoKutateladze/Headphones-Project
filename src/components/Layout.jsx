import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

export default function Layout({ cart, toggle, setToggle, removeFunction }) {
  return (
    <>
      <NavBar cart={cart} toggle={toggle} setToggle={setToggle} removeFunction={removeFunction} />
      <Outlet />
    </>
  )
}