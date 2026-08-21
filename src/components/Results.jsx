import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * Results — Seção "Resultados que Buscamos".
 *
 * Posicionada logo após <Method /> para conectar a apresentação do
 * Método 5 Dimensões com os resultados práticos que a família pode
 * esperar ao longo do acompanhamento.
 *
 * Estrutura: 9 cards em grid responsivo (1 / 2 / 3 colunas), cada um
 * com número grande, label temático curto e descrição objetiva.
 */
export default function Results() {
  const headingRef = useScrollAnimation()
  const cardsRef = useScrollAnimation()

  const results = [
    {
      n: '01',
      label: 'Horário compatível',
      text: 'um horário de sono mais compatível com o ritmo e as necessidades do bebê;',
    },
    {
      n: '02',
      label: 'Rotina organizada',
      text: 'uma rotina e sonecas mais organizadas;',
    },
    {
      n: '03',
      label: 'Adormecer sustentável',
      text: 'uma forma de adormecer mais sustentável para a família;',
    },
    {
      n: '04',
      label: 'Ampliar conforto',
      text: 'ampliar as formas de conforto, quando o bebê depende exclusivamente de uma única associação;',
    },
    {
      n: '05',
      label: 'Adaptação ao berço',
      text: 'facilitar a adaptação ao berço ou ao espaço de sono, quando esse for o objetivo;',
    },
    {
      n: '06',
      label: 'Menos ajuda',
      text: 'reduzir gradualmente a quantidade de ajuda, quando houver prontidão;',
    },
    {
      n: '07',
      label: 'Despertares manejáveis',
      text: 'tornar os despertares e o retorno ao sono mais manejáveis;',
    },
    {
      n: '08',
      label: 'Mais cuidadores',
      text: 'ampliar a participação de outros cuidadores;',
    },
    {
      n: '09',
      label: 'Critérios claros',
      text: 'dar aos pais critérios claros para saber quando avançar, manter, aumentar suporte ou recuar.',
    },
  ]

  return (
    <section className='section-padding bg-background' id='resultados'>
      <div className='container-max'>
        {/* Cabeçalho da seção */}
        <div ref={headingRef} className='text-center mb-12 fade-in-up'>
          <span className='inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-container text-secondary mb-4'>
            Resultados
          </span>
          <h2 className='font-display text-4xl md:text-5xl font-medium text-primary leading-tight text-balance max-w-3xl mx-auto'>
            Resultados que Buscamos
          </h2>
          <p className='text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty mt-4 max-w-2xl mx-auto'>
            O que o trabalho conjunto entre família e método busca construir ao longo do acompanhamento.
          </p>
        </div>

        {/* Grid de cards (1 / 2 / 3 colunas) */}
        <div
          ref={cardsRef}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5 md:gap-6'
        >
          {results.map((r) => (
            <article
              key={r.n}
              className='group bg-white rounded-2xl p-6 shadow-ambient border border-primary/10 hover:border-secondary/40 hover:shadow-lg transition-all flex flex-col gap-3'
            >
              <div className='flex items-center gap-3'>
                <span className='font-display text-2xl font-semibold text-secondary leading-none'>
                  {r.n}
                </span>
                <span className='h-px flex-1 bg-secondary/20' aria-hidden='true' />
              </div>
              <h3 className='font-display text-lg font-semibold text-on-surface leading-snug'>
                {r.label}
              </h3>
              <p className='text-sm md:text-base text-on-surface-variant leading-relaxed text-pretty'>
                {r.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
