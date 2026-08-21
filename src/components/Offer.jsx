import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

export default function Offer() {
  const cardRef = useScrollAnimation()

  return (
    <section className="section-padding bg-surface-variant" id="oferta">
      <div className="container-max">

        <div
          ref={cardRef}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-ambient max-w-2xl mx-auto border-2 border-primary text-center fade-in-up"
        >
          {/* Título da oferta */}
          <h3 className="font-display text-3xl font-medium text-secondary mb-8">
            Talvez o problema não seja aquilo que você imagina.
          </h3>

          <div className="text-lg text-on-surface-variant space-y-4 leading-relaxed mb-8">
            <p>
              Muitas famílias chegam acreditando que o problema está apenas na rotina, na amamentação ou em alguma associação de sono.
            </p>
            <p>
              Mas quando investigamos as 5 Dimensões do Sono, frequentemente encontramos fatores que estavam passando despercebidos.
            </p>
            <p>
              Se você ainda não sabe o que está causando tantos despertares, o próximo passo é descobrir.
            </p>
          </div>

          {/* CTA principal */}
          <Button href="https://forms.gle/2LaybDMZUWx4W7wf9" target="_blank" variant="primary" size="default">
            Solicitar Avaliação
          </Button>
        </div>

      </div>
    </section>
  )
}