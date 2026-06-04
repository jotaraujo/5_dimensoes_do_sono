import Button from './ui/Button'

/**
 * StickyCta — Botão fixo exibido apenas em dispositivos móveis.
 * Fica fixo na parte inferior da tela durante toda a rolagem.
 */
export default function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-9999 p-4 bg-linear-to-t from-background to-background/95 backdrop-blur-sm md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <Button
        href="https://forms.gle/2LaybDMZUWx4W7wf9"
        target="_blank"
        className="w-full text-lg"
      >
        Solicitar Avaliação
      </Button>
    </div>
  )
}