import { useState } from "react";


export default function Counter({ countVal, functionUp, functionDown }) {
    return (
        <>
            <div className="counter-wrapper">
                <p className="up arrow" onClick={functionUp}>+</p>
                <div className="count-value">{countVal}</div>
               <p className="down arrow" onClick={functionDown}>-</p>
            </div>
        </>
    )
}