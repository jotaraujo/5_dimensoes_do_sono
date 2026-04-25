import { useScrollAnimation } from '../hooks/useScrollAnimation'

const bonus = [
  'Guia de Alimentação e Sono com Nutricionista',
  'Masterclass: Gestão Emocional Materna',
  'Tabelas Práticas de Janelas de Sono (0 a 3 anos)',
  'Comunidade de Apoio no WhatsApp (1 Mês)',
  'Áudios Relaxantes para o Ritual Noturno',
]

export default function Bonus() {
  const headingRef = useScrollAnimation()
  const cardRef = useScrollAnimation()

  return (
    <section className="section-padding bg-[#d0e8ff]">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-12 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#041c36]">
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
                <span className="font-semibold text-on-primary-container text-lg">{bonus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
