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
    description: 'Nem todos os bebés precisam das mesmas estratégias para dormir. Temperamento, perfil sensorial e fase do desenvolvimento influenciam diretamente a forma como cada criança adormece e desperta. Nessa dimensão avaliamos:\n- Temperamento\n- Perfil sensorial\n- Necessidade de movimento\n- Sensibilidade emocional\n- Fase do desenvolvimento',
    color: '#9cdbbd',
    border: '#9cdbbd',
  },
  {
    icon: ambienteImg,
    title: 'AMBIENTE',
    description: 'Pequenos detalhes podem gerar grandes impactos no descanso. Nessa dimensão avaliamos:\n- Iluminação\n- Temperatura\n- Ruídos\n- Estímulos sensoriais\n- Ambiente de sono',
    color: '#a6deea',
    border: '#a6deea',
  },
  {
    icon: corpoImg,
    title: 'CORPO',
    description: 'Nem toda criança que luta para dormir está escolhendo não dormir. Algumas simplesmente não conseguem. Nessa dimensão avaliamos:\n- Alimentação\n- Digestão\n- Desconfortos físicos\n- Necessidades biológicas\n- Desenvolvimento motor\n- Bem-estar geral',
    color: '#ffe399',
    border: '#ffe399',
  },
  {
    icon: vinculoImg,
    title: 'VÍNCULO',
    description: 'A forma como a criança se sente segura influencia diretamente o sono. Nessa dimensão avaliamos:\n- Apego seguro\n- Ansiedade de separação\n- Conexão entre pais e filhos\n- Regulação emocional\n- Clima emocional familiar',
    color: '#f8b8b8',
    border: '#f8b8b8',
  },
  {
    icon: rotinaImg,
    title: 'ROTINA',
    description: 'Mais importante do que implementar uma rotina é compreender o ritmo biológico da criança. Nessa dimensão avaliamos:\n- Janelas de sono\n- Distribuição das sonecas\n- Rituais de sono\n- Previsibilidade\n- Formas de oferecer conforto ao longo do dia e da noite',
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
            O sono do seu filho pode estar sendo impactado por uma ou mais dessas dimensões.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            O próximo passo é descobrir quais delas merecem atenção.
          </p>
          <Button href="https://forms.gle/2LaybDMZUWx4W7wf9" target="_blank" variant="outline" size="default">
            Solicitar Avaliação
          </Button>
        </div>
      </div>
    </section>
  )
}