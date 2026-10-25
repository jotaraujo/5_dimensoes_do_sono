import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Importações estáticas das capas dos módulos
import modulo1Img from '../assets/modules/modulo1.jpeg'
import modulo2Img from '../assets/modules/modulo2.jpeg'
import modulo3Img from '../assets/modules/modulo3.jpeg'
import modulo4Img from '../assets/modules/modulo4.jpeg'
import modulo5Img from '../assets/modules/modulo5.jpeg'
import modulo6Img from '../assets/modules/modulo6.jpeg'
import modulo7Img from '../assets/modules/modulo7.jpeg'
import modulo8Img from '../assets/modules/modulo8.jpeg'
import modulo9Img from '../assets/modules/modulo9.jpeg'

const modules = [
  {
    number: '01',
    title: 'COMPREENDER / O Raio-X do Sono',
    description: 'Compreenda a biologia do sono infantil e aprenda a enxergar além das fórmulas prontas.',
    image: modulo1Img,
  },
  {
    number: '02',
    title: 'ORGANIZAR / Preparando a Base',
    description: 'Pequenas mudanças no ambiente e na rotina diurna que geram impactos gigantescos na qualidade da noite.',
    image: modulo2Img,
  },
  {
    number: '03',
    title: 'DECIDIR / O que precisa mudar?',
    description: 'Defina critérios claros para saber o que manter, o que ajustar e o que precisa ser modificado.',
    image: modulo3Img,
  },
  {
    number: '04',
    title: 'INTERVIR I / Construindo uma nova forma de adormecer',
    description: 'Passo a passo para reduzir associações dependentes de forma gradual, respeitosa e com muito acolhimento.',
    image: modulo4Img,
  },
  {
    number: '05',
    title: 'INTERVIR II / O espaço de sono e a redução de assistência',
    description: 'Como facilitar a transição para o berço e diminuir o suporte de forma progressiva e segura.',
    image: modulo5Img,
  },
  {
    number: '06',
    title: 'INTERVIR III / Despertares noturnos',
    description: 'Estratégias práticas e humanizadas para lidar com os despertares frequentes ao longo da noite.',
    image: modulo6Img,
  },
  {
    number: '07',
    title: 'SONECAS / Levando a mudança para o dia',
    description: 'Como alongar sonecas curtas e estruturar as transições de horários com previsibilidade.',
    image: modulo7Img,
  },
  {
    number: '08',
    title: 'VIDA REAL / Quando o plano encontra o bebê real',
    description: 'Como adaptar o método diante de saltos, dentinhos, doenças, viagens e imprevistos do dia a dia.',
    image: modulo8Img,
  },
  {
    number: '09',
    title: 'CONSOLIDAR / Depois que melhora',
    description: 'Critérios para avaliar a resposta do bebê, manter os avanços e saber como recuar ou avançar.',
    image: modulo9Img,
  },
]

export default function Modules() {
  const headingRef = useScrollAnimation()

  return (
    <section className="section-padding bg-background" id="modulos">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-secondary mb-4">
            Módulos do Curso
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            O passo a passo completo estruturado pelas 5 Dimensões do Sono.
          </p>
        </div>

        {/* Grid de 2 colunas no desktop, 1 coluna no mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.number} {...mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ModuleCard({ number, title, description, image, index }) {
  const ref = useScrollAnimation()
  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200', 'delay-300']

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 shadow-ambient flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-primary-container hover:border-primary transition-all duration-300 fade-in-up ${delays[index % delays.length] || ''}`}
    >
      {/* Capa do Módulo à esquerda */}
      {image ? (
        <div className="shrink-0 w-32 sm:w-28 md:w-32 aspect-3/4 rounded-xl overflow-hidden shadow-sm border border-primary-container bg-surface-container flex items-center justify-center">
          <img
            src={image}
            alt={`Capa do Módulo ${number}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="shrink-0 w-28 h-36 rounded-xl bg-primary-container text-primary flex items-center justify-center font-display font-bold text-xl">
          {number}
        </div>
      )}

      {/* Conteúdo à direita */}
      <div className="flex-1 text-center sm:text-left">
        <div className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary-container text-secondary mb-2">
          Módulo {number}
        </div>
        <h3 className="font-display text-lg md:text-xl font-medium text-primary mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
