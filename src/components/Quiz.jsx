import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

export default function quiz() {
  const headingRef = useScrollAnimation()
  const textRef = useScrollAnimation()
  const buttonRef = useScrollAnimation()

  return (
    <section className="section-padding bg-surface-container" id="quiz">
      <div className="container-max">
        <div ref={headingRef} className="text-center mb-12 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-secondary">
            Qual dimensão pode estar impactando o sono do seu filho?
          </h2>
        </div>

        <div ref={textRef} className="max-w-2xl mx-auto text-center leading-relaxed fade-in-up delay-200">
          <p className="text-lg text-on-surface-variant">
            Muitas famílias acreditam que o problema está apenas na rotina.
          </p>
          <p className="text-lg text-on-surface-variant">
            Mas os despertares podem estar relacionados a diferentes fatores.
          </p>
          <p className="text-lg text-on-surface-variant">
            Responda às perguntas abaixo e descubra se vale a pena investigar mais profundamente o sono do seu filho.
          </p>
        </div>

        <div ref={buttonRef} className="text-center mt-10 fade-in-up delay-400">
          <Button href="https://forms.gle/qy7eemqvmHFcfEhu8" target="_blank" variant="outline" size="default">
            Começar avaliação rápida
          </Button>
        </div>
      </div>
    </section>
  )
}