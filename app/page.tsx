import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import WorkExperience from "./components/WorkExperience"
import Certifications from "./components/Certifications"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WorkExperience />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
