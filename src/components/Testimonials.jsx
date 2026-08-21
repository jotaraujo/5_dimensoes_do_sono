import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

// Imports estáticos
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

function FeedbackItem({ src, alt, index }) {
  const ref = useScrollAnimation()
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
  const phrasesRef = useScrollAnimation()

  return (
    <section className="section-padding bg-primary" id="depoimentos">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-10 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white">
            Quando compreender o sono leva a uma mudança real
          </h2>
          <p className="text-lg text-primary-fixed-dim mt-4 max-w-xl mx-auto">
            Cada bebê chegou com uma história diferente. A partir da investigação e de mudanças individualizadas, construímos avanços reais para o sono e para a rotina da família.
          </p>
        </div>

        {/* Frases de identificação */}
        <div ref={phrasesRef} className="max-w-4xl mx-auto mb-14 fade-in-up delay-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-white text-sm italic">"Meu filho acordava de hora em hora."</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-white text-sm italic">"Eu já não sabia mais o que tentar."</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-white text-sm italic">"Entendi o que precisava mudar."</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-white text-sm italic">"Hoje temos uma forma de dormir muito mais sustentável."</p>
            </div>
          </div>
        </div>

        {/* Masonry grid de depoimentos */}
        <div className="masonry-grid">
          {feedbackImages.map((feedback, i) => (
            <FeedbackItem key={i} {...feedback} index={i} />
          ))}
        </div>

        {/* CTA após depoimentos */}
        <div className="text-center mt-14">
          <Button href="https://forms.gle/2LaybDMZUWx4W7wf9" target="_blank" variant="primary" size="default">
            Solicitar Avaliação
          </Button>
        </div>
      </div>
    </section>
  )
}