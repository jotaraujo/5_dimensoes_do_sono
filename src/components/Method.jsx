import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Dados das dimensões — separados do JSX para facilitar manutenção
const dimensions = [
  {
    icon: '🌱',
    title: 'A Essência',
    description: 'Compreender o temperamento único do seu bebê e suas necessidades de desenvolvimento neurobiológico.',
  },
  {
    icon: '🌙',
    title: 'O Ambiente',
    description: 'Adequação sensorial do espaço de dormir, controle de luz, temperatura e ruídos para a higiene do sono.',
  },
  {
    icon: '💚',
    title: 'O Corpo',
    description: 'Alimentação, digestão, saltos de desenvolvimento e picos de crescimento que impactam o despertar.',
  },
  {
    icon: '🤝',
    title: 'O Vínculo',
    description: 'Apego seguro, regulação emocional e o papel da figura de apego na tranquilidade do adormecer.',
  },
  {
    icon: '🔄',
    title: 'A Rotina',
    description: 'Ritmos biológicos, janelas de sono e como estruturar o dia de forma flexível e previsível.',
  },
]

/**
 * Card individual de cada dimensão.
 * Cada card observa sua própria visibilidade (IntersectionObserver).
 */
function DimensionCard({ icon, title, description, index }) {
  const cardRef = useScrollAnimation()
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500']
  const delay = delays[index] || ''

  return (
    <div
      ref={cardRef}
      className={`dimension-card bg-white rounded-2xl p-8 shadow-ambient fade-in-up ${delay}`}
    >
      <div className="dimension-card__icon w-14 h-14 bg-primary-container rounded-full flex items-center justify-center text-2xl mb-6">
        {icon}
      </div>

      <div className="dimension-card__bar h-0.5 w-8 bg-primary rounded-full mb-4" />

      <h3 className="dimension-card__title font-display text-2xl font-medium text-on-primary-container mb-3">
        {title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  )
}

export default function Method() {
  const headingRef = useScrollAnimation()

  return (
    <section className="section-padding bg-[#e8f3ff]" id="metodo">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-on-primary-container mb-4">
            🌟 AS 5 DIMENSÕES DO SONO 🌟
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Um método integrado que olha para o bebê como um todo,
            não apenas como um relógio a ser ajustado.
          </p>
        </div>

        {/* Flexbox + justify-center centraliza automaticamente a última linha */}
        <div className="flex flex-wrap justify-center gap-6">
          {dimensions.map((dim, i) => (
            <div
              key={dim.title}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <DimensionCard {...dim} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
