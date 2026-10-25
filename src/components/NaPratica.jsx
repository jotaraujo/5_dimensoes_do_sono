import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'
import { CHECKOUT_LAUNCH } from '../constants/checkout'

const items = [
	{
		name: 'Mamar para dormir',
		description:
			'Entender quando manter e quando ampliar outras formas de conforto.',
	},
	{
		name: 'Colo e movimento',
		description:
			'Reduzir a dependência de movimento ou colo quando essa mudança fizer sentido.',
	},
	{
		name: 'Participação de outro cuidador',
		description: 'Ampliar quem consegue acolher e conduzir o sono.',
	},
	{
		name: 'Berço e transferências',
		description:
			'Trabalhar a adaptação ao espaço de sono sem transformar toda tentativa em batalha.',
	},
	{
		name: 'Redução de assistência',
		description:
			'Diminuir gradualmente a quantidade de ajuda conforme o bebê estiver pronto.',
	},
	{
		name: 'Despertares noturnos',
		description:
			'Entender o que observar e como responder em diferentes tipos de despertar.',
	},
	{
		name: 'Sonecas',
		description: 'Decidir quando intervir, prolongar, salvar ou reorganizar.',
	},
	{
		name: 'Choro e resistência',
		description:
			'Saber quando observar, oferecer mais suporte, reajustar ou interromper uma tentativa.',
	},
	{
		name: 'Pioras e regressões',
		description:
			'Reavaliar o plano quando algo que estava funcionando deixa de funcionar.',
	},
	{
		name: 'Doenças e desenvolvimento',
		description:
			'Saber quando aumentar temporariamente o suporte e quando retomar o processo.',
	},
	{
		name: 'Viagens e mudanças de rotina',
		description:
			'Adaptar o método sem precisar abandonar tudo o que já foi construído.',
	},
	{
		name: 'Creche e transições',
		description:
			'Reorganizar o sono quando horários, cuidadores ou a rotina da família mudam.',
	},
]

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
					Na prática, você vai aprender a lidar com situações como…
				</h2>

				{/* Lista de problemas concretos que a mãe reconhece */}
				<div
					ref={listRef}
					className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto my-10 fade-in-up delay-400'
				>
					{items.map((item, i) => (
						<div
							key={i}
							className='bg-white rounded-2xl p-5 shadow-ambient border border-primary-container hover:border-primary transition-all duration-300'
						>
							<h2 className='text-primary leading-relaxed text-base md:text-xl block'>
								{item.name}
							</h2>
							<p className='text-sm text-on-surface-variant/70 leading-relaxed'>
								{item.description}
							</p>
						</div>
					))}
				</div>

				{/* Texto de fechamento */}
				<div
					ref={useScrollAnimation()}
					className='text-center mt-12 max-w-2xl mx-auto fade-in-up delay-600'
				>
					<p className='text-base md:text-lg text-secondary leading-relaxed font-medium'>
						Nem todos esses pontos precisarão ser modificados no seu bebê.
					</p>
					<p className='text-base md:text-lg text-secondary leading-relaxed font-medium'>
						O curso existe justamente para ajudar você a descobrir o que precisa
						permanecer, o que precisa ser organizado e o que realmente deve
						entrar no plano.
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
