"use client"

import { motion } from "framer-motion"
import { FileText, Scale, AlertTriangle, CreditCard, Shield } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Terms() {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Scale className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Please read these terms carefully before using our platform.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Last updated: January 2025</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <FileText className="h-6 w-6 text-orange-500" />
                <span>Acceptance of Terms</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                By accessing and using Digital SMME Hub, you accept and agree to be bound by the terms and provision of
                this agreement. These terms apply to all visitors, users, and others who access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Platform Description</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Digital SMME Hub is an e-commerce platform that connects African small, medium, and micro enterprises
                with customers. We provide:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Business registration and profile management</li>
                <li>Product listing and catalog services</li>
                <li>Secure payment processing</li>
                <li>Customer support and dispute resolution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">User Responsibilities</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">As a user of our platform, you agree to:</p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in fraudulent or harmful activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <CreditCard className="h-6 w-6 text-orange-500" />
                <span>Payment Terms</span>
              </h2>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>All prices are displayed in South African Rand (ZAR)</li>
                <li>Payment is required at the time of purchase</li>
                <li>We accept various payment methods including mobile money</li>
                <li>Refunds are subject to individual business policies</li>
                <li>Platform fees may apply to business transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Business Seller Terms</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                If you register as a business seller, you additionally agree to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Provide accurate business and product information</li>
                <li>Fulfill orders in a timely manner</li>
                <li>Handle customer service and returns</li>
                <li>Pay applicable platform fees and commissions</li>
                <li>Comply with local business regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-orange-500" />
                <span>Prohibited Activities</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Selling counterfeit or illegal products</li>
                <li>Engaging in fraudulent transactions</li>
                <li>Violating intellectual property rights</li>
                <li>Harassing or threatening other users</li>
                <li>Attempting to circumvent platform security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <Shield className="h-6 w-6 text-orange-500" />
                <span>Limitation of Liability</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Digital SMME Hub acts as a platform connecting buyers and sellers. We are not responsible for the
                quality, safety, or legality of products listed, the truth or accuracy of listings, or the ability of
                sellers to sell items or buyers to pay for items.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Termination</h2>
              <p className="text-slate-600 dark:text-slate-300">
                We reserve the right to terminate or suspend your account and access to the platform at our sole
                discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to
                other users, us, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Changes to Terms</h2>
              <p className="text-slate-600 dark:text-slate-300">
                We reserve the right to modify these terms at any time. We will notify users of significant changes via
                email or platform notifications. Continued use of the platform after changes constitutes acceptance of
                the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-300">
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Email:</strong> legal@digitalsmme.co.za
                  <br />
                  <strong>Phone:</strong> +27 11 123 4567
                  <br />
                  <strong>Address:</strong> Cape Town, South Africa
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  )
}
