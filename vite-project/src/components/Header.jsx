import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/useContext"

export default function Header() {
      const {cartItems} = useContext(Context);
      const isFilled = cartItems.length > 0 ? "fill" : "line"
      return (
            <header>
                  <Link to="/"><h2>Pic Some</h2></Link>
                  <Link to="/cart"><i className={`ri-shopping-cart-${isFilled} ri-fw ri-2x`}></i></Link>
            </header>
      )
}