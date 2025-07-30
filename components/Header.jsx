"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Sun, Moon, Menu, X, Store } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { useTheme } from "@/contexts/ThemeContext"
import Cart from "./Cart"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items } = useCart()
  const { theme, toggleTheme } = useTheme()

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-slate-800 dark:bg-slate-900 text-white sticky top-0 z-50 shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Store className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Digital SMME Hub</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="hover:text-orange-400 transition-colors">
                About Us
              </Link>
              <Link href="/businesses" className="hover:text-orange-400 transition-colors">
                Businesses
              </Link>
              <Link href="/products" className="hover:text-orange-400 transition-colors">
                Products
              </Link>
              <Link href="/help" className="hover:text-orange-400 transition-colors">
                Help Center
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Register Business Button */}
              <Link
                href="/register-business"
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-medium transition-colors hidden md:block"
              >
                Register Business
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-slate-700"
            >
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  About Us
                </Link>
                <Link href="/businesses" className="hover:text-orange-400 transition-colors">
                  Businesses
                </Link>
                <Link href="/products" className="hover:text-orange-400 transition-colors">
                  Products
                </Link>
                <Link href="/help" className="hover:text-orange-400 transition-colors">
                  Help Center
                </Link>
                <Link
                  href="/register-business"
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-medium transition-colors text-center"
                >
                  Register Business
                </Link>
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
