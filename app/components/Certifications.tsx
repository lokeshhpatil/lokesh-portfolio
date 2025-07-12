"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"

const Certifications = () => {
  const certifications = [
    {
      title: "The Complete Web Developer Course 2024",
      platform: "Udemy",
      issueDate: "Dec 2023",
      credentialUrl: "https://udemy.com/certificate",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    },
    {
      title: "React - The Complete Guide",
      platform: "Udemy",
      issueDate: "Nov 2023",
      credentialUrl: "https://udemy.com/certificate",
      skills: ["React", "Redux", "Hooks", "Context API"],
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      platform: "freeCodeCamp",
      issueDate: "Oct 2023",
      credentialUrl: "https://freecodecamp.org/certificate",
      skills: ["JavaScript", "Algorithms", "Data Structures"],
    },
    {
      title: "Responsive Web Design",
      platform: "freeCodeCamp",
      issueDate: "Sep 2023",
      credentialUrl: "https://freecodecamp.org/certificate",
      skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, rotateY: 5 }}
              className="bg-slate-50 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform-gpu"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 bg-slate-800 text-white rounded-lg mr-3">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">{cert.title}</h3>
                    <p className="text-slate-600 font-medium">{cert.platform}</p>
                  </div>
                </div>
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-slate-600 hover:text-slate-800 transition-colors"
                  aria-label="View credential"
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>

              <p className="text-slate-500 text-sm mb-4">Issued: {cert.issueDate}</p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-white text-slate-700 rounded text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
