import React, {useState, useContext} from "react"
import {Context} from "/src/Context"
import PropTypes from "prop-types"
import useHover from "/src/hooks/useHover"


export default function Image({className, img}) {
    const [hovered, setHovered] = useState(false)  // const [hovered, ref] = useHover()

    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)


    function heartIcon() {
        if(img.isFavorite) {
            return <i className="fa-solid fa-heart favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="fa-regular fa-heart favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }


    function cartIcon() {
        const found = cartItems.find(item => item.id === img.id)

        if(found) {
            return <i className="fa-solid fa-cart-shopping cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(hovered) {
            return <i className="fa-solid fa-plus cart" onClick={() => addToCart(img)}></i>
        }
    }


    return (
        <div className={`${className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={img.url} className="image-grid"/>

            {heartIcon()}
            {cartIcon()}

        </div>
    )
}


Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}