"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400 rounded-full opacity-20"
        />
      </div>

      {/* Abstract Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 right-1/4 w-96 h-96"
        >
          <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 transform rotate-45 rounded-3xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80"
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 transform -rotate-12 rounded-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 cursor-pointer group"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent group-hover:from-sky-400 group-hover:via-sky-500 group-hover:to-sky-600 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]">
              Empowering
            </span>{" "}
            <span className="text-slate-800 dark:text-white group-hover:text-sky-400 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]">
              Local African
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent group-hover:from-sky-400 group-hover:via-sky-500 group-hover:to-sky-600 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]">
              Businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed cursor-pointer hover:text-sky-400 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
          >
            Connect with local SMME businesses across Africa, discover unique products, and support your community with
            secure mobile money payments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/businesses"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Explore Businesses</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/register-business"
              className="group border-2 border-slate-300 dark:border-slate-600 hover:border-orange-500 text-slate-700 dark:text-slate-300 hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 hover:shadow-lg transform hover:-translate-y-1"
            >
              <Sparkles className="h-5 w-5" />
              <span>Start Selling</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-6xl font-bold text-slate-800 dark:text-white opacity-20">SMME HUB</div>
          <div className="h-1 bg-orange-500 w-32 mx-auto mt-2" />
        </motion.div>
      </div>
    </section>
  )
}
