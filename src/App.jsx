import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Engagements from './components/Engagements'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Engagements />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 Arthur Schneider</p>
      </footer>
    </div>
  )
}
