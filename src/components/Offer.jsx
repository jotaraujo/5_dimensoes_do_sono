import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Offer() {
  const cardRef = useScrollAnimation()

  return (
    <section className="section-padding bg-[#e8f3ff]" id="oferta">
      <div className="container-max">

        <div
          ref={cardRef}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-ambient max-w-2xl mx-auto border-2 border-[#006399] text-center fade-in-up"
        >
          {/* Título da oferta */}
          <h3 className="font-display text-3xl font-medium text-[#041c36] mb-8">
            Comece hoje a transformação do sono do seu bebê
          </h3>

          {/* Preço */}
          <div className="mb-8">
            <p className="text-on-surface-variant line-through text-lg mb-2">
              De R$ 800,00 por apenas
            </p>
            <div className="text-5xl font-display font-bold text-[#006399] mb-2">
              12x de R$ 49,90
            </div>
            <p className="text-on-surface-variant">ou R$ 497 à vista</p>
          </div>

          {/* CTA principal */}
          <a
            href="#"
            className="block bg-[#006399] text-white font-bold px-8 py-5 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 w-full text-lg mb-8 hover:bg-on-primary-fixed-variant hover:shadow-xl"
          >
            SIM, QUERO ACESSAR O MÉTODO AGORA
          </a>

          {/* Garantia */}
          <div className="bg-[#eef8ee] border border-[#a3c9a3] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-left">
            <span className="text-4xl shrink-0">🛡️</span>
            <div>
              <h4 className="font-display text-xl font-medium text-[#2a5a2a] mb-1">
                Garantia Incondicional de 15 Dias
              </h4>
              <p className="text-[#3d6d3d] text-sm leading-relaxed">
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
