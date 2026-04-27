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
              Eu já estive exatamente onde você está hoje. Acordando de hora em hora, sentindo
              que estava falhando como mãe e esgotada física e mentalmente.
            </p>
            <p>
              Vivenciando a maternidade intensamente e equilibrando as necessidades da Olívia, da Júlia e do Benício, eu senti na pele que a teoria pura muitas vezes não se sustenta quando a exaustão bate às 3 da manhã.
            </p>
            <p>
              Foi a minha própria privação de sono que me levou a mergulhar fundo nos estudos da ciência do sono infantil. Mas eu me recusei a usar métodos que envolvessem deixar meus filhos chorando sozinhos.
            </p>
            <p>
              Hoje, meu propósito é ajudar outras famílias a encontrarem o equilíbrio perfeito: o respeito ao desenvolvimento da criança somado à necessidade humana (e urgente!) de dormir dos pais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
