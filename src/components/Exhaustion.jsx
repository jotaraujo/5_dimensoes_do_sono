import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Imports estáticos — o Vite garante que esses arquivos são processados corretamente
import criancas1Img from '../assets/criancas_1.jpeg'
import criancas3Img from '../assets/criancas_3.jpeg'

/**
 * Seção de Empatia — conecta com a dor da mãe exausta.
 * Estratégia: mostrar o problema antes de apresentar a solução.
 */
export default function Exhaustion() {
  const imageRef = useScrollAnimation()
  const textRef = useScrollAnimation()

  return (
    <section className="section-padding bg-[#f8f9ff]">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Imagens empilhadas */}
        <div ref={imageRef} className="order-2 md:order-1 relative h-120 fade-in-left">
          {/* Imagem principal */}
          <div className="relative z-10 w-4/5 ml-auto rounded-3xl overflow-hidden shadow-ambient aspect-4/5">
            <img
              src={criancas1Img}
              alt="Pai cansado segurando bebê acordado à noite"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Imagem secundária sobreposta */}
          <div className="absolute bottom-10 left-0 z-20 w-2/5 rounded-full overflow-hidden shadow-[0_10px_30px_-5px_rgba(26,47,74,0.2)] border-4 border-white aspect-square">
            <img
              src={criancas3Img}
              alt="Bebê esfregando os olhos com sono"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Detalhe decorativo */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-container rounded-full mix-blend-multiply filter blur-2xl opacity-50" />
        </div>

        {/* Texto */}
        <div ref={textRef} className="order-1 md:order-2 flex flex-col gap-6 fade-in-right">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-on-primary-container leading-tight">
            A exaustão está roubando a alegria...
          </h2>

          <div className="text-lg text-on-surface-variant space-y-4 leading-relaxed">
            <p>
              Você sente que já tentou de tudo. Chás, rotinas rígidas, ruído branco, e até conselhos
              que não pareciam certos no seu coração. E ainda assim, as noites são uma batalha.
            </p>
            <p>
              O cansaço acumulado faz você se sentir culpada por não ter paciência durante o dia.
              A privação de sono afeta não só você, mas o bem-estar de toda a família.
            </p>
          </div>

          {/* Citação em destaque */}
          <blockquote className="bg-primary-container p-6 rounded-2xl border-l-4 border-primary mt-2">
            <p className="text-on-primary-container italic text-lg leading-relaxed">
              "Não precisa ser assim. O sono não deve ser um treinamento de choro, mas sim
              uma habilidade que pode ser nutrida com segurança e acolhimento."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
