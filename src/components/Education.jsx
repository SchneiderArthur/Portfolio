import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import './Education.css'

const education = [
  {
    school: 'École Nationale Supérieure de Cognitique – Bordeaux INP',
    degree: 'Ingénieur en cognitique · Développement & UX',
    period: '2024 – 2026',
    current: true,
  },
  {
    school: 'Lycée Alphonse Daudet',
    degree: 'Classe préparatoire Maths-Physique',
    period: '2022 – 2024',
    current: false,
  },
  {
    school: 'Lycée Jean Mermoz',
    degree: 'Baccalauréat – spé Physique & Mathématiques',
    period: '2022',
    current: false,
  },
]

const extras = [
  'Brevet d\'Initiation à l\'Aéronautique (BIA)',
  'Brevet National de Sécurité et de Sauvetage Aquatique (BNSSA)',
  'Premiers Secours en Équipe niv. 1 (PSE1)',
  'Permis B',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Education() {
  return (
    <section id="education">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="section-title">Formation</h2>
        <p className="section-subtitle">Mon parcours académique</p>
      </motion.div>

      <div className="education-grid">
        <div className="edu-timeline">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              className={`edu-item${e.current ? ' current' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
            >
              <div className="edu-dot">
                <GraduationCap size={14} />
              </div>
              <div className="edu-content">
                <div className="edu-period">{e.period}</div>
                <h3 className="edu-school">{e.school}</h3>
                <p className="edu-degree">{e.degree}</p>
                {e.current && <span className="edu-badge">En cours</span>}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="extras-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
        >
          <h3 className="extras-title">Autres formations</h3>
          <ul className="extras-list">
            {extras.map(e => (
              <li key={e}>
                <span className="extras-dash">–</span>
                {e}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
