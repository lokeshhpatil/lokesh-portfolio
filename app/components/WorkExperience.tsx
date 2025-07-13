"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const WorkExperience = () => {
  const experiences = [
{
  position: "Software Engineer Intern",
  company: "AI Alphatech",
  location: "Remote",
  duration: "Oct 2024 - Jul 2025",
  description:
    "Engineered and optimized backend APIs using Node.js and Express, improving response time by 30%. Designed mobile-responsive UIs with React and Next.js, and implemented JWT-based role-based access control.",
  technologies: ["Next.js", "React", "Node.js", "Express", "MUI", "MongoDB", "JWT", "Jest"],
},
{
  position: "Software Engineer Intern (Virtual)",
  company: "J.P. Morgan",
  location: "Remote",
  duration: "Aug 2024 - Sep 2024",
  description:
    "Fixed UI bugs and implemented live data visualizations using Perspective. Developed internal app components to enhance trader experience and presented technical insights to stakeholders.",
  technologies: ["JavaScript", "HTML", "CSS", "Perspective", "Git"],
},
  ]

  return (
    <section id="work" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-slate-800 rounded-full border-4 border-slate-50 hidden md:block"></div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.position}</h3>
                      <p className="text-lg text-slate-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-slate-500 text-sm mb-1">
                        <Calendar size={16} className="mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-slate-500 text-sm">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
