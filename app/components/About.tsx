"use client"

import { motion } from "framer-motion"
import { Code, Coffee, Lightbulb, Users } from "lucide-react"

const About = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "MongoDB",
    "PostgreSQL",
    "Python",
  ]

  const interests = [
    { icon: Code, title: "Clean Code", description: "Writing maintainable, scalable code" },
    { icon: Lightbulb, title: "Innovation", description: "Exploring new technologies and solutions" },
    { icon: Users, title: "Collaboration", description: "Working with teams to build great products" },
    { icon: Coffee, title: "Continuous Learning", description: "Always improving and growing" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a passionate web developer and computer science student with a love for creating digital experiences
                that matter. My journey in tech started with curiosity and has evolved into a dedication to building
                solutions that make people's lives easier.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community. I believe in the power of continuous learning and
                collaboration.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {interests.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-50 rounded-lg text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-lg mb-4">
                  <Icon size={24} />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
                <p className="text-sm text-slate-600">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
