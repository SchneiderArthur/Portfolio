import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import './Experience.css'

const experiences = [
  {
    role: 'Stage – Développement IA',
    company: 'Laboratoire de cyberjustice',
    location: 'Université de Montréal, Canada',
    period: 'Mai – Août 2026',
    current: true,
    desc: "Développement de prototypes d'IA appliquée au droit dans un écosystème combinant IA générative, NLP et vision par ordinateur : assistants juridiques, plateformes ODR, agents de médiation et détection d'images synthétiques. Intégration de LLM, mise en place de pipelines RAG et prompt engineering en contexte sensible. Application des principes d'IA responsable : garde-fous, validation humaine in-the-loop (HITL), neutralité, explicabilité et gestion des hallucinations.",
    tags: ['LLM', 'RAG', 'Prompt Engineering', 'NLP', 'IA Responsable', 'Python', 'React', 'TypeScript', 'LegalTech'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Experience() {
  return (
    <section id="experience">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="section-title">Expérience</h2>
        <p className="section-subtitle">Mon parcours professionnel</p>
      </motion.div>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className={`exp-card${exp.current ? ' current' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i + 1}
          >
            <div className="exp-icon">
              <Briefcase size={16} />
            </div>

            <div className="exp-body">
              <div className="exp-header">
                <div className="exp-main">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                  {exp.current && <span className="exp-badge">En cours</span>}
                </div>
              </div>

              <p className="exp-desc">{exp.desc}</p>

              <div className="exp-tags">
                {exp.tags.map(tag => (
                  <span key={tag} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
