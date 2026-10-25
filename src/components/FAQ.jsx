import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

const faqs = [
	{
		question: 'Para qual idade o curso é indicado?',
		answer:
			'O curso é recomendado para crianças em idades de 0 a 3 anos. Para os primeiros três meses, há um guia específico, porque nessa fase as prioridades e expectativas são diferentes.',
	},
	{
		question: 'Meu bebê mama para dormir. O curso serve para mim?',
		answer:
			'Sim. Existe conteúdo específico sobre mamar para dormir e, principalmente, sobre como avaliar se essa associação realmente precisa fazer parte da mudança.',
	},
	{
		question: 'Preciso tirar o peito?',
		answer:
			'Não necessariamente. O curso não parte do princípio de que o peito é um problema. Primeiro avaliamos o contexto, a necessidade do bebê e o que realmente precisa mudar.',
	},
	{
		question: 'Preciso ensinar meu bebê a dormir sozinho?',
		answer:
			'Não. O objetivo não é levar todos os bebês ao mesmo modelo de sono. Você define a meta da sua família e aprende a conduzir as mudanças necessárias para alcançá-la. E se você deseja a autonomia, o curso te levará até lá.',
	},
	{
		question: 'O curso promete um processo sem choro?',
		answer:
			'Não. Mudanças podem gerar protesto ou choro. Você aprende a observar a resposta do bebê, oferecer suporte e ajustar o caminho quando necessário. O método não propõe deixar o bebê chorando sozinho.',
	},
	{
		question: 'E se meu bebê não aceitar uma mudança?',
		answer:
			'A resposta do bebê faz parte do processo. Você aprende quando manter, consolidar, reajustar, aumentar ajuda ou recuar uma etapa.',
	},
	{
		question: 'Tem conteúdo sobre sonecas?',
		answer:
			'Sim. Há um módulo específico sobre sonecas, incluindo sonecas curtas, soneca ponte, prolongamento e transições.',
	},
	{
		question: 'Quanto tempo tenho de acesso?',
		answer:
			'Você terá 1 ano de acesso ao curso, para assistir às aulas no seu ritmo, aplicar as orientações e voltar aos conteúdos sempre que precisar ao longo desse período.',
	},
	{
		question: 'Tenho suporte para dúvidas?',
		answer:
			'Sim. Você terá acesso à plataforma de dúvidas 24 horas por dia, 7 dias por semana, durante o período de acesso ao curso. Você poderá enviar suas dúvidas pela plataforma e consultar as orientações disponíveis ao longo da jornada.',
	},
		{
		question: 'Como recebo o acesso?',
		answer:
			'Após a confirmação do pagamento, você recebe os dados de acesso ao curso pela plataforma Kiwify.',
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

