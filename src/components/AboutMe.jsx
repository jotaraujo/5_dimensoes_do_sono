import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Import estático — garante que o Vite processa e copia o arquivo corretamente
import aboutImg from '../assets/hero_3.jpeg'

export default function AboutMe() {
  const imageRef = useScrollAnimation()
  const textRef = useScrollAnimation()

  return (
    <section className="section-padding bg-background">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Foto */}
        <div ref={imageRef} className="relative fade-in-left">
          {/* Círculo decorativo de fundo */}
          <div className="absolute -bottom-8 -left-8 w-3/4 h-3/4 bg-primary-container rounded-full -z-10 hidden md:block" />

          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-ambient aspect-3/4 max-w-md mx-auto md:mr-auto">
            <img
              src={aboutImg}
              alt="Fernanda, especialista em sono infantil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texto */}
        <div ref={textRef} className="flex flex-col gap-6 fade-in-right">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-primary">
            Muito prazer, eu sou Fernanda
          </h2>

          <div className="text-lg text-on-surface-variant space-y-4 leading-relaxed">
            <p>
              Sou criadora do Método As 5 Dimensões do Sono e mãe da Olívia, da Júlia e do Benício.
            </p>
            <p>
              Minha própria experiência com a privação de sono me levou a estudar profundamente o sono infantil e a buscar respostas além das soluções tradicionais que costumam focar apenas na rotina ou na forma de adormecer.
            </p>
            <p>
              Ao longo dessa jornada, percebi que os despertares podem ter origens muito diferentes e que cada criança precisa ser compreendida de forma individual.
            </p>
            <p>
              Foi assim que nasceu o Método As 5 Dimensões do Sono: uma abordagem que investiga as possíveis causas dos despertares e ajuda famílias a construírem noites mais tranquilas sem recorrer ao choro ou a treinamentos rígidos.
            </p>
            <p>
              Hoje ajudo famílias que desejam compreender melhor o sono dos seus filhos e encontrar caminhos possíveis, respeitosos e sustentáveis para toda a casa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}