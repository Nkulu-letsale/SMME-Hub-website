"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Star } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import Image from "next/image"

const featuredProducts = [
  {
    id: "1",
    name: "Handcrafted African Jewelry",
    price: 299.99,
    image: "/images/featured-jewelry.jpg",
    business: "Ubuntu Crafts",
    location: "Cape Town, South Africa",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Organic Rooibos Tea",
    price: 89.99,
    image: "/images/featured-rooibos.webp",
    business: "Mountain Tea Co.",
    location: "Cederberg, South Africa",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "Traditional Shweshwe Fabric",
    price: 159.99,
    image: "/images/featured-shweshwe.webp",
    business: "Heritage Textiles",
    location: "Johannesburg, South Africa",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "Baobab Seed Oil",
    price: 199.99,
    image: "/images/featured-baobab.webp",
    business: "Natural Essence",
    location: "Limpopo, South Africa",
    rating: 4.9,
    reviews: 203,
  },
]

export default function FeaturedProducts() {
  const { addItem } = useCart()

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">Featured Products</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover unique products from local African businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{product.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{product.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">by {product.business}</p>
                <p className="text-slate-500 dark:text-slate-500 text-sm mb-4">{product.location}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">R{product.price.toFixed(2)}</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{product.reviews} reviews</p>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg transition-colors duration-300 group"
                  >
                    <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
