import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'
import { CHECKOUT_LAUNCH } from '../constants/checkout'

/**
 * NaPratica — Seção que descreve, em termos concretos e práticos,
 * o que o curso ensina (a transição do conteúdo do curso para problemas
 * que a mãe reconhece).
 *
 * De acordo com o briefing item 8, esta seção traduz os módulos em
 * problemas concretos que a mãe reconhece.
 */
export default function NaPratica() {
	const headingRef = useScrollAnimation()
	const listRef = useScrollAnimation()

	return (
		<section className='section-padding bg-surface-container' id='na-pratica'>
			<div className='container-max'>
				<h2
					ref={headingRef}
					className='font-display text-4xl md:text-5xl font-medium text-secondary mb-4 fade-in-up'
				>
					Na prática, você vai aprender...
				</h2>
				<p className='text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10 fade-in-up delay-200'>
					Mamar para dormir é colo é movimento é participação de outro cuidador
					é berço é redução de assistência é despertares é sonecas é choro e
					resistência a pioras é doença é viagens é creche é transições.
				</p>

				{/* Lista de problemas concretos que a mãe reconhece */}
				<div
					ref={listRef}
					className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto fade-in-up delay-400'
				>
					{[
						'Mamãe para dormir é colo',
						'Movimento (balanço)',
						'Participação de outro cuidador',
						'Berço',
						'Redução de assistência',
						'Despertares',
						'Sonecas',
						'Choro e resistência a pioras',
						'Doença',
						'Viagens',
						'Creche',
						'Transições',
					].map((item, i) => (
						<div
							key={i}
							className='bg-white rounded-2xl p-5 shadow-ambient border border-primary-container hover:border-primary transition-all duration-300'
						>
							<span className='text-on-surface-variant leading-relaxed text-base md:text-lg block'>
								{item}
							</span>
						</div>
					))}
				</div>

				{/* Texto de fechamento */}
				<div
					ref={useScrollAnimation()}
					className='text-center mt-12 max-w-2xl mx-auto fade-in-up delay-600'
				>
					<p className='text-base md:text-lg text-secondary leading-relaxed font-medium'>
						Nem todos esses pontos precisarão ser modificados no seu bebê. O
						curso existe justamente para ajudar você a descobrir quais realmente
						precisam entrar no plano.
					</p>

					{/* CTA para o curso */}
					<div className='mt-8'>
						<Button
							href={CHECKOUT_LAUNCH}
							target='_blank'
							variant='outline'
							size='default'
						>
							Quero aprender o método
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
