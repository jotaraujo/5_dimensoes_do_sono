import { useScrollAnimation } from '../../hooks/useScrollAnimation'

/**
 * Componente DimensionCard
 *
 * Representa um card de uma das 5 dimensões do sono.
 * Layout fluido sem scroll interno - cards crescem conforme necessidade do conteúdo.
 *
 * Props:
 * - icon (string)        → imagem importada estaticamente via import
 * - title (string)       → título da dimensão
 * - description (string) → texto explicativo da dimensão
 * - color (string)       → cor predominante (fundo do ícone, barra decorativa e borda superior no hover)
 * - border (string)      → cor da borda superior no hover (normalmente igual a color)
 * - index (number)       → índice no array, usado para calcular o delay da animação
 */
export default function DimensionCard({ icon, title, description, color, border, index }) {
  const cardRef = useScrollAnimation()

  // Delays escalonados para criar efeito de cascata na animação de entrada
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']
  const delay = delays[index] || ''

  // Converte quebras de linha \n para quebras visuais
  const formattedDescription = description.split('\n').map((line, i, arr) => (
    <span key={line}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ))

  return (
    <div
      ref={cardRef}
      style={{ '--card-border': border || color }}
      className={`
        dimension-card w-full bg-white rounded-2xl p-5 shadow-ambient fade-in-up
        flex flex-col border-t-4 transition-all duration-300
        ${delay}
      `}
    >
      {/* Ícone com fundo colorido em versão transparente */}
      <div
        style={{ backgroundColor: color ? `${color}25` : undefined }}
        className="dimension-card__icon w-12 h-12 rounded-full flex items-center justify-center mb-4 overflow-hidden shrink-0"
      >
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        ) : (
          icon
        )}
      </div>

      {/* Barra decorativa horizontal com a cor da dimensão */}
      <div
        style={{ backgroundColor: color }}
        className="dimension-card__bar h-0.5 w-6 rounded-full mb-3"
      />

      {/* Cor do título igual à cor do ícone de cada dimensão */}
      <h3
        style={{ color }}
        className="dimension-card__title font-display text-xl font-medium mb-2"
      >
        {title}
      </h3>

      {/* Descrição fluida - sem maxHeight fixo, sem scroll */}
      <div className="text-sm text-on-surface-variant leading-relaxed">
        {formattedDescription}
      </div>
    </div>
  )
}