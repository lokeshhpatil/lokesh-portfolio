"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <p className="flex items-center justify-center text-lg mb-2">
              Built with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="mx-2 text-red-400"
              >
                <Heart size={20} fill="currentColor" />
              </motion.span>
              by Lokesh
            </p>
            <p className="text-slate-400">© {currentYear} Lokesh. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-slate-400"
          >
            <p>Designed and developed with modern web technologies</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
