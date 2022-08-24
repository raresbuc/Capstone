import React, {useState, useContext} from "react"
import {Context} from "/src/Context"
import PropTypes from "prop-types"


export default function CartItem({item}) {
    const {removeFromCart} = useContext(Context)

    return (
        <div className="cart-item">
            <i className="fa-solid fa-trash" onClick={() => removeFromCart(item.id)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}