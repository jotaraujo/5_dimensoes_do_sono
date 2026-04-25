import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Imports estáticos — o Vite garante que esses arquivos são processados corretamente
import feedback1 from '../assets/feedback_1.jpeg'
import feedback2 from '../assets/feedback_2.jpeg'
import feedback3 from '../assets/feedback_3.jpeg'
import feedback4 from '../assets/feedback_4.jpeg'
import feedback5 from '../assets/feedback_5.jpeg'
import feedback6 from '../assets/feedback_6.jpeg'
import feedback7 from '../assets/feedback_7.jpeg'
import feedback8 from '../assets/feedback_8.jpeg'

const feedbackImages = [
  { src: feedback1, alt: 'Print de feedback da cliente 1' },
  { src: feedback2, alt: 'Print de feedback da cliente 2' },
  { src: feedback3, alt: 'Print de feedback da cliente 3' },
  { src: feedback4, alt: 'Print de feedback da cliente 4' },
  { src: feedback5, alt: 'Print de feedback da cliente 5' },
  { src: feedback6, alt: 'Print de feedback da cliente 6' },
  { src: feedback7, alt: 'Print de feedback da cliente 7' },
  { src: feedback8, alt: 'Print de feedback da cliente 8' },
]

/**
 * Item individual do mural de depoimentos.
 * Sem altura fixa — cada print ocupa o espaço que precisa, sem cortes nem fundo branco.
 */
function FeedbackItem({ src, alt, index }) {
  const ref = useScrollAnimation()
  // Alterna o delay para criar uma entrada escalonada e natural
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200']

  return (
    <div
      ref={ref}
      className={`feedback-item rounded-2xl overflow-hidden shadow-ambient mb-6 fade-in-up ${delays[index] || ''}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block"
        loading="lazy"
      />
    </div>
  )
}

export default function Testimonials() {
  const headingRef = useScrollAnimation()

  return (
    <section className="section-padding bg-[#f5f9ff]" id="depoimentos">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#041c36]">
            Histórias Reais, Noites Reais
          </h2>
          <p className="text-lg text-on-surface-variant mt-4 max-w-xl mx-auto">
            Resultados reais de famílias que encontraram o caminho para noites tranquilas.
          </p>
        </div>

        {/*
         * Layout Masonry com CSS columns.
         * Cada print flui naturalmente na coluna, sem cortes nem espaços brancos.
         * Em mobile: 1 coluna | tablet: 2 colunas | desktop: 4 colunas
         */}
        <div className="masonry-grid">
          {feedbackImages.map((feedback, i) => (
            <FeedbackItem key={i} {...feedback} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
