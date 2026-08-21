import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

/**
 * PathSelector — Seção de bifurcação "Qual formato faz sentido para você?".
 *
 * Posicionada ANTES de <Mentoria /> e <Course /> para funcionar como
 * ponto de decisão: a visitante escolhe a opção prioritária e rola para
 * a seção detalhada correspondente.
 *
 * Hierarquia visual: Mentoria Individual (card maior, com selo
 * "Acompanhamento completo") → Curso Online (card secundário).
 */
export default function PathSelector() {
	const headingRef = useScrollAnimation()
	const mentoriaRef = useScrollAnimation()
	const cursoRef = useScrollAnimation()

	const mentoriaBullets = [
		'Quer uma análise individual do sono do seu bebê;',
		'Precisa de um plano personalizado;',
		'Quer acompanhamento durante a implementação;',
		'Já tentou mudanças e não sabe por que não funcionaram;',
		'Deseja ajuda para interpretar a resposta do bebê e ajustar o plano.',
	]

	return (
		<section className='section-padding bg-background' id='caminhos'>
			<div className='container-max'>
				{/* Cabeçalho da seção */}
				<div ref={headingRef} className='text-center mb-10 lg:mb-14 fade-in-up'>
					<span className='inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary-container text-primary mb-4'>
						Escolha o seu caminho
					</span>
					<h2 className='font-display text-4xl md:text-5xl font-medium text-primary leading-tight text-balance max-w-3xl mx-auto'>
						Qual formato faz sentido para você?
					</h2>
					<p className='text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty mt-4 max-w-2xl mx-auto'>
						Dois caminhos para apoiar a família — escolha o que combina com o
						momento que vocês estão vivendo agora.
					</p>
				</div>

				{/* Grid de bifurcação: Mentoria dominante (esquerda) + Curso (direita) */}
				<div className='grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8 items-stretch'>
					{/* CARD MENTORIA — destaque principal */}
					<article
						ref={mentoriaRef}
						className='bg-white rounded-3xl p-8 md:p-10 shadow-ambient border-2 border-secondary ring-1 ring-secondary/10 flex flex-col gap-6 fade-in-up relative'
					>
						{/* Selo "Acompanhamento completo" */}
						<div className='absolute -top-3 left-8 bg-secondary text-on-secondary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md'>
							★ Acompanhamento completo
						</div>

						{/* Cabeçalho do card */}
						<div className='pt-2'>
							<p className='text-xs font-bold uppercase tracking-widest text-secondary mb-2'>
								Opção 1
							</p>
							<h3 className='font-display text-2xl md:text-3xl font-semibold text-on-surface leading-tight'>
								Mentoria Individual
							</h3>
							<p className='text-sm md:text-base text-on-surface-variant mt-2 leading-relaxed'>
								Para quem quer um plano feito para o bebê e acompanhamento
								próximo durante toda a mudança.
							</p>
						</div>

						{/* Bullets de "é para você se..." */}
						<ul className='flex flex-col gap-2.5 flex-1'>
							{mentoriaBullets.map((item) => (
								<li
									key={item}
									className='flex items-start gap-3 text-on-surface-variant p-3 rounded-xl bg-secondary-container/30'
								>
									<span className='mt-0.5 shrink-0 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-secondary text-sm font-bold'>
										✓
									</span>
									<span className='leading-relaxed text-base'>{item}</span>
								</li>
							))}
						</ul>

						{/* CTA */}
						<div className='pt-2 flex flex-col items-center gap-2 border-t border-secondary/20'>
							<Button
								href='https://wa.me/5521994924368?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20a%20Mentoria%20de%20Sono%20Infantil.'
								target='_blank'
								variant='secondary'
								size='default'
								className='w-full whitespace-normal text-center leading-snug px-6 py-4 text-base md:text-lg font-semibold'
							>
								Quero conhecer a Mentoria
							</Button>
						</div>
					</article>

					{/* CARD CURSO — secundário */}
					<article
						ref={cursoRef}
						className='bg-white rounded-3xl p-8 md:p-10 shadow-ambient border-2 border-primary flex flex-col gap-6 fade-in-up'
					>
						{/* Cabeçalho do card */}
						<div>
							<p className='text-xs font-bold uppercase tracking-widest text-primary mb-2'>
								Opção 2
							</p>
							<h3 className='font-display text-2xl md:text-3xl font-semibold text-on-surface leading-tight'>
								Curso Online
							</h3>
							<p className='text-sm md:text-base text-on-surface-variant mt-2 leading-relaxed text-pretty'>
								Para quem quer aprender o Método 5 Dimensões e aplicar as
								estratégias com maior autonomia, no próprio ritmo.
							</p>
						</div>

						{/* Aviso de atualização */}
						<div className='flex-1 flex flex-col gap-4 justify-center'>
							<div className='bg-primary-container/40 border border-primary/20 rounded-2xl p-5'>
								<p className='text-sm md:text-base text-primary font-medium italic leading-relaxed'>
									Nova versão do curso em atualização. Entre em contato para
									saber sobre a próxima liberação.
								</p>
							</div>
						</div>

						{/* CTA secundário */}
						<div className='pt-2 flex flex-col items-center gap-2 border-t border-primary/10'>
							<Button
								href='https://wa.me/5521994924368?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20curso%20As%205%20Dimens%C3%B5es%20do%20Sono.'
								target='_blank'
								variant='primary'
								size='default'
								className='w-full whitespace-normal text-center leading-snug px-6 py-4 text-base md:text-lg'
							>
								Quero conhecer o Curso
							</Button>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}
