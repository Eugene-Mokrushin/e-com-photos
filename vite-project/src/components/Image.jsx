import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context/useContext"

export default function Image({ className, img }) {
      const [hovered, setHovered] = useState(false)
      const { toggleFavorite, cartItems, addToCart, removeFromCart } = useContext(Context);

      const isInCart = cartItems.some(item => item.id === img.id)


      function isAdded() {
            if(isInCart) {
                  return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img)}></i>
            } else if (hovered) {
                  return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
            }
      }

      function heartIcon() {
            if (img.isFavorite) {
                  return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
            } else if (hovered) {
                  return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
            }
      }

      return (
            <div
                  className={`${className} image-container`}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
            >
                  <img className="image-grid" src={img.url} alt="image" loading="lazy" />
                  {heartIcon()}
                  {isAdded()}
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