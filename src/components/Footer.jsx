import logoImg from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-secondary w-full py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Logo + título — link para o topo da página */}
        <a href="#" className="flex items-center justify-center gap-3 group">
          <img src={logoImg} alt="Logo As 5 Dimensões do Sono" className="h-20 w-auto drop-shadow-md" />
          <span className="font-display text-3xl font-medium text-white group-hover:text-primary-fixed-dim transition-colors duration-200">
            As 5 Dimensões do Sono
          </span>
        </a>

        {/* Tagline */}
        <p className="text-primary-fixed-dim text-sm">
          Transformando as noites das famílias com ciência e acolhimento.
        </p>

        {/* Links legais */}
        <div className="flex gap-8 mt-2">
          <a
            href="#"
            className="text-surface-variant text-sm hover:text-white transition-colors duration-200"
          >
            Política de Privacidade
          </a>
          <a
            href="#"
            className="text-surface-variant text-sm hover:text-white transition-colors duration-200"
          >
            Termos de Uso
          </a>
        </div>

        {/* Copyright */}
        <div className="text-secondary-fixed-dim text-xs mt-4">
          © 2025 As 5 Dimensões do Sono · 5dimensoesdosono.com.br
        </div>
      </div>
    </footer>
  )
}
