import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "/src/Context"

export default function Header() {
    const {cartItems} = useContext(Context)

    const cartIconClassName = cartItems.length > 0 ? "fa-solid fa-cart-shopping color" : "fa-solid fa-cart-shopping"

    
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><i className={`${cartIconClassName} ri-fw ri-2x`}></i></Link>
        </header>
    )
}
