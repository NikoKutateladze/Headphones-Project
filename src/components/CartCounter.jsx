import { useState } from "react";


export default function CartCounter({ countVal, functionUp, functionDown }) {
    return (
        <>
            <div className="cart__counter">
                <p className="cart__arrow" onClick={functionUp}>+</p>
                <div className="count-value">{countVal}</div>
               <p className="cart__arrow" onClick={functionDown}>-</p>
            </div>
        </>
    )
}