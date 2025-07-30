"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/CartContext"
import Image from "next/image"

const featuredProducts = [
  {
    id: 1,
    name: "Handwoven Kente Cloth",
    price: 299.99,
    originalPrice: 399.99,
    image: "/images/featured-kente.jpg",
    business: "Kente Creations",
    rating: 4.8,
    reviews: 124,
    description: "Authentic handwoven Kente cloth from Ghana",
    category: "Textiles",
  },
  {
    id: 2,
    name: "African Shea Butter",
    price: 89.99,
    originalPrice: 119.99,
    image: "/images/featured-baobab.webp",
    business: "Baobab Beauty",
    rating: 4.9,
    reviews: 89,
    description: "Pure, unrefined shea butter from West Africa",
    category: "Beauty",
  },
  {
    id: 3,
    name: "Ethiopian Coffee Beans",
    price: 149.99,
    originalPrice: 199.99,
    image: "/images/featured-savanna.jpg",
    business: "Savanna Spices",
    rating: 4.7,
    reviews: 156,
    description: "Premium single-origin Ethiopian coffee beans",
    category: "Food",
  },
  {
    id: 4,
    name: "Maasai Beaded Jewelry",
    price: 179.99,
    originalPrice: 249.99,
    image: "/images/featured-jewelry.jpg",
    business: "Maasai Leather Co.",
    rating: 4.8,
    reviews: 92,
    description: "Traditional handcrafted Maasai beaded jewelry",
    category: "Jewelry",
  },
  {
    id: 5,
    name: "Rooibos Tea Blend",
    price: 69.99,
    originalPrice: 89.99,
    image: "/images/featured-rooibos.webp",
    business: "Rooibos Republic",
    rating: 4.6,
    reviews: 203,
    description: "Premium South African rooibos tea blend",
    category: "Beverages",
  },
  {
    id: 6,
    name: "Shweshwe Fabric",
    price: 119.99,
    originalPrice: 159.99,
    image: "/images/featured-shweshwe.webp",
    business: "Heritage Textiles",
    rating: 4.7,
    reviews: 78,
    description: "Traditional South African Shweshwe fabric",
    category: "Textiles",
  },
]

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState(new Set())
  const { addItem } = useCart()

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      business: product.business,
    })
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover authentic African products from our featured local businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(product.id)}
                      className={`h-8 w-8 p-0 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white ${
                        favorites.has(product.id) ? "text-red-500" : "text-gray-600"
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${favorites.has(product.id) ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-orange-500 uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{product.description}</p>
                  <p className="text-sm text-orange-500 font-medium mb-3">{product.business}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">R{product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">R{product.originalPrice}</span>
                      )}
                    </div>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
