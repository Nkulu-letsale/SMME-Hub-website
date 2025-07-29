"use client"

import { createContext, useContext, useState } from "react"

const CartContext = createContext(undefined)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (newItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === newItem.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + (newItem.quantity || 1) } : item,
        )
      }

      return [...currentItems, { ...newItem, quantity: newItem.quantity || 1 }]
    })
  }

  const removeItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems((currentItems) => currentItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
