import Button from './ui/Button'

export default function Footer() {
  return (
    <footer className="bg-secondary w-full py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Título — link para o topo da página */}
        <a href="#" className="group">
          <span className="font-display text-3xl font-medium text-white group-hover:text-primary-fixed-dim transition-colors duration-200">
            As 5 Dimensões do Sono
          </span>
        </a>

        {/* Tagline */}
        <p className="text-primary-fixed-dim text-sm">
          Transformando as noites das famílias com ciência e acolhimento.
        </p>

        {/* CTA final */}
        <div className="flex flex-col items-center gap-4 py-6 border-t border-white/10 w-full">
          <p className="text-white text-lg font-medium">
            talvez o problema não seja aquilo que você imagina.
          </p>
          <p className="text-primary-fixed-dim text-base max-w-xl">
            Muitas famílias chegam acreditando que o problema está apenas na rotina. Mas quando investigamos as 5 Dimensões do Sono, frequentemente encontramos fatores que estavam passando despercebidos.
          </p>
          <Button
            href="https://forms.gle/2LaybDMZUWx4W7wf9"
            target="_blank"
            variant="outline"
            size="default"
          >
            Solicitar Avaliação
          </Button>
        </div>

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
        <p className="text-surface-variant text-xs mt-4">
          © {new Date().getFullYear()} As 5 Dimensões do Sono. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}