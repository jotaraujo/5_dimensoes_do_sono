import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'
import heroImg from '../assets/hero.jpeg'
import { CHECKOUT_ACTIVE, PRICE_ACTIVE, DATE_ACTIVE } from '../constants/checkout'

/**
 * Hero — primeira dobra da landing page de venda do curso.
 *
 * Objetivo (segundo briefing): deixar claro em poucos segundos o problema,
 * o produto (curso), o diferencial e a ação desejada.
 *
 * O curso é o produto principal; a Mentoria foi removida como opção comercial.
 *
 * O preço ativo (PRICE_ACTIVE) e a data de fim (DATE_ACTIVE) são
 * derivados automaticamente em src/constants/checkout.js com base na data
 * corrente. Quando CHECKOUT_ACTIVE for CHECKOUT_OFFICIAL, DATE_ACTIVE
 * será undefined e o texto de data não é exibido.
 */
export default function Hero() {
	const textRef = useScrollAnimation()
	const imageRef = useScrollAnimation()

	// Formata a data no formato DD/MM (se existir)
	const formatDate = (dateStr) => {
		if (!dateStr) return null
		const [, month, day] = dateStr.split('-')
		return `${day}/${month}`
	}

	// Texto do preço ativo conforme o checkout selecionado
	const priceText = (() => {
		if (CHECKOUT_ACTIVE === 'https://pay.kiwify.com.br/g0SED7e') {
			return `Preço inaugural: R$ ${PRICE_ACTIVE} — até ${formatDate(DATE_ACTIVE)}`
		}
		if (CHECKOUT_ACTIVE === 'https://pay.kiwify.com.br/lDy4qKE') {
			return `Promoção de Novembro: R$ ${PRICE_ACTIVE} — até ${formatDate(DATE_ACTIVE)}`
		}
		return `R$ ${PRICE_ACTIVE}`
	})()

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
						muita ajuda para dormir — e você já não sabe mais o que mudar?
					</h1>

					{/* Corpo do texto */}
					<div className='flex flex-col gap-4 max-w-xl'>
						<p className='text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty'>
							O As 5 Dimensões do Sono é um curso completo para ajudar você a
							compreender o que está acontecendo, identificar o que realmente
							precisa mudar e conduzir essas mudanças com clareza, passo a passo.
						</p>
						<p className='text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty'>
							Você vai aprender a olhar para o sono através de Essência, Corpo,
							Vínculo, Ambiente e Rotina e transformar essa investigação em
							decisões práticas sobre rotina, associações, berço, despertares,
							sonecas e formas de adormecer.
						</p>
					</div>

					{/* Linha destaque — fluxo do método (arquitetura do curso) */}
					<div className='flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary'>
						<span className='bg-secondary-container text-secondary rounded-full px-3 py-1.5'>
							COMPREENDER
						</span>
						<span className='text-secondary/40'>→</span>
						<span className='bg-secondary-container text-secondary rounded-full px-3 py-1.5'>
							ORGANIZAR
						</span>
						<span className='text-secondary/40'>→</span>
						<span className='bg-secondary-container text-secondary rounded-full px-3 py-1.5'>
							DECIDIR
						</span>
						<span className='text-secondary/40'>→</span>
						<span className='bg-secondary-container text-secondary rounded-full px-3 py-1.5'>
							INTERVIR
						</span>
						<span className='text-secondary/40'>→</span>
						<span className='bg-secondary-container text-secondary rounded-full px-3 py-1.5'>
							CONSOLIDAR
						</span>
					</div>

					{/* CTA + preço ativo */}
					<div className='pt-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
						<div className='inline-flex items-center gap-2 text-sm font-semibold text-secondary bg-secondary-container/60 rounded-full px-4 py-1.5'>
							<span
								className='w-2 h-2 rounded-full bg-secondary animate-pulse'
								aria-hidden='true'
							/>
							{priceText}
						</div>
						<Button
							href={CHECKOUT_ACTIVE}
							target='_blank'
							variant='primary'
							size='default'
							className='w-full sm:w-auto whitespace-normal text-center leading-snug px-6 py-4 text-base md:text-lg'
						>
							Quero conhecer o curso
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
							alt='Capa do curso As 5 Dimensões do Sono'
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