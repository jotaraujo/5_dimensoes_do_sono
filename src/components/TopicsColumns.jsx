import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * TopicsColumns — Seção da parte 8: Tópicos "Na prática, você vai aprender..." em colunas.
 * Posicionada logo após o componente NaPratica.jsx.
 */
const topics = [
  'Mamar para dormir',
  'Colo',
  'Movimento',
  'Participação de outro cuidador',
  'Berço',
  'Redução de assistência',
  'Despertares',
  'Sonecas',
  'Choro e resistência',
  'Pioras',
  'Doença',
  'Viagens',
  'Creche',
  'Transições',
]

export default function TopicsColumns() {
  const headingRef = useScrollAnimation()
  const gridRef = useScrollAnimation()

  return (
    <section className='section-padding bg-surface-container' id='topicos-praticos'>
      <div className='container-max'>
        <div ref={headingRef} className='text-center mb-12 fade-in-up'>
          <h2 className='font-display text-3xl md:text-4xl font-medium text-secondary mb-4'>
            Tópicos abordados ao longo do método
          </h2>
          <p className='text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed'>
            Questões práticas do dia a dia que você aprenderá a manejar com segurança e clareza.
          </p>
        </div>

        {/* Grid de colunas: 2 no mobile, 3 no tablet, 4 no desktop */}
        <div
          ref={gridRef}
          className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto fade-in-up delay-200'
        >
          {topics.map((topic, i) => (
            <div
              key={i}
              className='bg-white rounded-xl p-4 shadow-sm border border-primary-container hover:border-primary transition-all duration-300 flex items-center justify-center text-center'
            >
              <span className='text-on-surface font-medium text-sm md:text-base leading-snug'>
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
