import React, {useState, useContext} from "react"
import {Context} from "/src/Context"
import CartItem from "/src/components/CartItem"


export default function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [btnText, setBtnText] = useState("Place Order")

    const cartElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = cartItems.length * 5.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})


    function orderStatus() {
        setBtnText("Ordering...")
        setTimeout(() => {
            setBtnText("Place Order")
            emptyCart()
        }, 3000)
    }


    return (
        <main className="cart-page">
            <h1>Check out</h1>

            {cartElements}

            <p className="total-cost">Total: {totalCostDisplay} </p>

            {
                cartItems.length > 0 
                ?
                
                <div className="order-button">
                    <button onClick={orderStatus}>{btnText}</button>
                </div>

                :

                <p>You have no items in your cart.</p>
            }
            
        </main>
    )
}