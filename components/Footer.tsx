"use client"

import { motion } from "framer-motion"
import { Store, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Store className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Digital SMME Hub</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Empowering local African businesses through digital commerce and secure mobile money payments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/businesses" className="text-slate-300 hover:text-orange-500 transition-colors">
                  Browse Businesses
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-orange-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/register-business" className="text-slate-300 hover:text-orange-500 transition-colors">
                  Register Business
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-slate-300 hover:text-orange-500 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=crafts"
                  className="text-slate-300 hover:text-orange-500 transition-colors"
                >
                  Handmade Crafts
                </Link>
              </li>
              <li>
                <Link href="/products?category=food" className="text-slate-300 hover:text-orange-500 transition-colors">
                  Food & Beverages
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=textiles"
                  className="text-slate-300 hover:text-orange-500 transition-colors"
                >
                  Textiles & Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=beauty"
                  className="text-slate-300 hover:text-orange-500 transition-colors"
                >
                  Beauty & Wellness
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="text-slate-300 hover:text-orange-500 transition-colors">
                  Home & Garden
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a
                  href="mailto:support@digitalsmme.co.za"
                  className="text-slate-300 hover:text-orange-500 transition-colors"
                >
                  support@digitalsmme.co.za
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="tel:+27111234567" className="text-slate-300 hover:text-orange-500 transition-colors">
                  +27 11 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-slate-300">Cape Town, South Africa</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm">© 2025 Digital SMME Hub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
