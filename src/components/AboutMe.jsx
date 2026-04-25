import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Import estático — garante que o Vite processa e copia o arquivo corretamente
import aboutImg from '../assets/hero_3.jpeg'

const credentials = [
  { icon: '🧠', label: 'Neurobiologia' },
  { icon: '❤️', label: 'Educadora' },
  { icon: '👶', label: 'Mãe' },
]

export default function AboutMe() {
  const imageRef = useScrollAnimation()
  const textRef = useScrollAnimation()

  return (
    <section className="section-padding bg-[#f8f9ff]">
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
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#041c36]">
            Muito prazer, eu sou Fernanda
          </h2>

          <div className="text-lg text-on-surface-variant space-y-4 leading-relaxed">
            <p>
              Eu já estive exatamente onde você está hoje. Acordando de hora em hora, sentindo
              que estava falhando como mãe e esgotada física e mentalmente.
            </p>
            <p>
              Foi a minha própria privação de sono que me levou a mergulhar nos estudos da
              ciência do sono infantil. Mas eu me recusei a usar métodos que envolvessem
              deixar meu filho chorar sozinho.
            </p>
            <p>
              Hoje, ajudo famílias a encontrarem o equilíbrio entre o respeito ao
              desenvolvimento da criança e a necessidade humana (e urgente!) de dormir dos pais.
            </p>
          </div>

          {/* Tags de credenciais */}
          <div className="flex flex-wrap gap-3 mt-2">
            {credentials.map((cred) => (
              <span
                key={cred.label}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container rounded-full text-sm font-semibold text-on-primary-container"
              >
                <span>{cred.icon}</span>
                {cred.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
