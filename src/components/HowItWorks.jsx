import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'
import { CHECKOUT_LAUNCH } from '../constants/checkout'

/**
 * HowItWorks — Seção "Diferencial do método" (briefing item 6).
 *
 * Esta é uma das seções centrais da página. O diferencial não está
 * apenas em investigar profundamente, mas em ensinar o que fazer com
 * aquilo que encontrou.
 *
 * Fluxo: COMPREENDER → ORGANIZAR → DECIDIR → INTERVIR → CONSOLIDAR
 */
export default function HowItWorks() {
	const headingRef = useScrollAnimation()
	const stepsRef = useScrollAnimation()
	const buttonRef = useScrollAnimation()

	const steps = [
		{
			number: '1',
			title: 'COMPREENDER',
			description:
				'Observamos o sono e investigamos o caso pelas 5 Dimensões.',
		},
		{
			number: '2',
			title: 'ORGANIZAR',
			description:
				'Organizamos a base que pode estar dificultando o sono: ritmo, sonecas, ambiente, horários, necessidades físicas e previsibilidade.',
		},
		{
			number: '3',
			title: 'DECIDIR',
			description:
				'Definimos o que MANTER, REGULAR, MUDAR ou INVESTIGAR e qual deve ser o primeiro alvo.',
		},
		{
			number: '4',
			title: 'INTERVIR',
			description:
				'Conduzimos as mudanças necessárias de forma progressiva: associação, forma de adormecer, cuidador, berço, assistência, despertares ou sonecas, conforme o caso.',
		},
		{
			number: '5',
			title: 'CONSOLIDAR',
			description:
				'Avaliamos a resposta e decidimos quando manter, consolidar, avançar, reajustar, aumentar ajuda ou recuar uma etapa.',
		},
	]

	return (
		<section className='section-padding bg-background' id='como-funciona'>
			<div className='container-max'>
				<div ref={headingRef} className='text-center mb-16 fade-in-up'>
					<h2 className='font-display text-4xl md:text-5xl font-medium text-secondary'>
						Entender é apenas o começo.
					</h2>
					<p className='text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mt-4'>
						O diferencial do As 5 Dimensões do Sono não está apenas em
						investigar profundamente. Está em ensinar você o que fazer com
						aquilo que encontrou.
					</p>
				</div>

				<div
					ref={stepsRef}
				 className='space-y-6 max-w-3xl mx-auto fade-in-up delay-200'
				>
					{steps.map((step, index) => (
						<div
							key={step.number}
							className='flex items-start gap-6 p-6 bg-white rounded-2xl shadow-ambient border border-primary-container hover:border-primary transition-colors duration-300'
						>
							{/* Número do passo */}
							<div className='shrink-0 flex items-center justify-center bg-primary text-white rounded-full font-display font-bold text-xl w-12 h-12'>
								{step.number}
							</div>

							{/* Conteúdo */}
							<div className='flex-1'>
								<h3 className='font-display text-xl font-medium text-primary mb-2'>
									{step.title}
								</h3>
								<p className='text-on-surface-variant leading-relaxed'>
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<div ref={buttonRef} className='text-center mt-10 fade-in-up delay-400'>
					<Button
						href={CHECKOUT_LAUNCH}
						target='_blank'
						variant='primary'
						size='default'
					>
						Quero aprender o método
					</Button>
				</div>
			</div>
		</section>
	)
}