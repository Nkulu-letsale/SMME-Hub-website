"use client"

import { motion } from "framer-motion"
import { MapPin, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

const businesses = [
  {
    id: "1",
    name: "Ubuntu Crafts",
    category: "Handmade Crafts",
    location: "Cape Town, South Africa",
    image: "/images/featured-ubuntu.webp",
    products: 45,
    followers: 1200,
  },
  {
    id: "2",
    name: "Savanna Spices",
    category: "Food & Beverages",
    location: "Nairobi, Kenya",
    image: "/images/featured-savanna.jpg",
    products: 32,
    followers: 890,
  },
  {
    id: "3",
    name: "Kente Creations",
    category: "Traditional Textiles",
    location: "Accra, Ghana",
    image: "/images/featured-kente.jpg",
    products: 28,
    followers: 756,
  },
]

export default function BusinessShowcase() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">Featured Businesses</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Supporting local entrepreneurs across Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={business.image || "/placeholder.svg"}
                  alt={business.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{business.name}</h3>
                  <p className="text-sm opacity-90">{business.category}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{business.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {business.products} products
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {business.followers}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
