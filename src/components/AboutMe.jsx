import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Import estático — garante que o Vite processa e copia o arquivo corretamente
import aboutImg from '../assets/hero_3.jpeg'

export default function AboutMe() {
	const imageRef = useScrollAnimation()
	const textRef = useScrollAnimation()
	const pinsRef = useScrollAnimation()

	const credentials = [
		{
			role: 'Especialista Integrativa do Sono Infantil',
			institution: 'Instituto Familly Welness',
			hours: '179 horas',
		},
		{
			role: 'Consultora do Sono',
			institution: 'Bebê Dorminhoco',
			hours: '100 horas',
		},
		{
			role: 'Educadora Parental',
			institution: 'Instituto Familly Welness',
			hours: '55 horas',
		},
	]

	return (
		<section className='section-padding bg-background'>
			<div className='container-max grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
				{/* Foto */}
				<div ref={imageRef} className='relative fade-in-left'>
					{/* Círculo decorativo de fundo */}
					<div className='absolute -bottom-8 -left-8 w-3/4 h-3/4 bg-primary-container rounded-full -z-10 hidden md:block' />

					<div className='relative z-10 rounded-[2.5rem] overflow-hidden shadow-ambient aspect-3/4 max-w-md mx-auto md:mr-auto'>
						<img
							src={aboutImg}
							alt='Fernanda, especialista em sono infantil'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>

				{/* Texto */}
				<div ref={textRef} className='flex flex-col gap-6 fade-in-right'>
					<h2 className='font-display text-4xl md:text-5xl font-medium text-primary'>
						Muito prazer, eu sou Fernanda Maia
					</h2>

					<div className='text-lg text-on-surface-variant space-y-4 leading-relaxed'>
						<p>
							Sou Especialista Integrativa do Sono, criadora do Método As 5
							Dimensões do Sono e mãe de três filhos. Meu trabalho nasceu da
							vontade de compreender o sono infantil para além de fórmulas
							prontas.
						</p>
						<p>
							Meu trabalho une investigação e intervenção. Eu avalio o sono
							considerando Essência, Corpo, Vínculo, Ambiente e Rotina e, a
							partir dessa leitura, construo estratégias individualizadas para
							aquilo que realmente precisa ser transformado.
						</p>
						<p>
							Isso pode incluir reorganizar a rotina, ampliar formas de
							conforto, mudar associações de sono, incluir outro cuidador,
							adaptar ao berço, reduzir ajuda de forma progressiva, trabalhar
							despertares e sonecas - sempre respeitando as necessidades reais
							do bebê e os limites da família.
						</p>
						<p>
							Minha proposta não é encaixar bebês em uma técnica. É ajudar
							famílias a saírem da tentativa e erro e terem clareza sobre o que
							fazer, por que fazer e quando avançar.
						</p>
					</div>

					{/* Pins de formação */}
					<div
						ref={pinsRef}
						className='grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-primary/15 fade-in-up'
					>
						{credentials.map((cred) => (
							<div
								key={cred.role}
								className='flex flex-col items-center text-center gap-2 bg-primary-container/60 border border-primary/15 rounded-2xl p-4 shadow-sm h-full'
							>
								<span className='shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary shadow-sm'>
									{/* Ícone de diploma / formação */}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-5 h-5'
										aria-hidden='true'
									>
										<path d='M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm0 13.18L4.21 12 12 7.82 19.79 12 12 16.18zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z' />
									</svg>
								</span>
								<div className='flex flex-col gap-0.5 min-w-0'>
									<span className='font-display text-sm md:text-base font-medium text-primary leading-tight'>
										{cred.role}
									</span>
									<span className='text-xs md:text-sm text-on-surface-variant leading-snug'>
										{cred.institution} · {cred.hours}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
