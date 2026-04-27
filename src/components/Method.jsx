import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Dados das dimensões — separados do JSX para facilitar manutenção
const dimensions = [
  {
    icon: '🌱',
    title: 'A Essência',
    description: 'Compreenda o temperamento único do seu filho e o que ele realmente precisa em cada fase do desenvolvimento neurobiológico.',
  },
  {
    icon: '🌙',
    title: 'O Ambiente',
    description: 'A adequação sensorial do espaço. Como ajustar luz, temperatura e ruídos para criar um ninho irresistível ao sono.',
  },
  {
    icon: '💚',
    title: 'O Corpo',
    description: 'O impacto real da alimentação, da digestão, dos saltos e dos picos de crescimento nos despertares noturnos.',
  },
  {
    icon: '🤝',
    title: 'O Vínculo',
    description: 'O poder do apego seguro. Como a sua regulação emocional e a sua presença ajudam o bebê a se entregar ao sono sem medo.',
  },
  {
    icon: '🔄',
    title: 'A Rotina',
    description: 'Ritmos biológicos e janelas de sono. Aprenda a estruturar o dia de forma flexível, previsível e sem engessar a sua vida.',
  },
]

function DimensionCard({ icon, title, description, index }) {
  const cardRef = useScrollAnimation()
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']
  const delay = delays[index] || ''

  return (
    <div
      ref={cardRef}
      className={`dimension-card w-full bg-white rounded-2xl p-8 shadow-ambient fade-in-up flex flex-col ${delay}`}
    >
      <div className="dimension-card__icon w-14 h-14 bg-primary-container rounded-full flex items-center justify-center text-2xl mb-6">
        {icon}
      </div>

      <div className="dimension-card__bar h-0.5 w-8 bg-primary rounded-full mb-4" />

      <h3 className="dimension-card__title font-display text-2xl font-medium text-primary mb-3">
        {title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed grow">{description}</p>
    </div>
  )
}

export default function Method() {
  const headingRef = useScrollAnimation()

  return (
    <section className="section-padding bg-surface-container" id="metodo">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-secondary mb-4">
            🌟 AS 5 DIMENSÕES DO SONO 🌟
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Um método integrado que olha para o bebê como um todo,
            e não apenas como um reloginho a ser ajustado.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {dimensions.map((dim, i) => (
            <div
              key={dim.title}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex"
            >
              <DimensionCard {...dim} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
