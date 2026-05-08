import { useState, useEffect } from 'react'
import logoImg from '../assets/logomarca.png'
import Button from './ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#metodo', label: 'Método' },
    { href: '#modulos', label: 'Módulos' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-primary-container'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between py-4">
        {/* Logo + título — link para o topo da página */}
        <a href="#" className="flex items-center gap-2 group">
          <img src={logoImg} alt="Logo As 5 Dimensões do Sono" className="h-14 w-auto drop-shadow-sm" />
          <span className="font-display text-lg font-bold text-primary group-hover:opacity-80 transition-opacity duration-200">
            As 5 Dimensões do Sono
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 font-medium hover:text-primary transition-colors duration-200 text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <Button
          href="https://pay.kiwify.com.br/5nOEc6c"
          target="_blank"
          className="hidden md:inline-flex px-6 py-3 text-sm font-semibold"
        >
          Começar Agora
        </Button>

        {/* Botão menu mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-72 border-t border-blue-100' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 py-4 gap-4 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 font-medium hover:text-primary transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="https://pay.kiwify.com.br/5nOEc6c"
            target="_blank"
            className="mt-2 w-full text-sm font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Começar Agora
          </Button>
        </nav>
      </div>
    </header>
  )
}
