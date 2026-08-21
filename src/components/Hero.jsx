import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'
import heroImg from '../assets/hero.jpeg'

export default function Hero() {
	const textRef = useScrollAnimation()
	const imageRef = useScrollAnimation()

	return (
		<section className='bg-surface-container-low min-h-[85vh] flex items-center pt-8 md:pt-0'>
			<div className='container-max grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center py-20'>
				{/* Coluna de texto */}
				<div
					ref={textRef}
					className='flex flex-col gap-5 relative z-10 fade-in-left'
				>
					{/* Headline */}
					<h1 className='font-display text-4xl md:text-4xl lg:text-[2.5rem] font-semibold text-primary leading-[1.15] tracking-tight text-balance'>
						Seu bebê continua acordando, resistindo ao sono ou dependendo de
						muita ajuda para dormir e você já não sabe mais o que mudar?
					</h1>

					{/* Corpo do texto */}
					<div className='flex flex-col gap-4 max-w-xl'>
						<p className='text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty'>
							O Método 5 Dimensões do Sono investiga o que sustenta a
							dificuldade do seu bebê e transforma essa leitura em um plano de
							ação individual: o que manter, o que organizar e o que deve ser
							mudado para construir um sono mais sustentável para toda a
							família.
						</p>
						<p className='text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty'>
							Na Mentoria, eu acompanho a implementação dessas mudanças passo a
							passo - incluindo rotina, associações de sono, participação dos
							cuidadores, adaptação ao berço, redução de ajuda, despertares e
							sonecas, quando esses forem os pontos que o caso precisa.
						</p>
						<p className='text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty font-medium'>
							Sem técnica pronta. Sem promessas irreais. Com investigação,
							estratégia e direção.
						</p>
					</div>

					{/* CTA — Botão com largura adaptada ao novo texto */}
					<div className='pt-3 flex flex-col sm:flex-row gap-4'>
						<Button
							href='https://wa.me/5521994924368?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20a%20Mentoria%20de%20Sono%20Infantil.'
							target='_blank'
							variant='primary'
							size='default'
							className='w-full sm:w-auto whitespace-normal text-center leading-snug px-6 py-4 text-base md:text-lg'
						>
							Quero saber se a Mentoria é para minha família
						</Button>
					</div>
				</div>

				{/* Coluna de imagem */}
				<div
					ref={imageRef}
					className='relative h-125 md:h-145 w-full hidden md:block fade-in-right'
				>
					<div className='relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-ambient'>
						<img
							src={heroImg}
							alt='Mãe e bebê dormindo tranquilamente'
							className='w-full h-full object-cover'
						/>
						<div className='absolute inset-0 hero-image-overlay' />
					</div>
					{/* Elementos decorativos */}
					<div className='absolute -bottom-6 -left-6 w-48 h-48 bg-primary-container rounded-full -z-10 blur-2xl opacity-60' />
					<div className='absolute -top-6 -right-6 w-32 h-32 bg-primary-container rounded-full -z-10 blur-xl opacity-40' />
				</div>
			</div>
		</section>
	)
}
