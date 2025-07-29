"use client"

import { motion } from "framer-motion"
import { Cookie, Settings, Eye, Shield } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Cookies() {
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
            <Cookie className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">Cookie Policy</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Learn about how we use cookies to improve your experience.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Last updated: January 2025</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">What Are Cookies?</h2>
              <p className="text-slate-600 dark:text-slate-300">
                Cookies are small text files that are stored on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <Eye className="h-6 w-6 text-orange-500" />
                <span>Types of Cookies We Use</span>
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Essential Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    These cookies are necessary for the website to function properly. They enable basic functions like
                    page navigation, shopping cart functionality, and secure login.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Performance Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously. This helps us improve our website performance.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Functional Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    These cookies enable the website to provide enhanced functionality and personalization, such as
                    remembering your language preference and theme settings.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Marketing Cookies</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    These cookies are used to track visitors across websites to display relevant advertisements and
                    measure the effectiveness of our marketing campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <Settings className="h-6 w-6 text-orange-500" />
                <span>Managing Your Cookie Preferences</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Use our cookie consent banner to accept or reject non-essential cookies</li>
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions that manage cookie preferences</li>
                <li>Contact us to opt out of specific tracking cookies</li>
              </ul>

              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-orange-800 dark:text-orange-200">
                  <strong>Note:</strong> Disabling essential cookies may affect the functionality of our website and
                  your user experience.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Third-Party Cookies</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We may use third-party services that set their own cookies, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
                <li>Payment processors for secure transactions</li>
                <li>Analytics services to understand website usage</li>
                <li>Social media platforms for sharing functionality</li>
                <li>Customer support chat services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center space-x-2">
                <Shield className="h-6 w-6 text-orange-500" />
                <span>Data Security</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                We implement appropriate security measures to protect the information collected through cookies. Cookie
                data is encrypted and stored securely, and we regularly review our security practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Updates to This Policy</h2>
              <p className="text-slate-600 dark:text-slate-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and
                regulatory reasons. We will notify you of any significant changes by posting the new policy on our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300">
                If you have any questions about our use of cookies, please contact us:
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
