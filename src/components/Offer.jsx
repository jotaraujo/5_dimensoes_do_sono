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

          {/* CTA principal com tamanho padrão */}
          <Button href="https://forms.gle/2LaybDMZUWx4W7wf9" target="_blank" variant="primary" size="default" className="mb-8">
            Solicitar Avaliação
          </Button>

          {/* Garantia */}
          <div className="bg-primary-container border border-primary rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-left">
            <span className="text-4xl shrink-0">🛡️</span>
            <div>
              <h4 className="font-display text-xl font-medium text-on-primary-container mb-1">
                Garantia Incondicional de 7 Dias
              </h4>
              <p className="text-on-primary-container text-sm leading-relaxed opacity-90">
                Se você aplicar o método e achar que não é para você, devolvemos 100% do seu dinheiro.
                Sem perguntas, sem burocracia. O risco é todo meu.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}