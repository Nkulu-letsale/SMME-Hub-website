"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Users, Database, Mail } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Privacy() {
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
            <Shield className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Your privacy is important to us. Learn how we protect your information.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Last updated: January 2025</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <Eye className="h-6 w-6 text-orange-500" />
                <span>Information We Collect</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, register your
                business, or make a purchase.
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Personal information (name, email, phone number)</li>
                <li>Business information (business name, address, description)</li>
                <li>Payment information (processed securely by our payment partners)</li>
                <li>Usage data (how you interact with our platform)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <Database className="h-6 w-6 text-orange-500" />
                <span>How We Use Your Information</span>
              </h2>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process transactions and send related information</li>
                <li>To send you technical notices and support messages</li>
                <li>To communicate with you about products, services, and events</li>
                <li>To improve our platform and develop new features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <Lock className="h-6 w-6 text-orange-500" />
                <span>Data Security</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. All payment information is processed using
                industry-standard encryption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <Users className="h-6 w-6 text-orange-500" />
                <span>Information Sharing</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>With your consent</li>
                <li>To trusted service providers who assist in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Your Rights</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <Mail className="h-6 w-6 text-orange-500" />
                <span>Contact Us</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Email:</strong> privacy@digitalsmme.co.za
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
