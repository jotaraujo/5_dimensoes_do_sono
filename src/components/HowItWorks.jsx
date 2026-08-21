import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

export default function HowItWorks() {
	const headingRef = useScrollAnimation()
	const stepsRef = useScrollAnimation()
	const buttonRef = useScrollAnimation()

	const steps = [
		{
			number: '1',
			title: 'COMPREENDER',
			description: 'Observamos o sono e investigamos o caso pelas 5 Dimensões.',
		},
		{
			number: '2',
			title: 'ORGANIZAR',
			description:
				'Corrigimos a base que estiver dificultando o sono: ritmo, sonecas, ambiente, horário, necessidades físicas e previsibilidade.',
		},
		{
			number: '3',
			title: ' DECIDIR',
			description:
				'Definimos o que pode permanecer, o que precisa ser regulado e qual é a primeira mudança necessária.',
		},
		{
			number: '4',
			title: ' INTERVIR',
			description:
				'Conduzimos a mudança de forma progressiva - associação, forma de adormecer, cuidador, berço, assistência, despertares ou sonecas, conforme o caso.',
		},
		{
			number: '5',
			title: 'CONSOLIDAR',
			description:
				'Avaliamos a resposta, ajustamos a quantidade de suporte e só avançamos quando a etapa anterior está suficientemente estabelecida.',
		},
	]

	return (
		<section className='section-padding bg-background' id='como-funciona'>
			<div className='container-max'>
				<div ref={headingRef} className='text-center mb-16 fade-in-up'>
					<h2 className='font-display text-4xl md:text-5xl font-medium text-secondary'>
						COMO FUNCIONA O MÉTODO AS 5 DIMENSÕES DO SONO
					</h2>
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
							{/* Número do passo - aumentado para melhor hierarquia visual */}
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
						href='https://forms.gle/2LaybDMZUWx4W7wf9'
						target='_blank'
						variant='outline'
						size='default'
					>
						Solicitar Avaliação
					</Button>
				</div>
			</div>
		</section>
	)
}