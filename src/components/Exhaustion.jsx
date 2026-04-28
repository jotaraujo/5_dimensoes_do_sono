import { useScrollAnimation } from '../hooks/useScrollAnimation'

import criancas1Img from '../assets/criancas_1.png'
import criancas3Img from '../assets/criancas_3.jpeg'

export default function Exhaustion() {
  const imageRef = useScrollAnimation()
  const textRef = useScrollAnimation()

  return (
    <section className="section-padding bg-background">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Imagens empilhadas */}
        <div ref={imageRef} className="order-2 md:order-1 relative h-120 fade-in-left">
          {/* Imagem principal — PNG com fundo transparente */}
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
            A sua exaustão está roubando a alegria...
          </h2>

          <div className="text-lg text-on-surface-variant space-y-4 leading-relaxed">
            <p>
              Você sente que já tentou de tudo. Rotinas rígidas, ruído branco, dicas da internet e até conselhos que não pareciam certos no seu coração. E ainda assim, as noites continuam sendo uma batalha.
            </p>
            <p>
              O cansaço acumulado faz você se sentir culpada por não ter paciência durante o dia. A privação de sono já não afeta só a sua energia, mas a dinâmica e o bem-estar de toda a casa.
            </p>
          </div>

          {/* Citação em destaque */}
          <blockquote className="bg-primary-container p-6 rounded-2xl border-l-4 border-primary mt-2">
            <p className="text-on-primary-container italic text-lg leading-relaxed">
              "Não precisa ser assim. O sono não deve ser treinado, ele é uma habilidade que deve ser facilitada e nutrida com segurança, previsibilidade e acolhimento."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
