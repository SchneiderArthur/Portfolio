import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import GlowCard from './GlowCard'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)
import './Projects.css'

const projects = [
  {
    title: 'Data Battle de Pau – Prévision météo par IA',
    category: 'Compétition data science · 2025-2026',
    desc: "Conception et entraînement d'un modèle LSTM (réseau de neurones récurrent) pour prédire la fin d'alertes orageuses causant des arrêts au port. Traitement de séries temporelles météorologiques, feature engineering, évaluation du modèle.",
    tags: ['Deep Learning', 'LSTM', 'Python', 'Pandas', 'NumPy', 'Séries temporelles'],
    color: '#c9a96e',
    github: null,
    demo: null,
  },
  {
    title: 'Dashboard Scrum Master – Thermo Fisher Scientific',
    category: 'Projet ingénierie · 2025-2026',
    desc: "Développement d'un dashboard web agrégeant les données Jira et GitLab à destination des Scrum Masters. Visualisation en temps réel des KPIs : bugs en production, cycle time, burndown charts, branches ouvertes.",
    tags: ['React', 'JavaScript', 'HTML/CSS', 'Jira API', 'GitLab API', 'Data Viz'],
    color: '#6e8cc9',
    github: null,
    demo: null,
  },
  {
    title: 'P2I – Application de matching étudiant (ENSC)',
    category: 'Projet innovant · 2025-2026',
    desc: "Conception et développement d'une application de mise en relation interne à l'école, permettant aux étudiants de trouver des partenaires pour leurs projets selon leurs compétences et disponibilités.",
    tags: ['React', 'JavaScript', 'Algorithme', 'Full-stack'],
    color: '#a96ec9',
    github: 'https://github.com/SchneiderArthur/Cogmeetic_P2I',
    demo: null,
  },
  {
    title: 'Cognitive Toolkit – SNCF',
    category: 'Recherche appliquée · 2024-2025',
    desc: "Protocole expérimental pour réduire la sous-charge cognitive des conducteurs face à l'automatisation. Analyse statistique de données physiologiques et cognitives sur simulateur.",
    tags: ['Analyse statistique', 'R', 'UX Research'],
    color: '#6ec9a9',
    github: null,
    demo: null,
  },
  {
    title: 'ENSemenC & JurENSiC – Jeux en C#',
    category: 'Développement logiciel · 2024-2025',
    desc: "Développement de deux jeux (simulation de potager & jeu de plateau) en C# orienté objet. Modélisation objet, logique de jeu et interface console.",
    tags: ['C#', 'POO'],
    color: '#c96e6e',
    github: null,
    demo: null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Projects() {
  return (
    <section id="projects">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="section-title">Projets</h2>
        <p className="section-subtitle">Ce que j'ai construit</p>
      </motion.div>

      <div className="projects-list">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={i % 2 + 1}
          >
            <GlowCard className="project-card" style={{ '--proj-color': p.color }}>
            <div className="project-card-top" />

            <div className="project-body">
              <div className="project-header">
                <div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-category">{p.category}</p>
                </div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <GithubIcon />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
