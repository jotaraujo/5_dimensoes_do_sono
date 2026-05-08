import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

import heroImg from '../assets/hero.jpeg'

export default function Hero() {
  const textRef = useScrollAnimation()
  const imageRef = useScrollAnimation()
  const badgeRef = useScrollAnimation()

  return (
    <section className="bg-surface-container-low min-h-[90vh] flex items-center pt-8 md:pt-0">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">

        {/* Coluna de texto */}
        <div ref={textRef} className="flex flex-col gap-6 relative z-10 fade-in-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-primary-container w-fit">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              Método baseado em Neurociência
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary leading-tight tracking-tight">
            Descubra como{' '}
            <span className="text-secondary">descomplicar</span>{' '}
            o sono do seu bebê...
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
            E resgatar as noites de paz da sua família. Sem choro e sem treinamentos rígidos.
          </p>
          <p className='text-lg text-on-surface-variant leading-relaxed max-w-lg'>
            Um guia gentil, prático e embasado cientificamente para noites mais tranquilas, respeitando o desenvolvimento do seu filho e a sua saúde mental.
          </p>

          {/* CTA principal */}
          <div className="pt-2">
            <Button href="https://pay.kiwify.com.br/5nOEc6c" target="_blank" variant='primary' className="w-full md:w-auto">
              QUERO VOLTAR A DORMIR EM PAZ
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
