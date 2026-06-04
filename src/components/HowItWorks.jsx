import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

export default function HowItWorks() {
  const headingRef = useScrollAnimation()
  const stepsRef = useScrollAnimation()
  const buttonRef = useScrollAnimation()

  const steps = [
    {
      number: '1',
      title: 'Identificamos a causa dos despertares',
      description: 'Nem todo despertar acontece pelo mesmo motivo. O primeiro passo é compreender o que está realmente impactando o sono da criança.'
    },
    {
      number: '2',
      title: 'Avaliamos as 5 Dimensões do Sono',
      description: 'Analisamos fatores relacionados à Essência, Corpo, Vínculo, Ambiente e Rotina.'
    },
    {
      number: '3',
      title: 'Construímos um plano possível para sua família',
      description: 'Sem fórmulas prontas ou estratégias copiadas de outras crianças.'
    },
    {
      number: '4',
      title: 'Aplicamos mudanças graduais e respeitosas',
      description: 'Buscando promover segurança, previsibilidade e melhores condições para o sono acontecer.'
    },
    {
      number: '5',
      title: 'Consolidamos um sono mais previsível',
      description: 'Para que as melhorias sejam consistentes e façam sentido para a realidade da família.'
    }
  ]

  return (
    <section className="section-padding bg-background" id="como-funciona">
      <div className="container-max">
        <div ref={headingRef} className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-secondary">
            COMO FUNCIONA O MÉTODO AS 5 DIMENSÕES DO SONO
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Um método integrado que investiga as causas dos despertares olhando para a criança como um todo.
          </p>
        </div>

        <div ref={stepsRef} className="space-y-6 max-w-3xl mx-auto fade-in-up delay-200">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-ambient border border-primary-container hover:border-primary transition-colors duration-300">
              {/* Número do passo - aumentado para melhor hierarquia visual */}
              <div className="shrink-0 flex items-center justify-center bg-primary text-white rounded-full font-display font-bold text-xl w-12 h-12">
                {step.number}
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                <h3 className="font-display text-xl font-medium text-primary mb-2">{step.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={buttonRef} className="text-center mt-10 fade-in-up delay-400">
          <Button href="https://forms.gle/2LaybDMZUWx4W7wf9" target="_blank" variant="outline" size="default">
            Solicitar Avaliação
          </Button>
        </div>
      </div>
    </section>
  )
}