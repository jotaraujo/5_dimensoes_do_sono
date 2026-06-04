import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

export default function CasoReal() {
  const headingRef = useScrollAnimation()
  const narrativeRef = useScrollAnimation()
  const believedRef = useScrollAnimation()
  const foundRef = useScrollAnimation()
  const transitionRef = useScrollAnimation()
  const resultRef = useScrollAnimation()
  const highlightRef = useScrollAnimation()
  const buttonRef = useScrollAnimation()

  return (
    <section className="section-padding bg-surface-container-low" id="caso-real">
      <div className="container-max">
        <h2 ref={headingRef} className="font-display text-4xl md:text-5xl font-medium text-primary text-center mb-6 fade-in-up">
          Caso Real: Quando o Sono Não Era o Verdadeiro Problema
        </h2>

        <div ref={narrativeRef} className="mt-8 max-w-2xl mx-auto leading-relaxed fade-in-up delay-200">
          <p className="text-lg text-on-surface-variant">
            <strong>Raquel, 1 ano e 7 meses.</strong>
          </p>
          <p className="text-lg text-on-surface-variant">
            Quando a Sara chegou até mim, sua filha acordava entre 3 e 6 vezes por noite, tinha despertares prolongados e acordava entre 4h e 5h da manhã.
          </p>
          <p className="text-lg text-on-surface-variant">
            A família estava exausta.
          </p>
          <p className="text-lg text-on-surface-variant">
            Mas durante a avaliação percebemos que o sono era apenas a ponta do iceberg.
          </p>
        </div>

        <div ref={believedRef} className="mt-10 max-w-2xl mx-auto space-y-3 fade-in-up delay-300">
          <p className="font-display text-xl font-medium text-primary mb-4">
            O que a família acreditava
          </p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>O problema era apenas o sono.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Talvez fosse uma fase.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Talvez fosse algo relacionado à rotina.</span>
            </li>
          </ul>
        </div>

        <div ref={foundRef} className="mt-10 max-w-2xl mx-auto space-y-3 fade-in-up delay-400">
          <p className="font-display text-xl font-medium text-primary mb-4">
            O que encontramos
          </p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Adaptação com uma nova cuidadora.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Sinais importantes de ansiedade de separação.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Necessidade intensa de conexão com a mãe.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Outros fatores influenciando o comportamento e os despertares.</span>
            </li>
          </ul>
        </div>

        <div ref={transitionRef} className="text-center mt-10 max-w-2xl mx-auto leading-relaxed fade-in-up delay-500">
          <p className="text-lg text-on-surface-variant">
            Por isso não começamos tentando "fazer dormir".
          </p>
          <p className="text-lg text-on-surface-variant">
            Primeiro investigamos as possíveis causas através das 5 Dimensões do Sono.
          </p>
        </div>

        <div ref={resultRef} className="mt-10 max-w-2xl mx-auto space-y-3 fade-in-up delay-600">
          <p className="font-display text-xl font-medium text-primary mb-4">
            Resultado
          </p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Despertares prolongados reduziram drasticamente.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Sonecas mais organizadas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Até 10 horas de sono noturno ininterrupto.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
              <span>Mais autonomia e segurança emocional.</span>
            </li>
          </ul>
        </div>

        <div ref={highlightRef} className="text-center mt-12 p-6 bg-primary/10 rounded-2xl fade-in-up delay-700">
          <p className="text-lg text-on-surface-variant font-medium leading-relaxed">
            <strong>O despertar não era o problema.</strong>
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Era apenas um sinal.
          </p>
          <p className="text-lg text-on-surface-variant font-bold leading-relaxed">
            E foi exatamente por situações como essa que nasceu o Método As 5 Dimensões do Sono.
          </p>
        </div>

        <div ref={buttonRef} className="text-center mt-10 fade-in-up delay-800">
          <Button href="https://forms.gle/2LaybDMZUWx4W7wf9" target="_blank" variant="outline" size="default">
            Solicitar Avaliação
          </Button>
        </div>
      </div>
    </section>
  )
}