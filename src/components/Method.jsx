// Importações estáticas das imagens — necessário para o Vite processar os assets corretamente
import essenciaImg from '../assets/essencia.png'
import ambienteImg from '../assets/ambiente.png'
import corpoImg    from '../assets/corpo.png'
import vinculoImg  from '../assets/vinculo.png'
import rotinaImg   from '../assets/rotina.png'

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import DimensionCard from './ui/DimensionCard'

// Dados das dimensões — separados do JSX para facilitar manutenção
// color: cor predominante da imagem (usada no fundo do ícone e na barra decorativa)
// border: cor da borda do card no hover (normalmente igual a color)
const dimensions = [
  {
    icon: essenciaImg,
    title: 'Essência',
    description: 'Compreenda o temperamento único do seu filho e o que ele realmente precisa em cada fase do desenvolvimento neurobiológico.',
    color: '#9cdbbd',   // verde menta — Essência
    border: '#9cdbbd',
  },
  {
    icon: ambienteImg,
    title: 'Ambiente',
    description: 'A adequação sensorial do espaço. Como ajustar luz, temperatura e ruídos para criar um ninho irresistível ao sono.',
    color: '#a6deea',   // azul sereno — Ambiente
    border: '#a6deea',
  },
  {
    icon: corpoImg,
    title: 'Corpo',
    description: 'O impacto real da alimentação, da digestão, dos saltos e dos picos de crescimento nos despertares noturnos.',
    color: '#ffe399',   // amarelo suave — Corpo
    border: '#ffe399',
  },
  {
    icon: vinculoImg,
    title: 'Vínculo',
    description: 'O poder do apego seguro. Como a sua regulação emocional e a sua presença ajudam o bebê a se entregar ao sono sem medo.',
    color: '#f8b8b8',   // rosa blush — Vínculo
    border: '#f8b8b8',
  },
  {
    icon: rotinaImg,
    title: 'Rotina',
    description: 'Ritmos biológicos e janelas de sono. Aprenda a estruturar o dia de forma flexível, previsível e sem engessar a sua vida.',
    color: '#b4aecc',   // roxo lavanda — Rotina
    border: '#b4aecc',
  },
]

export default function Method() {
  const headingRef = useScrollAnimation()

  return (
    <section className="section-padding bg-surface-container" id="metodo">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-secondary mb-4">
            AS 5 DIMENSÕES DO SONO
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Um método integrado que olha para o bebê como um todo,
            e não apenas como um reloginho a ser ajustado.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {dimensions.map((dim, i) => (
            <div
              key={dim.title}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex"
            >
              <DimensionCard {...dim} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
