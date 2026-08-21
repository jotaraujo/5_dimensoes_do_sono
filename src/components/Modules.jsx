import { useScrollAnimation } from '../hooks/useScrollAnimation'

const modules = [
  {
    number: '01',
    title: 'Fundamentos do Sono Infantil',
    description: 'Entenda a biologia do sono, como ele evolui e por que seu bebê acorda. Chega de expectativas irreais.',
  },
  {
    number: '02',
    title: 'Ajustes Iniciais de Ouro',
    description: 'Pequenas mudanças no ambiente e na rotina diurna que geram impactos gigantescos na qualidade da noite.',
  },
  {
    number: '03',
    title: 'Ferramentas de Regulação',
    description: 'Como acalmar um bebê agitado, vencer a temida "hora da bruxa" e aplicar técnicas gentis de relaxamento.',
  },
  {
    number: '04',
    title: 'Autonomia Guiada',
    description: 'Passo a passo para reduzir associações de sono dependentes (como dormir só mamando ou balançando), com muito colo, presença e zero abandono.',
  },
  {
    number: '05',
    title: 'Lidando com Regressões',
    description: 'O seu manual de sobrevivência para saltos de desenvolvimento, nascimento de dentinhos e dias de adoecimento.',
  },
  {
    number: '06',
    title: 'Sonecas Perfeitas',
    description: 'Como alongar aquelas sonecas curtas de 30 minutos e estruturar as transições (de 3 para 2, e de 2 para 1 soneca).',
  },
]

export default function Modules() {
  const headingRef = useScrollAnimation()

  return (
    <section className="section-padding bg-background" id="modulos">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-secondary mb-4">
            O Caminho Detalhado
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            O que você vai aprender
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.number} {...mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ModuleCard({ number, title, description, index }) {
  const ref = useScrollAnimation()
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 shadow-ambient flex items-start gap-6 border border-primary-container hover:border-primary transition-colors duration-300 fade-in-up ${delays[index] || ''}`}
    >
      {/* Número do módulo */}
      <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold text-lg">
        {number}
      </div>

      {/* Conteúdo */}
      <div>
        <h3 className="font-display text-xl font-medium text-primary mb-2">{title}</h3>
        <p className="text-on-surface-variant leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
