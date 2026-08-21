import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

const faqs = [
	{
		question: 'Para qual idade o método funciona?',
		answer:
			'O Método As 5 Dimensões do Sono pode ser aplicado desde o nascimento até os 3 anos de idade. Tanto no curso quanto na mentoria, as orientações respeitam as características neurológicas, emocionais e físicas de cada fase do desenvolvimento infantil.',
	},
	{
		question: 'Meu bebê só dorme mamando. Você vai mandar retirar o peito?',
		answer:
			'Não automaticamente. Primeiro avaliamos se essa forma de adormecer é realmente um problema para a família e quais outros fatores participam do sono. Quando a família deseja mudar, trabalhamos de forma progressiva, ampliando outras formas de conforto e preservando mamadas necessárias.',
	},
	{
		question: 'Qual a diferença entre Curso e Mentoria?',
		answer:
			'O Curso As 5 Dimensões do Sono foi criado para famílias que desejam aplicar o método com autonomia, seguindo um passo a passo completo. Já a Mentoria Individual é indicada para quem busca um acompanhamento personalizado, com análise detalhada, diagnóstico das causas dos despertares e plano de ação adaptado à realidade da família.',
	},
	{
		question: 'Meu objetivo é o berço. A Mentoria trabalha isso?',
		answer:
			'Sim, quando esse é um objetivo da família e o caso está preparado para essa etapa. Muitas vezes, antes do berço, precisamos organizar a base ou construir uma nova forma de adormecer. Depois, levamos o processo para o espaço de sono com assistência e reduzimos a ajuda progressivamente.',
	},
	{
		question: 'Em quanto tempo posso ver resultados?',
		answer:
			'Não existe um prazo único para todos os bebês. Algumas mudanças aparecem nos primeiros ajustes; outras exigem mais tempo e consolidação. A Mentoria trabalha com acompanhamento de 45 dias justamente para observar tendências e ajustar as etapas.',
	},
	{
		question: 'Como sei se preciso do Curso ou da Mentoria?',
		answer:
			'Se você gosta de aprender e aplicar as orientações no seu ritmo, o curso pode ser suficiente. Se já tentou diversas estratégias sem sucesso, enfrenta múltiplos despertares, resistência intensa para dormir ou deseja orientação individualizada, a mentoria costuma ser o caminho mais indicado.',
	},
	{
		question: 'Se eu optar pelo curso, quanto tempo tenho de acesso?',
		answer:
			'Você terá acesso ao conteúdo completo, atualizações e materiais complementares por 1 ano, podendo assistir às aulas no seu ritmo e revisitar os conteúdos sempre que precisar.',
	},
	{
		question: 'O método promete um processo sem choro?',
		answer:
			'Não. Mudanças podem gerar protesto, frustração e choro. A proposta é observar o contexto e a intensidade, responder ao bebê e ajustar a quantidade de suporte. Não uso abandono ou deixar o bebê sozinho chorando como resposta automática.',
	},
	{
		question: 'E se eu já tiver tentado de tudo?',
		answer:
			'Essa é justamente a situação de muitas famílias que chegam até nós. Em muitos casos, o problema não está na rotina, na associação de sono ou no ambiente isoladamente, mas na interação entre diferentes fatores. O Método As 5 Dimensões do Sono foi criado para olhar o sono infantil de forma mais ampla, identificando causas que frequentemente passam despercebidas.',
	},
]
/**
 * Item individual do FAQ usando estado local para controlar abertura.
 * Obs: Usamos useState em vez de <details> nativo para ter controle
 * total sobre a animação CSS.
 */
function FaqItem({ question, answer }) {
	const [open, setOpen] = useState(false)

	return (
		<div className='bg-white border border-primary-container rounded-2xl shadow-sm overflow-hidden'>
			<button
				className='w-full flex justify-between items-center p-6 text-left font-semibold text-on-background text-lg cursor-pointer hover:bg-surface-variant transition-colors'
				onClick={() => setOpen(!open)}
				aria-expanded={open}
			>
				<span>{question}</span>
				<span
					className={`material-symbols-outlined text-primary transition-transform duration-300 shrink-0 ml-4 ${open ? 'rotate-180' : ''}`}
				>
					expand_more
				</span>
			</button>

			{/* Conteúdo com animação via max-height */}
			<div
				className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-64' : 'max-h-0'}`}
			>
				<p className='px-6 pb-6 text-on-surface-variant leading-relaxed'>
					{answer}
				</p>
			</div>
		</div>
	)
}

export default function FAQ() {
	const headingRef = useScrollAnimation()
	const faqsRef = useScrollAnimation()

	return (
		<section className='section-padding bg-background' id='faq'>
			<div className='max-w-3xl mx-auto px-6'>
				<div ref={headingRef} className='text-center mb-12 fade-in-up'>
					<h2 className='font-display text-4xl md:text-5xl font-medium text-secondary'>
						Perguntas Frequentes
					</h2>
				</div>

				<div ref={faqsRef} className='space-y-4 mb-16 fade-in-up delay-200'>
					{faqs.map((faq, i) => (
						<FaqItem key={i} {...faq} />
					))}
				</div>
			</div>
		</section>
	)
}

