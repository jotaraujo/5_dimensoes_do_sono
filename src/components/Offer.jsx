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
            Comece hoje a transformação do sono do seu bebê
          </h3>

          {/* Preço */}
          <div className="mb-8">
            <p className="text-on-surface-variant line-through text-lg mb-2">
              De R$ 697,00 por apenas
            </p>
            <div className="text-5xl font-display font-bold text-primary mb-2">
              12x de R$ 33,08
            </div>
            <p className="text-on-surface-variant">ou R$ 297 à vista</p>
          </div>

          {/* CTA principal */}
          <Button href="#" className="w-full text-lg mb-8">
            SIM, QUERO ACESSAR O MÉTODO AGORA
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
