import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
}

function CountUp({ target, suffix = '', display }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || target === null) return
    let start = 0
    const steps = 40
    const increment = target / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 30)
    return () => clearInterval(timer)
  }, [inView, target])

  if (target === null) return <span ref={ref}>{display}</span>
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { display: '5+', label: 'Projets réalisés', numeric: 5, suffix: '+' },
  { display: 'C1', label: 'Niveau anglais', numeric: null },
  { display: '2026', label: 'Diplôme ingénieur', numeric: 2026, suffix: '' },
  { display: 'IA & Web', label: 'Double expertise', numeric: null },
]

export default function About() {
  return (
    <section id="about">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="section-title">À propos</h2>
        <p className="section-subtitle">Qui suis-je ?</p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          <p>
            Étudiant ingénieur à l'<strong>École Nationale Supérieure de Cognitique</strong> (Bordeaux INP),
            je me situe à l'intersection de la technologie, de la cognition humaine et du design.
          </p>
          <p>
            Passionné par l'<strong>IA appliquée</strong> et le <strong>développement full-stack</strong>,
            je conçois des solutions concrètes : modèles de deep learning, dashboards de données,
            applications web interactives.
          </p>
          <p>
            Je recherche une <strong>alternance (contrat de professionnalisation)</strong> à partir de
            septembre 2026 dans le domaine de l'IA ou du développement logiciel.
          </p>

          <div className="about-meta">
            <span className="about-meta-item">
              <MapPin size={15} />
              Bordeaux, France
            </span>
            <span className="about-meta-item">
              <GraduationCap size={15} />
              ENSC – Bordeaux INP
            </span>
            <span className="about-meta-item">
              <Briefcase size={15} />
              Disponible sept. 2026
            </span>
          </div>
        </motion.div>

        <motion.div
          className="about-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          {stats.map(s => (
            <div className="stat-card" key={s.label}>
              <span className="stat-value">
                <CountUp target={s.numeric} suffix={s.suffix} display={s.display} />
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
