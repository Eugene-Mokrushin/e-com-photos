import React, { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/useContext'

import CartItem from "../components/CartItem"

export default function Cart() {
    const { cartItems, emptyCart } = useContext(Context)
    const [isOrdering, setIsOrdering] = useState('Place Order')
    const navigate = useNavigate()

    const cartItemsElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function calcTotal() {
        return (cartItems.length * 5.99).toLocaleString("en-US", { style: "currency", currency: "USD" })
    }


    function order() {
        setIsOrdering("Ordering...")
        setTimeout(() => {
            emptyCart()
            console.log("Order placed")
            setIsOrdering("Place Order")
            navigate(-1)
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsElements}
            <p className="total-cost">Total: {calcTotal()}</p>
            <div className="order-button">
                {
                    cartItems.length !== 0 ?
                        <button onClick={order}> {isOrdering} </button> :
                        <p>You have no items in your cart.</p>
                }
            </div>
        </main>
    )
}
