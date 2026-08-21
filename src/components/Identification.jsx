import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Identification() {
	const headingRef = useScrollAnimation()
	const listRef = useScrollAnimation()
	const textRef = useScrollAnimation()

	return (
		<section className='section-padding bg-surface-container-low'>
			<div className='container-max'>
				<div ref={headingRef} className='text-center mb-12 fade-in-up'>
					<h2 className='font-display text-4xl md:text-5xl font-medium text-primary'>
						Talvez você se reconheça em alguma dessas situações...
					</h2>
				</div>

				<div
					ref={listRef}
					className='max-w-2xl mx-auto space-y-3 fade-in-up delay-200'
				>
					<ul className='list-none space-y-2'>
						<li className='flex items-start gap-3'>
							<span className='mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold'>
								✓
							</span>
							<span>Seu bebê acorda várias vezes durante a noite</span>
						</li>
						<li className='flex items-start gap-3'>
							<span className='mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold'>
								✓
							</span>
							<span>
								Só adormece mamando, ninando ou no colo.{' '}
								<span className='text-secondary'>e isso deixou de ser sustentável para vocês</span>
							</span>
						</li>
						<li className='flex items-start gap-3'>
							<span className='mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold'>
								✓
							</span>
							<span>Acorda sempre que é transferido ou rejeita o berço</span>
						</li>
						<li className='flex items-start gap-3'>
							<span className='mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold'>
								✓
							</span>
							<span>
								Demora muito para adormecer, brinca, protesta ou parece lutar
								contra o sono
							</span>
						</li>
						<li className='flex items-start gap-3'>
							<span className='mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold'>
								✓
							</span>
							<span>
								As sonecas são curtas, difíceis ou desorganizam o restante do
								dia
							</span>
						</li>
						<li className='flex items-start gap-3'>
							<span className='mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold'>
								✓
							</span>
							<span>Apenas um cuidador consegue fazê-lo dormir</span>
						</li>
						<li className='flex items-start gap-3'>
							<span className='mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold'>
								✓
							</span>
							<span>
								Você já fez ajustes de rotina e ambiente, mas sente que isso não
								resolveu o problema
							</span>
						</li>
						<li className='flex items-start gap-3'>
							<span className='mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold'>
								✓
							</span>
							<span>
								Você quer fazer mudanças, mas não sabe qual deve ser a primeira
								nem como reagir se houver resistência ou choro
							</span>
						</li>
						<li className='flex items-start gap-3'>
							<span className='mt-1 shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold'>
								✓
							</span>
							<span>
								Você está cansada de testar estratégias sem saber por que está
								fazendo cada uma
							</span>
						</li>
					</ul>
				</div>

				<div
					ref={textRef}
					className='text-center mt-10 max-w-2xl mx-auto leading-relaxed fade-in-up delay-400'
				>
					<p className='text-lg text-on-surface-variant'>
						Se você se identificou com mais de uma dessas situações, talvez o
						problema não esteja apenas na rotina ou na forma de adormecer.
					</p>
					<p className='text-lg text-on-surface-variant'>
						O sono infantil é influenciado por diversos fatores, e é exatamente
						por isso que criamos o Método As 5 Dimensões do Sono.
					</p>
				</div>
			</div>
		</section>
	)
}
