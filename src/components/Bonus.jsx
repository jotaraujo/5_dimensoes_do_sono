import { useScrollAnimation } from '../hooks/useScrollAnimation'

const bonus = [
  '1 ano de acompanhamento',
  'Encontros mensais ao vivo',
  'Sorteios mensais de um plano de sono exclusivo e personalizado para o seu bebê',
  'Comunidade de Apoio no WhatsApp (com envio de materiais)',
]

export default function Bonus() {
  const headingRef = useScrollAnimation()
  const cardRef = useScrollAnimation()

  return (
    <section className="section-padding bg-surface-container">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-12 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-secondary">
            Bônus Exclusivos
          </h2>
        </div>

        <div
          ref={cardRef}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-ambient max-w-3xl mx-auto fade-in-up delay-200"
        >
          <ul className="divide-y divide-primary-container">
            {bonus.map((bonus, i) => (
              <li
                key={i}
                className="py-6 flex items-center gap-4 first:pt-0 last:pb-0"
              >
                <span className="text-2xl shrink-0">🎁</span>
                <span className="font-semibold text-primary text-lg">{bonus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
