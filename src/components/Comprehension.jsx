import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'
import { CHECKOUT_LAUNCH } from '../constants/checkout'

/**
 * Comprehension — Seção de posicionamento "Compreender não significa
 * deixar tudo como está".
 *
 * Mantida do original, mas com CTA atualizado para o curso (em vez de
 * avaliação individual). Texto ajustado segundo briefing item 4.
 */
export default function Comprehension() {
	const textRef = useScrollAnimation()

	return (
		<section className='section-padding bg-background'>
			<div className='container-max max-w-3xl mx-auto flex flex-col items-center text-center gap-6'>
				{/* Texto centralizado */}
				<div ref={textRef} className='flex flex-col gap-6 fade-in-up'>
					<h2 className='font-display text-4xl md:text-5xl font-medium text-primary leading-tight'>
						Compreender o bebê não significa deixar tudo como está.
					</h2>

					<div className='text-lg text-on-surface-variant space-y-4 leading-relaxed'>
						<p>
							Nem toda associação precisa ser retirada. Nem todo despertar
							precisa ser "corrigido". Mas também não é necessário manter
							indefinidamente uma dinâmica que deixou de funcionar para a
							família.
						</p>
						<p>
							Meu trabalho é entender o bebê e o contexto primeiro — e, a partir
							disso, decidir quando faz sentido manter, regular ou mudar. Quando
							a mudança é necessária, ela é conduzida de forma progressiva,
							observando a resposta do bebê e ajustando a quantidade de suporte.
						</p>
					</div>

					{/* Citação em destaque */}
					<blockquote className='bg-secondary-container p-6 rounded-2xl border-l-4 border-secondary mt-2 max-w-2xl mx-auto'>
						<p className='text-on-secondary-container italic text-lg leading-relaxed'>
							Eu não sou contra ensinar um bebê a dormir de outra forma. Sou
							contra aplicar uma técnica sem antes entender o bebê, o contexto e
							a realidade da família.
						</p>
					</blockquote>

					{/* Transição para o método */}
					<p className='text-base text-on-surface-variant leading-relaxed'>
						Nem todo despertar tem a mesma causa. Por isso desenvolvi o Método
						As 5 Dimensões do Sono para identificar o que realmente está
						impactando o sono da criança.
					</p>
					<p className='text-base text-on-surface-variant leading-relaxed'>
						E é esse raciocínio que você aprende no curso.
					</p>

					{/* CTA atualizado para o curso */}
					<div className='flex justify-center mt-4'>
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
			</div>
		</section>
	)
}
