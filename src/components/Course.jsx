import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'
import { CHECKOUT_ACTIVE, CHECKOUT_LAUNCH, CHECKOUT_NOVEMBER, CHECKOUT_OFFICIAL } from '../constants/checkout'

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
					<h2 className='font-display text-3xl font-medium text-primary mb-8'>
						Seu bebê não precisa de mais uma tentativa aleatória. 
					</h2>

					<div className='text-lg text-on-surface-variant space-y-4 leading-relaxed'>
						<p>
							E você não precisa continuar escolhendo mudanças sem saber exatamente o que está tentando resolver. Aprenda a compreender o cenário, escolher prioridades e conduzir o próximo passo com mais clareza.
						</p>
						<h3 className='text-xl font-medium text-secondary'>
							As 5 Dimensões do Sono — Método Completo
						</h3>
						<p className='text-sm md:text-base text-primary font-medium italic leading-relaxed'>
							R$97 até 06/11.
						</p>
					</div>
					{/* CTA principal */}
					<div className='flex justify-center mt-6 gap-3 uppercase'>
						<Button
							href={CHECKOUT_ACTIVE === priceLaunch ? CHECKOUT_LAUNCH : CHECKOUT_OFFICIAL ? CHECKOUT_NOVEMBER : CHECKOUT_OFFICIAL}
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