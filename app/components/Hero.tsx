"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-stone-100"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-slate-200/30 rounded-lg transform rotate-12"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-stone-200/40 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-slate-300/20 rounded-lg transform -rotate-12"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hi, I'm{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-stone-600"
              whileHover={{ scale: 1.05 }}
            >
              Lokesh
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-slate-600 mb-8 space-y-2">
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Web Developer | Student | Tech Enthusiast
            </motion.p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web experiences that make a difference. Always learning,
            always building.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/lokeshhpatil", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/lokeshhpatil", label: "LinkedIn" },
              { icon: Mail, href: "mailto:lokeshpatil8975@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-slate-700 hover:text-slate-900"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
