import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

/**
 * Componente DimensionCard
 *
 * Representa um card de uma das 5 dimensões do sono.
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
  const [hovered, setHovered] = useState(false)

  // Delays escalonados para criar efeito de cascata na animação de entrada
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']
  const delay = delays[index] || ''

  // Cor da borda superior: visível no hover, transparente no estado normal
  const topBorderColor = hovered ? (border || color) : 'transparent'

  return (
    <div
      ref={cardRef}
      style={{ borderTopColor: topBorderColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        dimension-card w-full bg-white rounded-2xl p-8 shadow-ambient fade-in-up
        flex flex-col border-t-4 transition-all duration-300
        ${delay}
      `}
    >
      {/* Ícone com fundo colorido em versão transparente (hex + '25' = ~15% de opacidade) */}
      <div
        style={{ backgroundColor: color ? `${color}25` : undefined }}
        className="dimension-card__icon w-16 h-16 rounded-full flex items-center justify-center mb-6 overflow-hidden"
      >
        {/* Flexível: aceita imagem (string) ou JSX (emoji, ícone SVG, etc.) */}
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        ) : (
          icon
        )}
      </div>

      {/* Barra decorativa horizontal com a cor da dimensão */}
      <div
        style={{ backgroundColor: color }}
        className="dimension-card__bar h-0.5 w-8 rounded-full mb-4"
      />

      <h3 className="dimension-card__title font-display text-2xl font-medium text-primary mb-3">
        {title}
      </h3>

      <p className="text-on-surface-variant leading-relaxed grow">{description}</p>
    </div>
  )
}
