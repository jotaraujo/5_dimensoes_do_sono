import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

/**
 * PathSelector — Seção de decisão entre Curso Online e Mentoria Individual.
 *
 * Exibida antes do Checkout para ajudar o visitante a escolher
 * o caminho mais adequado para sua família.
 *
 * Layout: 2 colunas em desktop, 1 coluna (empilhado) em mobile.
 */

// Dados de cada coluna separados do JSX para facilitar manutenção futura
const paths = [
  {
    tag: 'CURSO ONLINE',
    tagColor: 'bg-primary-container text-primary',
    title: 'Ideal para quem:',
    benefits: [
      'Quer aprender o método no próprio ritmo',
      'Deseja aplicar as estratégias com autonomia',
      'Busca um guia completo, prático e científico',
    ],
    cta: 'Quero o Curso',
    ctaVariant: 'primary',
    ctaHref: 'https://pay.kiwify.com.br/5nOEc6c',
    cardClass: 'border-primary',
  },
  {
    tag: 'MENTORIA INDIVIDUAL',
    tagColor: 'bg-secondary-container text-secondary',
    title: 'Ideal para quem:',
    benefits: [
      'Precisa de orientação personalizada',
      'Já tentou outras estratégias sem sucesso',
      'Deseja identificar a causa dos despertares com acompanhamento',
    ],
    cta: 'Aplicar para Mentoria',
    ctaVariant: 'outline',
    ctaHref: 'https://pay.kiwify.com.br/5nOEc6c',
    cardClass: 'border-secondary',
  },
]

/**
 * PathCard — card individual de cada caminho.
 * Extraído como componente separado para que o hook useScrollAnimation
 * seja chamado no nível do componente (Regras dos Hooks do React).
 */
function PathCard({ tag, tagColor, title, benefits, cta, ctaVariant, ctaHref, cardClass }) {
  const cardRef = useScrollAnimation()

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-3xl p-8 shadow-ambient border-2 ${cardClass} flex flex-col gap-6 fade-in-up`}
    >
      {/* Tag de categoria */}
      <span className={`self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${tagColor}`}>
        {tag}
      </span>

      {/* Título da lista */}
      <p className="font-display text-xl font-medium text-on-surface">
        {title}
      </p>

      {/* Lista de benefícios */}
      <ul className="flex flex-col gap-3 flex-1">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3 text-on-surface-variant">
            {/* Ícone de check estilizado */}
            <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary-container flex items-center justify-center text-primary text-xs font-bold">
              ✓
            </span>
            <span className="leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Botão de conversão */}
      <Button
        href={ctaHref}
        target="_blank"
        variant={ctaVariant}
        className="w-full mt-2"
      >
        {cta}
      </Button>
    </div>
  )
}

export default function PathSelector() {
  const headingRef = useScrollAnimation()

  return (
    <section className="section-padding bg-background" id="qual-caminho">
      <div className="container-max">

        {/* Cabeçalho da seção */}
        <div ref={headingRef} className="text-center mb-12 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-primary leading-tight">
            Qual o melhor caminho para sua família?
          </h2>
          <p className="text-lg text-on-surface-variant mt-4 max-w-xl mx-auto leading-relaxed">
            Cada família tem um ritmo. Escolha a forma que mais combina com você.
          </p>
        </div>

        {/* Grid 2 colunas — empilha em mobile automaticamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {paths.map((path) => (
            <PathCard key={path.tag} {...path} />
          ))}
        </div>

      </div>
    </section>
  )
}
