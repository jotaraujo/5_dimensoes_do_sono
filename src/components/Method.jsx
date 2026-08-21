// Importações estáticas das imagens
import essenciaImg from '../assets/essencia.png'
import ambienteImg from '../assets/ambiente.png'
import corpoImg    from '../assets/corpo.png'
import vinculoImg  from '../assets/vinculo.png'
import rotinaImg   from '../assets/rotina.png'

import Button from './ui/Button'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import DimensionCard from './ui/DimensionCard'

const dimensions = [
  {
    icon: essenciaImg,
    title: 'ESSÊNCIA',
    description: '\n- Temperamento\n- Intensidade\n- Sensibilidade\n- Curiosidade\n- Necessidade de movimento\n- Forma de reagir a transições e mudanças.',
    color: '#9cdbbd',
    border: '#9cdbbd',
  },
  {
    icon: ambienteImg,
    title: 'AMBIENTE',
    description: '\n- Local de sono\n- Segurança\n- Luz\n- Ruídos\n- Temperatura\n- Consistência do ambiente\n- Estímulos antes do sono',
    color: '#a6deea',
    border: '#a6deea',
  },
  {
    icon: corpoImg,
    title: 'CORPO',
    description: '\n- Alimentação\n- Mamadas\n- Desenvolvimento\n- Desconfortos\n- Refluxo, intestino, respiração, ronco, dor\n- Saúde e outros fatores físicos que podem interferir no sono',
    color: '#ffe399',
    border: '#ffe399',
  },
  {
    icon: vinculoImg,
    title: 'VÍNCULO',
    description: '\n- Necessidade de proximidade\n- Separação\n- Cuidador de referência\n- Formas de corregulação\n- Participação de outros cuidadores\n- Mudanças familiares',
    color: '#f8b8b8',
    border: '#f8b8b8',
  },
  {
    icon: rotinaImg,
    title: 'ROTINA',
    description: '\n- Início do dia\n- Distribuição e duração das sonecas\n- Tempo acordado\n- Pressão de sono\n- Horário noturno\n- Latência e previsibilidade',
    color: '#b4aecc',
    border: '#b4aecc',
  },
]

export default function Method() {
  const headingRef = useScrollAnimation()
  const cardsRef = useScrollAnimation()

  return (
    <section className="section-padding bg-surface-container" id="metodo">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-12 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-secondary mb-4">
            AS 5 DIMENSÕES DO SONO
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Um método integrado que investiga as causas dos despertares olhando para a criança como um todo.
          </p>
        </div>

        {/* CSS Grid com rows de altura igual */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 justify-items-center">
          {dimensions.map((dim, i) => (
            <DimensionCard key={dim.title} {...dim} index={i} />
          ))}
        </div>

        {/* Texto de fechamento com botão padronizado */}
        <div className="text-center mt-12 max-w-2xl mx-auto flex flex-col items-center gap-4">
          <p className="text-lg text-on-surface-variant leading-relaxed">
            As 5 Dimensões não são o ponto final.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Elas servem para construir uma hipótese sobre o que sustenta a dificuldade e decidir qual mudança deve vir primeiro.
          </p>
          <Button href="https://forms.gle/2LaybDMZUWx4W7wf9" target="_blank" variant="outline" size="default">
            Solicitar Avaliação
          </Button>
        </div>
      </div>
    </section>
  )
}