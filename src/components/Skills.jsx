import { motion } from 'framer-motion'
import GlowCard from './GlowCard'
import './Skills.css'

const categories = [
  {
    title: 'IA & Data Science',
    color: '#c9a96e',
    skills: ['Python', 'LSTM', 'Deep Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'R'],
  },
  {
    title: 'Développement',
    color: '#6e8cc9',
    skills: ['React', 'JavaScript', 'HTML / CSS', 'C#', 'Git'],
  },
  {
    title: 'Outils & méthodes',
    color: '#a96ec9',
    skills: ['Figma', 'Design Thinking', 'UX Research'],
  },
  {
    title: 'Soft skills',
    color: '#6ec9a9',
    skills: ['Leadership', 'Adaptabilité', 'Esprit d\'initiative'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Skills() {
  return (
    <section id="skills">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="section-title">Compétences</h2>
        <p className="section-subtitle">Technologies & savoir-faire</p>
      </motion.div>

      <div className="skills-grid">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i + 1}
          >
            <GlowCard className="skill-card" style={{ '--cat-color': cat.color }}>
              <div className="skill-card-header">
                <span className="skill-dot" />
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
