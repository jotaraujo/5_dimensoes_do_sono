import logoImg from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#1a2f4a] w-full py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Logo + título — link para o topo da página */}
        <a href="#" className="flex items-center justify-center gap-3 group">
          <img src={logoImg} alt="Logo As 5 Dimensões do Sono" className="h-14 w-auto" />
          <span className="font-display text-3xl font-medium text-white group-hover:text-[#7ec8e3] transition-colors duration-200">
            As 5 Dimensões do Sono
          </span>
        </a>

        {/* Tagline */}
        <p className="text-[#7ec8e3] text-sm">
          Transformando as noites das famílias com ciência e acolhimento.
        </p>

        {/* Links legais */}
        <div className="flex gap-8 mt-2">
          <a
            href="#"
            className="text-[#b8dff5] text-sm hover:text-white transition-colors duration-200"
          >
            Política de Privacidade
          </a>
          <a
            href="#"
            className="text-[#b8dff5] text-sm hover:text-white transition-colors duration-200"
          >
            Termos de Uso
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[#4a6b8a] text-xs mt-4">
          © 2025 As 5 Dimensões do Sono · 5dimensoesdosono.com.br
        </div>
      </div>
    </footer>
  )
}
