import Button from './ui/Button'

export default function Footer() {
  return (
    <footer className="bg-secondary w-full py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Título */}
        <span className="font-display text-3xl font-medium text-white">
          As 5 Dimensões do Sono
        </span>

        {/* Slogan */}
        <p className="text-primary-fixed-dim text-sm">
          Transformando as noites das famílias com ciência e acolhimento.
        </p>

        {/* Botão */}
        <Button
          href="https://forms.gle/2LaybDMZUWx4W7wf9"
          target="_blank"
          variant="outline"
          size="default"
        >
          Solicitar Avaliação
        </Button>

      </div>
    </footer>
  )
}