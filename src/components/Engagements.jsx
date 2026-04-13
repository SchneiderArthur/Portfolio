import { motion } from 'framer-motion'
import { Trophy, Waves } from 'lucide-react'
import './Engagements.css'

const items = [
  {
    icon: Trophy,
    title: 'Président du Bureau Des Sports – ENSC',
    period: '2025',
    desc: "Organisation d'événements sportifs inter-écoles, gestion d'équipe bénévole.",
    color: '#c9a96e',
  },
  {
    icon: Waves,
    title: 'Maître-nageur en club de natation',
    period: '2022 – 2025',
    desc: 'Encadrement de nageurs, surveillance et sécurité aquatique.',
    color: '#6e8cc9',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Engagements() {
  return (
    <section id="engagements">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="section-title">Engagements</h2>
        <p className="section-subtitle">Au-delà du code</p>
      </motion.div>

      <div className="engagements-grid">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              className="engagement-card"
              style={{ '--eng-color': item.color }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
            >
              <div className="engagement-icon">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="engagement-title">{item.title}</h3>
                <p className="engagement-period">{item.period}</p>
                <p className="engagement-desc">{item.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
