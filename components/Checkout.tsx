"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowLeft, CreditCard, Smartphone, Building, MapPin } from "lucide-react"
import { useState } from "react"
import type { CartItem } from "@/contexts/CartContext"

interface CheckoutProps {
  isOpen: boolean
  onClose: () => void
  onBack: () => void
  items: CartItem[]
  subtotal: number
  deliveryFee: number
  total: number
}

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: CreditCard },
  { id: "mpesa", name: "M-Pesa", icon: Smartphone },
  { id: "airtel", name: "Airtel Money", icon: Smartphone },
  { id: "mtn", name: "MTN Mobile Money", icon: Smartphone },
  { id: "bank", name: "Bank Transfer", icon: Building },
]

export default function Checkout({ isOpen, onClose, onBack, items, subtotal, deliveryFee, total }: CheckoutProps) {
  const [selectedPayment, setSelectedPayment] = useState("card")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment processing here
    alert("Order placed successfully!")
    onClose()
  }

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white dark:bg-slate-800 shadow-xl z-50 flex flex-col overflow-y-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </button>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Checkout</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 p-6 space-y-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
              required
            />
          </div>
        </div>

        {/* Shipping Address */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Shipping Address</span>
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Street address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                required
              />
              <select
                value={formData.province}
                onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                required
              >
                <option value="">Select Province</option>
                <option value="gauteng">Gauteng</option>
                <option value="western-cape">Western Cape</option>
                <option value="kwazulu-natal">KwaZulu-Natal</option>
                <option value="eastern-cape">Eastern Cape</option>
                <option value="limpopo">Limpopo</option>
                <option value="mpumalanga">Mpumalanga</option>
                <option value="north-west">North West</option>
                <option value="northern-cape">Northern Cape</option>
                <option value="free-state">Free State</option>
              </select>
              <input
                type="text"
                placeholder="Postal code"
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Payment Method</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <label
                  key={method.id}
                  className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedPayment === method.id
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : "border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={selectedPayment === method.id}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="text-orange-500"
                  />
                  <Icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  <span className="text-slate-800 dark:text-white">{method.name}</span>
                </label>
              )
            })}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Subtotal ({items.length} items):</span>
              <span>R{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Delivery fee:</span>
              <span>R{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-slate-800 dark:text-white border-t border-slate-200 dark:border-slate-600 pt-2">
              <span>Total:</span>
              <span>R{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Complete Order
        </button>
      </form>
    </motion.div>
  )
}
