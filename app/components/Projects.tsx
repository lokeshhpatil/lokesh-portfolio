"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Code } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      githubUrl: "https://github.com/lokesh/ecommerce-dashboard",
      liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/lokesh/task-manager",
      liveUrl: "https://task-manager-demo.netlify.app",
      featured: false,
    },
    {
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Weather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/lokesh/weather-app",
      liveUrl: "https://weather-forecast-demo.vercel.app",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: 5 }}
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu ${
                project.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Code size={20} className="text-slate-600 mr-2" />
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 border border-slate-800 text-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
