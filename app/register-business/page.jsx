"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Upload, Store, MapPin, Phone, Mail, Globe } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RegisterBusiness() {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    category: "",
    description: "",
    website: "",
    logo: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key])
        }
      })

      const response = await fetch("/api/businesses/register", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        alert("Business registration submitted successfully!")
        // Reset form
        setFormData({
          businessName: "",
          ownerName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          province: "",
          postalCode: "",
          category: "",
          description: "",
          website: "",
          logo: null,
        })
      } else {
        throw new Error("Registration failed")
      }
    } catch (error) {
      alert("Registration failed. Please try again.")
      console.error("Registration error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, logo: e.target.files[0] })
    }
  }

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 mb-4">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Register Your Business</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Join thousands of African businesses on our platform
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Business Information */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center space-x-2">
                <Store className="h-5 w-5 text-orange-500" />
                <span>Business Information</span>
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                    className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Owner Name"
                    value={formData.ownerName}
                    onChange={(e) => handleInputChange("ownerName", e.target.value)}
                    className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                    required
                  />
                </div>

                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  required
                >
                  <option value="">Select Business Category</option>
                  <option value="crafts">Handmade Crafts</option>
                  <option value="food">Food & Beverages</option>
                  <option value="textiles">Textiles & Fashion</option>
                  <option value="beauty">Beauty & Wellness</option>
                  <option value="home">Home & Garden</option>
                  <option value="electronics">Electronics</option>
                  <option value="services">Services</option>
                </select>

                <textarea
                  placeholder="Business Description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  required
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Business Logo</label>
                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label htmlFor="logo-upload" className="cursor-pointer text-orange-500 hover:text-orange-600">
                      Click to upload logo
                    </label>
                    {formData.logo && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{formData.logo.name}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>Contact Information</span>
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full pl-10 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full pl-10 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                  <input
                    type="url"
                    placeholder="Website (Optional)"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    className="w-full pl-10 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>Business Address</span>
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                    required
                  />
                  <select
                    value={formData.province}
                    onChange={(e) => handleInputChange("province", e.target.value)}
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
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
            >
              {isSubmitting ? "Registering..." : "Register Business"}
            </button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </>
  )
}
