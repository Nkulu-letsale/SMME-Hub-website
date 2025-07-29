"use client"

import { motion } from "framer-motion"
import { Users, Target, Heart, Award, Calendar, MapPin, Mail, Phone } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function About() {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">About Digital SMME Hub</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Empowering local African businesses through digital commerce and secure mobile money payments since 2025
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-12"
        >
          <div className="flex items-center mb-6">
            <Calendar className="h-8 w-8 text-orange-500 mr-3" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Our Story</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Founded in <strong>2025</strong>, Digital SMME Hub was born from a vision to bridge the digital divide
                for Small, Medium, and Micro Enterprises (SMMEs) across Africa. We recognized that many talented
                entrepreneurs and artisans lacked access to digital platforms to showcase their products and reach
                broader markets.
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Our platform connects local African businesses with customers worldwide, providing secure payment
                solutions through mobile money integration and creating opportunities for economic growth and cultural
                exchange.
              </p>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <p className="text-orange-800 dark:text-orange-200 font-semibold">
                  "Supporting local businesses means supporting communities, preserving culture, and building a stronger
                  African economy."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Established 2025</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Registered Businesses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2000+</div>
                    <div className="text-sm opacity-90">Products Listed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">15</div>
                    <div className="text-sm opacity-90">African Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">10K+</div>
                    <div className="text-sm opacity-90">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 text-center"
          >
            <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To democratize e-commerce for African SMMEs by providing accessible digital tools, secure payment
              solutions, and a platform that celebrates African craftsmanship and culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 text-center"
          >
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To become Africa's leading digital marketplace, where every SMME has the opportunity to thrive, grow, and
              contribute to sustainable economic development across the continent.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 text-center"
          >
            <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Our Values</h3>
            <ul className="text-slate-600 dark:text-slate-300 leading-relaxed text-left">
              <li className="mb-2">
                • <strong>Authenticity:</strong> Celebrating genuine African products
              </li>
              <li className="mb-2">
                • <strong>Empowerment:</strong> Supporting business growth
              </li>
              <li className="mb-2">
                • <strong>Innovation:</strong> Leveraging technology for good
              </li>
              <li>
                • <strong>Community:</strong> Building connections across Africa
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-12"
        >
          <div className="flex items-center mb-8">
            <Users className="h-8 w-8 text-orange-500 mr-3" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Our Impact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Business Support</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Helping entrepreneurs digitize their businesses and reach new markets
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-blue-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Local Focus</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Promoting local products and preserving traditional craftsmanship
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Quality Assurance</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Ensuring authentic, high-quality products from verified businesses
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-purple-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Community Building</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Creating connections between businesses and customers across Africa
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to join our community of African entrepreneurs? We'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6" />
              <span>support@digitalsmme.co.za</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6" />
              <span>+27 11 123 4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6" />
              <span>Cape Town, South Africa</span>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  )
}
