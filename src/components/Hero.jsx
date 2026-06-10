import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

import heroImg from '../assets/hero.jpeg'

export default function Hero() {
  const textRef = useScrollAnimation()
  const imageRef = useScrollAnimation()

  return (
    <section className="bg-surface-container-low min-h-[90vh] flex items-center pt-8 md:pt-0">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">

        {/* Coluna de texto */}
        <div ref={textRef} className="flex flex-col gap-6 relative z-10 fade-in-left">
          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary leading-tight tracking-tight">
            Seu bebê continua acordando mesmo depois de você tentar de tudo?
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
            O Método As 5 Dimensões do Sono ajuda famílias a identificarem as causas dos despertares e construírem noites mais tranquilas, respeitando o desenvolvimento da criança, o vínculo familiar e a saúde mental dos pais.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
            Sem deixar chorar. Sem treinamentos rígidos. Sem fórmulas prontas.
          </p>

          {/* CTAs — Botões com largura padronizada */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://forms.gle/2LaybDMZUWx4W7wf9" target="_blank" variant="primary" size="default">
              Solicitar Avaliação
            </Button>
          </div>
        </div>

        {/* Coluna de imagem */}
        <div ref={imageRef} className="relative h-145 w-full hidden md:block fade-in-right">
          <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-ambient">
            <img
              src={heroImg}
              alt="Mãe e bebê dormindo tranquilamente"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-image-overlay" />
          </div>

          {/* Elemento decorativo */}
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-container rounded-full -z-10 blur-2xl opacity-60" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-container rounded-full -z-10 blur-xl opacity-40" />
        </div>
      </div>
    </section>
  )
}