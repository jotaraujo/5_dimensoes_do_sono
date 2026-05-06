/**
 * Componente Button reutilizável
 *
 * Props:
 * - href (string)    → se informado, renderiza um <a>; caso contrário, um <button>
 * - children         → texto ou conteúdo interno do botão
 * - icon (string)    → emoji ou texto de ícone exibido antes do children
 * - variant          → 'primary' | 'secondary' | 'outline' (padrão: 'primary')
 * - className        → classes extras para sobrescrever ou complementar o estilo
 * - ...props         → quaisquer outros atributos HTML válidos (onClick, type, etc.)
 */
export default function Button({
  href,
  children,
  icon,
  variant = 'primary',
  className = '',
  ...props
}) {
  // Mapeamento de variantes para classes Tailwind
  const variantClasses = {
    primary:
      'bg-secondary text-white hover:bg-tertiary-fixed-variant hover:shadow-xl',
    secondary:
      'bg-primary text-white hover:opacity-90 hover:shadow-xl',
    outline:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  // Classes base compartilhadas por todas as variantes
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 text-base'

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  // Renderiza <a> quando href é passado (links de âncora ou externos)
  if (href) {
    return (
      <a href={href} className={allClasses} {...props}>
        {icon && <span>{icon}</span>}
        {children}
      </a>
    )
  }

  // Renderiza <button> quando não há href (ações internas)
  return (
    <button className={allClasses} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}
