import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

import criancas1Img from '../assets/criancas_1.png'
import criancas3Img from '../assets/criancas_3.jpeg'

export default function Comprehension() {
  const imageRef = useScrollAnimation()
  const textRef = useScrollAnimation()

  return (
    <section className="section-padding bg-background">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Imagens empilhadas */}
        <div ref={imageRef} className="order-2 md:order-1 relative h-120 fade-in-left">
          {/* Imagem principal */}
          <div className="relative z-10 w-4/5 ml-auto rounded-3xl shadow-ambient aspect-4/5
            bg-linear-to-b from-primary-container/40 to-secondary-container/30 flex items-end justify-center overflow-hidden">
            <img
              src={criancas1Img}
              alt="Eu com meus filhos"
              className="w-full h-full object-contain object-bottom"
            />
          </div>

          {/* Imagem secundária sobreposta */}
          <div className="absolute bottom-10 left-0 z-20 w-2/5 rounded-full overflow-hidden shadow-[0_10px_30px_-5px_rgba(26,47,74,0.2)] border-4 border-white aspect-square">
            <img
              src={criancas3Img}
              alt="Meus filhos"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Detalhe decorativo */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-container rounded-full mix-blend-multiply filter blur-2xl opacity-50" />
        </div>

        {/* Texto */}
        <div ref={textRef} className="order-1 md:order-2 flex flex-col gap-6 fade-in-right">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-primary leading-tight">
            Compreender o bebê não significa deixar tudo como está.
          </h2>

          <div className="text-lg text-on-surface-variant space-y-4 leading-relaxed">
            <p>
              Nem toda associação precisa ser retirada. Nem todo despertar precisa ser “corrigido”. Mas também não é necessário manter indefinidamente uma dinâmica que deixou de funcionar para a família.
            </p>
            <p>
              Meu trabalho é entender o bebê e o contexto primeiro - e, a partir disso, decidir quando faz sentido manter, regular ou mudar. Quando a mudança é necessária, ela é conduzida de forma progressiva, observando a resposta do bebê e ajustando a quantidade de suporte.
            </p>
          </div>

          {/* Citação em destaque */}
          <blockquote className="bg-secondary-container p-6 rounded-2xl border-l-4 border-secondary mt-2">
            <p className="text-on-primary-container italic text-lg leading-relaxed">
              Eu não sou contra ensinar um bebê a dormir de outra forma. Sou contra aplicar uma técnica sem antes entender o bebê, o contexto e a realidade da família.
            </p>
          </blockquote>

          {/* Transição para a mentoria */}
          <p className="text-base text-on-surface-variant leading-relaxed">
            Nem todo despertar tem a mesma causa. Por isso desenvolvi o Método 5 Dimensões do Sono para identificar o que realmente está impactando o sono da criança.
          </p>

          {/* Botão único - Solicitar Avaliação */}
          <div className="flex justify-center">
            <Button href="https://forms.gle/2LaybDMZUWx4W7wf9" target="_blank" variant="primary" size="default">
              Solicitar Avaliação
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}