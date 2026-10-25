import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'
import { CHECKOUT_LAUNCH } from '../constants/checkout'

/**
 * SupportMaterials — Seção 9: Materiais de apoio.
 *
 * Apresenta em colunas os materiais complementares do curso.
 * Cada material possui nome e lista de temas estruturada (pronta para preenchimento).
 */
const materials = [
	{
		title: 'Caderno de Jornada',
		subtitle: 'Seu espaço de aplicação do método.',
		description:
			'Registre a linha de base, organize as 5 Dimensões, defina prioridades, acompanhe as mudanças e compare o antes e depois.',
		themes: [
			'Linha de base de 3 dias',
			'Raio-X das 5 Dimensões',
			'Definição de prioridades',
			'Plano de intervenção',
			'Registro de evolução',
			'Decisões para avançar ou reajustar',
		],
	},
	{
		title: 'Guia de Referência Rápida',
		subtitle: 'As 5 Dimensões sempre à mão.',
		description:
			'Um material de consulta para ajudar você a identificar o que observar em Essência, Corpo, Vínculo, Ambiente e Rotina — e entender quando um achado realmente muda uma decisão.',
		themes: [
			'O que observar em cada dimensão',
			'Sinais que merecem atenção',
			'Como cada dimensão influencia o próximo passo',
			'Critérios para manter, regular, mudar ou investigar',
		],
	},
	{
		title: 'Guia Prático de Sono e Rotina',
		subtitle:
			'Entenda janelas, sonecas e ritmo circadiano com clareza e flexibilidade.',
		description:
			'Orientações práticas para organizar o ritmo diário e as sonecas.',
		themes: [
			'Início do dia como âncora',
			'Janelas de sono como referência',
			'Sonecas e transições',
			'Soneca ponte',
			'Ritual noturno',
			'Como ajustar depois de um dia difícil',
		],
	},
	{
		title: 'Mapa de Intervenção - Próximo Passo',
		subtitle: 'Para saber o que fazer depois de entender o problema.',
		description:
			'Uma ferramenta prática para identificar o nível atual de assistência e escolher o próximo passo sem mudar tudo de uma vez.',
		themes: [
			'Escada de assistência',
			'Próximo passo para cada cenário',
			'Como responder à resistência e ao choro',
			'Quando aumentar ajuda',
			'Quando avançar',
			'Quando reajustar ou recuar uma etapa',
		],
	},
	{
		title: 'Guia Especial — Sono nos Primeiros Meses',
		subtitle: 'Um cuidado diferente para uma fase diferente.',
		description:
			'Um guia completo para o período do nascimento aos três meses, com expectativas realistas, organização possível e orientações de segurança.',
		themes: [
			'O que esperar do sono nos primeiros meses',
			'Mamadas, contato e regulação',
			'Dia e noite sem rotina rígida',
			'Sono seguro',
			'Swaddle e recursos de conforto',
			'Quando procurar ajuda',
			'Passo a passo desde a chegada da maternidade',
		],
	},
]

export default function SupportMaterials() {
	const headingRef = useScrollAnimation()
	const gridRef = useScrollAnimation()

	return (
		<section className='section-padding bg-background' id='materiais-de-apoio'>
			<div className='container-max'>
				<div ref={headingRef} className='text-center mb-16 fade-in-up'>
					<h2 className='font-display text-3xl md:text-4xl font-medium text-secondary mb-4'>
						Mais do que assistir: materiais para aplicar o método na vida real
					</h2>
					<p className='text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed'>
						Você recebe ferramentas práticas para observar o sono, organizar
						informações, tomar decisões e acompanhar a evolução do seu bebê ao
						longo do processo.
					</p>
				</div>

				{/* Grid em colunas responsivo (1 no mobile, 2 no tablet, 3 no desktop, abrindo bem os 5 materiais) */}
				<div
					ref={gridRef}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto fade-in-up delay-200'
				>
					{materials.map((mat, index) => (
						<div
							key={index}
							className='bg-white rounded-2xl p-6 shadow-ambient border border-primary-container hover:border-primary transition-all duration-300 flex flex-col justify-between'
						>
							<div>
								<span className='inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary-container text-secondary mb-3'>
									{mat.subtitle}
								</span>
								<h3 className='font-display text-xl font-medium text-primary mb-2'>
									{mat.title}
								</h3>
								<p className='text-on-surface-variant text-sm leading-relaxed mb-6'>
									{mat.description}
								</p>

								{/* Lista de temas */}
								<div className='border-t border-primary-container pt-4 mb-4'>
									<span className='text-xs font-semibold uppercase tracking-wider text-secondary block mb-2'>
										Você vai encontrar:
									</span>
									<ul className='space-y-2 text-sm text-on-surface-variant'>
										{mat.themes.map((theme, i) => (
											<li key={i} className='flex items-start gap-2'>
												<span className='text-primary font-bold mt-0.5'>•</span>
												<span>{theme}</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className='pt-2 border-t border-slate-100' />
						</div>
					))}
				</div>

				<div className='text-center mt-12'>
					<span className='text-sm text-on-surface-variant/70'>
						Todos os materiais estão incluídos no As 5 Dimensões do Sono —
						Método Completo.
					</span>
				</div>

				{/* CTA */}
				<div className='text-center mt-12'>
					<Button
						href={CHECKOUT_LAUNCH}
						target='_blank'
						variant='primary'
						size='default'
					>
						Quero garantir meu acesso
					</Button>
				</div>
			</div>
		</section>
	)
}
