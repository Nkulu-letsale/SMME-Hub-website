"use client"

import { motion } from "framer-motion"
import { Search, Filter, MapPin, Star, Users, TrendingUp, Mail, Phone, Globe, Calendar } from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

const businesses = [
  {
    id: "1",
    name: "Ubuntu Crafts",
    category: "Handmade Crafts",
    location: "Cape Town, South Africa",
    image: "/images/ubuntu-crafts.webp",
    rating: 4.8,
    reviews: 124,
    followers: 1200,
    description:
      "Authentic African handcrafted jewelry and accessories made by local artisans using traditional techniques passed down through generations.",
    products: 45,
    established: "2019",
    email: "info@ubuntucrafts.co.za",
    phone: "+27 21 123 4567",
    website: "www.ubuntucrafts.co.za",
    specialties: ["Beaded Jewelry", "Traditional Crafts", "Custom Designs"],
  },
  {
    id: "2",
    name: "Savanna Spices",
    category: "Food & Beverages",
    location: "Nairobi, Kenya",
    image: "/images/savanna-spices.jpg",
    rating: 4.9,
    reviews: 189,
    followers: 890,
    description:
      "Premium African spices, coffee beans, and traditional teas sourced directly from local farmers across East Africa.",
    products: 32,
    established: "2017",
    email: "orders@savannaspices.ke",
    phone: "+254 20 123 4567",
    website: "www.savannaspices.ke",
    specialties: ["Ethiopian Coffee", "Organic Spices", "Herbal Teas"],
  },
  {
    id: "3",
    name: "Kente Creations",
    category: "Traditional Textiles",
    location: "Accra, Ghana",
    image: "/images/kente-creations.jpg",
    rating: 4.7,
    reviews: 156,
    followers: 756,
    description:
      "Beautiful traditional Kente cloth and modern African fashion designs, bridging heritage with contemporary style.",
    products: 28,
    established: "2020",
    email: "hello@kentecreations.gh",
    phone: "+233 30 123 4567",
    website: "www.kentecreations.gh",
    specialties: ["Kente Cloth", "Ankara Prints", "Custom Fashion"],
  },
  {
    id: "4",
    name: "Baobab Beauty",
    category: "Beauty & Wellness",
    location: "Lagos, Nigeria",
    image: "/images/baobab-beauty.webp",
    rating: 4.8,
    reviews: 203,
    followers: 1100,
    description:
      "Natural skincare products made from indigenous African ingredients like shea butter, baobab oil, and black soap.",
    products: 38,
    established: "2018",
    email: "care@baobabbeauty.ng",
    phone: "+234 1 123 4567",
    website: "www.baobabbeauty.ng",
    specialties: ["Shea Butter Products", "Black Soap", "Natural Oils"],
  },
  {
    id: "5",
    name: "Maasai Leather Works",
    category: "Leather Goods",
    location: "Arusha, Tanzania",
    image: "/images/maasai-leather.jpg",
    rating: 4.6,
    reviews: 67,
    followers: 543,
    description:
      "Handcrafted leather goods using traditional Maasai techniques, creating durable and beautiful accessories.",
    products: 22,
    established: "2021",
    email: "info@maasaileather.tz",
    phone: "+255 27 123 4567",
    website: "www.maasaileather.tz",
    specialties: ["Leather Bags", "Wallets", "Traditional Accessories"],
  },
  {
    id: "6",
    name: "Rooibos Republic",
    category: "Food & Beverages",
    location: "Cederberg, South Africa",
    image: "/images/rooibos-republic.webp",
    rating: 4.9,
    reviews: 145,
    followers: 987,
    description:
      "Organic Rooibos tea and herbal blends from the pristine Cederberg mountains, promoting health and wellness.",
    products: 18,
    established: "2016",
    email: "orders@rooibosrepublic.co.za",
    phone: "+27 27 123 4567",
    website: "www.rooibosrepublic.co.za",
    specialties: ["Rooibos Tea", "Herbal Blends", "Organic Products"],
  },
  {
    id: "7",
    name: "Heritage Textiles",
    category: "Traditional Textiles",
    location: "Johannesburg, South Africa",
    image: "/images/heritage-textiles.jpg",
    rating: 4.7,
    reviews: 98,
    followers: 654,
    description:
      "Traditional South African textiles including Shweshwe fabric and modern interpretations of cultural designs.",
    products: 35,
    established: "2015",
    email: "info@heritagetextiles.co.za",
    phone: "+27 11 123 4567",
    website: "www.heritagetextiles.co.za",
    specialties: ["Shweshwe Fabric", "Cultural Prints", "Modern Designs"],
  },
]

const categories = [
  "All Categories",
  "Handmade Crafts",
  "Food & Beverages",
  "Traditional Textiles",
  "Beauty & Wellness",
  "Leather Goods",
]

export default function Businesses() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses)
  const [selectedBusiness, setSelectedBusiness] = useState<(typeof businesses)[0] | null>(null)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterBusinesses(term, selectedCategory)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterBusinesses(searchTerm, category)
  }

  const filterBusinesses = (term: string, category: string) => {
    let filtered = businesses

    if (term) {
      filtered = filtered.filter(
        (business) =>
          business.name.toLowerCase().includes(term.toLowerCase()) ||
          business.description.toLowerCase().includes(term.toLowerCase()) ||
          business.location.toLowerCase().includes(term.toLowerCase()),
      )
    }

    if (category !== "All Categories") {
      filtered = filtered.filter((business) => business.category === category)
    }

    setFilteredBusinesses(filtered)
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">Registered Businesses</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Connect with authentic African businesses and support local entrepreneurs
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search businesses, products, or locations..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="pl-10 pr-8 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-slate-600 dark:text-slate-400 text-center">
            Showing {filteredBusinesses.length} registered businesses
          </p>
        </motion.div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedBusiness(business)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={business.image || "/placeholder.svg"}
                  alt={business.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{business.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {business.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{business.name}</h3>

                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{business.location}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">{business.description}</p>

                <div className="flex items-center justify-between mb-4">
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-slate-500 dark:text-slate-400">Est. {business.established}</span>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{business.reviews} reviews</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredBusinesses.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">No businesses found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search terms or filters</p>
          </motion.div>
        )}
      </main>

      {/* Business Detail Modal */}
      {selectedBusiness && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBusiness(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={selectedBusiness.image || "/placeholder.svg"}
                alt={selectedBusiness.name}
                width={600}
                height={300}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedBusiness(null)}
                className="absolute top-4 right-4 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{selectedBusiness.name}</h2>
                <div className="flex items-center space-x-1 bg-orange-100 dark:bg-orange-900 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {selectedBusiness.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 mb-4">
                <MapPin className="h-5 w-5" />
                <span>{selectedBusiness.location}</span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{selectedBusiness.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Business Stats</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Products:</span>
                      <span className="font-medium text-slate-800 dark:text-white">{selectedBusiness.products}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Followers:</span>
                      <span className="font-medium text-slate-800 dark:text-white">{selectedBusiness.followers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Reviews:</span>
                      <span className="font-medium text-slate-800 dark:text-white">{selectedBusiness.reviews}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Established:</span>
                      <span className="font-medium text-slate-800 dark:text-white">{selectedBusiness.established}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Contact Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-orange-500" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">{selectedBusiness.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-orange-500" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">{selectedBusiness.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-4 w-4 text-orange-500" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">{selectedBusiness.website}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBusiness.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  View Products
                </button>
                <button className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900 py-3 rounded-lg font-semibold transition-colors">
                  Contact Business
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  )
}
