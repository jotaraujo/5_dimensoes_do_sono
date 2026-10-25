import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'
import {
	CHECKOUT_ACTIVE,
	CHECKOUT_LAUNCH,
	CHECKOUT_NOVEMBER,
	CHECKOUT_OFFICIAL,
} from '../constants/checkout'

/**
 * Course — Seção de oferta do curso.
 * Pode aparecer na página mais para o início (pré-oferta) ou no fechamento
 * da página, conforme o ciclo de vendas.
 *
 * Conteúdo segundo briefing item 13:
 * - Título: "As 5 Dimensões do Sono — Método Completo"
 * - Inclui: curso completo + módulos investigação, organização, decisão, intervenção,
 *   despertares, sonecas, vida real, consolidação + materiais de apoio + guia dos primeiros meses.
 * - Condição inaugural: R$97 de 30/10 a 06/11.
 * - Mensagem de urgência.
 * - Preço depois: A partir de 07/11 → R$197, preço oficial posterior: R$397.
 * - CTA: "Quero entrar no As 5 Dimensões do Sono".
 * - Observação: não apresentar como "de R$397 por R$97". Tratar como condição
 *   inaugural de lançamento.
 */
export default function Course() {
	const cardRef = useScrollAnimation()

	// Preço de lançamento
	const priceLaunch = 'https://pay.kiwify.com.br/g0SED7e'
	// Preço de novembro, quando ativo
	const priceNovember = 'https://pay.kiwify.com.br/lDy4qKE'
	// Preço oficial
	const priceOfficial = 'https://pay.kiwify.com.br/eSd350h'

	return (
		<section className='section-padding bg-surface-container' id='oferta'>
			<div className='container-max'>
				<div
					ref={cardRef}
					className='bg-white rounded-3xl p-8 md:p-12 shadow-ambient max-w-2xl mx-auto border-2 border-primary text-center fade-in-up delay-200'
				>
					{/* Título da oferta */}
					<h2 className='font-display text-3xl md:text-4xl font-medium text-secondary mb-2 leading-snug'>
						As 5 Dimensões do Sono — Método Completo
					</h2>
					<div className='flex items-center justify-center gap-3 mb-6'>
						<span className='h-px w-12 bg-primary/30' />
						<div className='w-2 h-2 rounded-full bg-primary/40' />
						<span className='h-px w-12 bg-primary/30' />
					</div>
					<h3 className='font-display text-xl md:text-2xl font-medium text-primary mb-8'>
						Seu bebê não precisa de mais uma tentativa aleatória.
					</h3>

					{/* Bloco de conteúdo com estilizações focadas em conversão */}
					<div className='space-y-6 text-center'>
						{/* Parágrafo 1: Problema / Empatia */}
						<p className='text-base md:text-lg text-on-surface-variant leading-relaxed max-w-xl mx-auto'>
							E você não precisa continuar escolhendo mudanças sem saber
							exatamente o que está tentando resolver. Aprenda a compreender o
							cenário, escolher prioridades e conduzir o próximo passo com mais
							clareza.
						</p>

						{/* Parágrafo 2: O que está incluso (Destaque Visual) */}
						<p className='text-sm md:text-base text-secondary font-medium bg-surface-container/60 p-4 rounded-xl border border-primary-container leading-relaxed shadow-inner max-w-xl mx-auto'>
							Curso completo + módulos de investigação, organização, decisão,
							intervenção, despertares, sonecas, vida real, consolidação +
							material de apoio + guia dos primeiros meses
						</p>

						{/* Bloco da Condição Inaugural / Lançamento */}
						<div className='bg-primary/5 p-5 rounded-2xl border-2 border-dashed border-primary/30 max-w-xl mx-auto space-y-2'>
							{/* Parágrafo 3: Preço de Lançamento */}
							<p className='text-2xl md:text-3xl font-bold text-primary tracking-tight'>
								R$97 de 30/10 até 06/11.
							</p>
							{/* Parágrafo 4: Urgência e Escassez */}
							<p className='text-sm md:text-base text-secondary font-semibold leading-snug'>
								Esse é o menor valor que esta versão do curso terá.
								Quando essa condição terminar, ela não volta.
							</p>
						</div>

						{/* Parágrafo 5: Ancoragem de Preço Futuro */}
						<p className='text-xs md:text-sm text-on-surface-variant/70 italic max-w-lg mx-auto'>
							A partir de 07/11, a oferta passa para R$ 197 durante o restante
							de novembro. Preço oficial posterior: R$ 397.
						</p>
					</div>

					{/* Botão de Ação */}
					<div className='flex justify-center mt-8 gap-3 uppercase'>
						<Button
							href={
								CHECKOUT_ACTIVE === priceLaunch
									? CHECKOUT_LAUNCH
									: CHECKOUT_OFFICIAL
										? CHECKOUT_NOVEMBER
										: CHECKOUT_OFFICIAL
							}
							target='_blank'
							variant='primary'
							size='default'
						>
							Quero começar agora
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
