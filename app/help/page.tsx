"use client"

import { motion } from "framer-motion"
import {
  HelpCircle,
  Search,
  ShoppingCart,
  Store,
  CreditCard,
  Users,
  MessageCircle,
  BookOpen,
  Mail,
  Phone,
} from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState } from "react"

const faqData = [
  {
    category: "Getting Started",
    icon: BookOpen,
    questions: [
      {
        q: "How do I create an account on Digital SMME Hub?",
        a: "Click the 'Register Business' button in the top navigation, fill out the registration form with your business details, and submit. You'll receive a confirmation email to activate your account.",
      },
      {
        q: "Is it free to register my business?",
        a: "Yes! Business registration is completely free. We only charge a small commission on successful sales to help maintain and improve our platform.",
      },
      {
        q: "What types of businesses can register?",
        a: "We welcome all types of African SMMEs including crafts, food & beverages, textiles, beauty products, electronics, and services.",
      },
    ],
  },
  {
    category: "For Buyers",
    icon: ShoppingCart,
    questions: [
      {
        q: "How do I search for products?",
        a: "Use the search bar at the top of any page, or browse by categories. You can filter by location, price range, and business type to find exactly what you're looking for.",
      },
      {
        q: "How do I add items to my cart?",
        a: "Click the shopping cart icon on any product card. You can view your cart by clicking the cart icon in the top navigation.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept credit/debit cards, M-Pesa, Airtel Money, MTN Mobile Money, and bank transfers for secure and convenient payments.",
      },
      {
        q: "How does delivery work?",
        a: "Delivery is handled by individual businesses. Delivery fees and timeframes are shown during checkout and vary by location and business.",
      },
    ],
  },
  {
    category: "For Sellers",
    icon: Store,
    questions: [
      {
        q: "How do I add products to my store?",
        a: "After registering your business, log into your dashboard and click 'Add Product'. Upload photos, write descriptions, set prices, and publish your products.",
      },
      {
        q: "How do I receive payments?",
        a: "Payments are processed securely through our platform and transferred to your registered bank account or mobile money wallet within 2-3 business days.",
      },
      {
        q: "Can I edit my business information?",
        a: "Yes! Log into your business dashboard to update your profile, contact information, business description, and product listings at any time.",
      },
      {
        q: "How do I manage orders?",
        a: "Your business dashboard shows all incoming orders. You can update order status, communicate with customers, and track your sales performance.",
      },
    ],
  },
  {
    category: "Technical Support",
    icon: HelpCircle,
    questions: [
      {
        q: "The website is loading slowly. What should I do?",
        a: "Try refreshing the page or clearing your browser cache. If the problem persists, check your internet connection or try accessing the site from a different browser.",
      },
      {
        q: "I forgot my password. How do I reset it?",
        a: "Click 'Forgot Password' on the login page, enter your email address, and follow the instructions in the reset email we send you.",
      },
      {
        q: "My payment failed. What should I do?",
        a: "Check that your payment details are correct and you have sufficient funds. If the problem continues, try a different payment method or contact your bank.",
      },
      {
        q: "How do I report a problem with a business or product?",
        a: "Use the 'Report Issue' button on the business or product page, or contact our support team directly with details of the problem.",
      },
    ],
  },
]

export default function Help() {
  const [activeCategory, setActiveCategory] = useState("Getting Started")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFAQs = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.a.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Help Center</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Find answers to common questions and learn how to make the most of Digital SMME Hub
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for help topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
            />
          </div>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg p-8 text-white mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Start Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Browse Businesses</h3>
              <p className="text-sm opacity-90">Explore registered African businesses and their unique products</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Add to Cart</h3>
              <p className="text-sm opacity-90">Select products you love and add them to your shopping cart</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Secure Checkout</h3>
              <p className="text-sm opacity-90">Pay safely using mobile money or card payments</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Support Local</h3>
              <p className="text-sm opacity-90">Enjoy authentic African products while supporting local businesses</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Categories</h3>
            <div className="space-y-2">
              {faqData.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.category}
                    onClick={() => setActiveCategory(category.category)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                      activeCategory === category.category
                        ? "bg-orange-500 text-white"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{category.category}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* FAQ Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-3"
          >
            {(searchTerm ? filteredFAQs : faqData.filter((cat) => cat.category === activeCategory)).map((category) => (
              <div key={category.category} className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center space-x-3">
                  <category.icon className="h-6 w-6 text-orange-500" />
                  <span>{category.category}</span>
                </h3>

                <div className="space-y-4">
                  {category.questions.map((item, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-start space-x-2">
                        <HelpCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{item.q}</span>
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-7">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mt-12 text-center"
        >
          <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Still Need Help?</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@digitalsmme.co.za"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email Support</span>
            </a>

            <a
              href="tel:+27111234567"
              className="inline-flex items-center space-x-2 border border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call Us</span>
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  )
}
