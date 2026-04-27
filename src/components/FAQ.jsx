import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqs = [
  {
    question: 'Vou precisar deixar meu bebê chorando?',
    answer: 'Não. O método As 5 Dimensões do Sono é 100% baseado no apego seguro. Não usamos métodos de "chorar até dormir" (cry it out) ou de afastamento gradual. Trabalhamos a autonomia com colo, presença e acolhimento.',
  },
  {
    question: 'Para qual idade o método funciona?',
    answer: 'O curso cobre desde o nascimento (fase de extero-gestação) até os 3 anos de idade, abordando as especificidades neurológicas e físicas de cada fase.',
  },
  {
    question: 'Meu bebê só dorme mamando. O curso ajuda?',
    answer: 'Sim! Temos um módulo específico sobre associações de sono. Ensinamos como manter a amamentação (que é maravilhosa) desvinculando-a gentilmente da necessidade de adormecer, permitindo que outros cuidadores também consigam fazer o bebê dormir.',
  },
  {
    question: 'Qual o tempo de acesso ao curso?',
    answer: 'Você tem acesso a todo o conteúdo, atualizações e bônus por 1 ano inteiro. Pode assistir no seu ritmo e rever sempre que passarem por um novo salto de desenvolvimento.',
  },
]

/**
 * Item individual do FAQ usando estado local para controlar abertura.
 * Obs: Usamos useState em vez de <details> nativo para ter controle
 * total sobre a animação CSS.
 */
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white border border-primary-container rounded-2xl shadow-sm overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-6 text-left font-semibold text-on-background text-lg cursor-pointer hover:bg-surface-variant transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 shrink-0 ml-4 ${open ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {/* Conteúdo com animação via max-height */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-64' : 'max-h-0'}`}
      >
        <p className="px-6 pb-6 text-on-surface-variant leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const headingRef = useScrollAnimation()
  const faqsRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()

  return (
    <section className="section-padding bg-background" id="faq">
      <div className="max-w-3xl mx-auto px-6">

        <div ref={headingRef} className="text-center mb-12 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-secondary">
            Perguntas Frequentes
          </h2>
        </div>

        <div ref={faqsRef} className="space-y-4 mb-16 fade-in-up delay-200">
          {faqs.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>

        {/* CTA final */}
        <div ref={ctaRef} className="text-center fade-in-up delay-300">
          <a
            href="#oferta"
            className="inline-flex items-center justify-center bg-tertiary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 w-full md:w-auto hover:bg-tertiary-fixed-variant hover:shadow-xl"
          >
            GARANTIR MINHA VAGA AGORA
          </a>
        </div>
      </div>
    </section>
  )
}
