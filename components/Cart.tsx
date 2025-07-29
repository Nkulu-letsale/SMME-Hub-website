"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, ShoppingBag, CreditCard } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import Image from "next/image"
import { useState } from "react"
import Checkout from "./Checkout"

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  const deliveryFee = 30
  const subtotal = getTotalPrice()
  const total = subtotal + deliveryFee

  if (showCheckout) {
    return (
      <Checkout
        isOpen={isOpen}
        onClose={() => {
          setShowCheckout(false)
          onClose()
        }}
        onBack={() => setShowCheckout(false)}
        items={items}
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        total={total}
      />
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-800 shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6 text-orange-500" />
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Shopping Cart</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-16 w-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-600 dark:text-slate-400">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center space-x-4 bg-slate-50 dark:bg-slate-700 p-4 rounded-lg"
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />

                      <div className="flex-1">
                        <h3 className="font-medium text-slate-800 dark:text-white">{item.name}</h3>
                        <p className="text-orange-500 font-semibold">R{item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium text-slate-800 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:bg-red-100 dark:hover:bg-red-900 rounded text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-slate-200 dark:border-slate-700 p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Subtotal:</span>
                    <span>R{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Delivery:</span>
                    <span>R{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-slate-800 dark:text-white border-t border-slate-200 dark:border-slate-700 pt-2">
                    <span>Total:</span>
                    <span>R{total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Proceed to Checkout</span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
