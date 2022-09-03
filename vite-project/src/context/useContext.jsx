import React, { useState, useEffect } from "react";

const Context = React.createContext()

function ContextProvider({ children }) {
      const [allPhotos, setAllPhotos] = useState([])
      const [cartItems, setCartItems] = useState([])

      const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

      function addToCart(newItem){
            setCartItems(prevState => ([...prevState, newItem]))
      }

      function removeFromCart(removeItem){
            const newCartItems = cartItems.filter(item => {
                  if(item.id !== removeItem.id) {
                        return item
                  }
            })
            setCartItems(newCartItems)
      }

      function emptyCart() {
            setCartItems([])
      }

      function toggleFavorite(id) {
            const updatedArr = allPhotos.map(photo => {
                  if (photo.id === id) {
                        return { ...photo, isFavorite: !photo.isFavorite }
                  }
                  return photo
            })
            setAllPhotos(updatedArr)
      }

      useEffect(() => {
            fetch(url)
                  .then((response) => response.json())
                  .then((data) => setAllPhotos(data))
      }, [])
      return (
            <Context.Provider value={{ allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart, emptyCart }}>
                  {children}
            </Context.Provider>
      )
}

export { ContextProvider, Context }