import React, { useContext, useState } from "react";
import PropTypes from "prop-types"
import { Context } from '../context/useContext'

export default function CartItem({ item }) {
      const { removeFromCart } = useContext(Context)
      const [hovered, setHovered] = useState(false)

      function trashHover() {
            if(hovered) {
                  return <i className="ri-delete-bin-fill" onClick={() => removeFromCart(item)} onMouseLeave={() => setHovered(false)}></i>
            } else {
                  return <i className="ri-delete-bin-line" onMouseEnter={() => setHovered(true)}></i>
            }
      }

      return (
            <div className="cart-item">
                  {trashHover()}
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