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
            <p className="text-secondary font-bold text-lg mb-3">
              🎁 DESCONTO EXCLUSIVO DE DIA DAS MÃES
            </p>
            <p className="text-on-surface-variant text-base mb-1">
              De <span className="line-through">R$ 497,00</span> por apenas
            </p>
            <div className="text-5xl font-display font-bold text-primary mb-1">
              R$ 297,00 <span className="text-2xl font-normal">à vista</span>
            </div>
            <p className="text-on-surface-variant text-base mb-4">
              💳 Ou em <strong>12x de R$ 30,72</strong>
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed bg-primary-container rounded-xl px-4 py-3 border border-primary-container">
              💡 Pensa só: o investimento é de apenas <strong>R$ 1,02 por dia</strong>. Por menos que um cafezinho na padaria você finalmente volta a dormir em paz!
            </p>
          </div>

          {/* CTA principal */}
          <Button href="https://pay.kiwify.com.br/5nOEc6c" target="_blank" className="w-full text-lg mb-8">
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
