import Hero from './components/Hero'
import Comprehension from './components/Comprehension'
import Identification from './components/Identification'
import Method from './components/Method'
import Results from './components/Results'
import HowItWorks from './components/HowItWorks'
import Quiz from './components/Quiz'
import CasoReal from './components/CasoReal'
import AboutMe from './components/AboutMe'
import Testimonials from './components/Testimonials'
import PathSelector from './components/PathSelector'
import Course from './components/Course'
import Mentoria from './components/Mentoria'
import FAQ from './components/FAQ'
import Offer from './components/Offer'
import Footer from './components/Footer'
import StickyCta from './components/StickyCta'

/**
 * App — componente raiz que monta a landing page completa.
 *
 * Ordem das seções:
 * Hero → Dor → Identificação → Método → Como Funciona → Quiz → Caso Real
 * → Sobre mim → Depoimentos → Qual Caminho → FAQ → Oferta → Footer
 *
 * Estrutura AIDA: Atenção → Interesse → Desejo → Ação
 */
export default function App() {
	return (
		<>
			<main>
				{/* 1. ATENÇÃO — Captura o visitante */}
				<Hero />

				{/* 2. INTERESSE — Identifica a dor */}
				<Comprehension />

				{/* 2.5. INTERESSE — Identificação */}
				<Identification />

				{/* 3. INTERESSE — Apresenta a solução */}
				<Method />

				{/* 3.1. INTERESSE — Resultados esperados */}
				<Results />

				{/* 4. DESEJO — Detalha o que vai receber */}
				<HowItWorks />

				{/* 5. DESEJO — Quiz */}
				<Quiz />

				{/* 6. CONFIANÇA — Caso Real */}
				<CasoReal />

				{/* 7. CONFIANÇA — Quem é a especialista */}
				<AboutMe />

				{/* 8. PROVA SOCIAL — Resultados de outras mães */}
				<Testimonials />

				{/* 9. DECISÃO — Bifurcação: Qual formato faz sentido? */}
				<PathSelector />

				{/* 9.1. DECISÃO — Mentoria Individual (detalhamento) */}
				<Mentoria />

				{/* 9.2. DECISÃO — Curso Online (detalhamento) */}
				<Course />

				{/* 10. OBJEÇÕES — FAQ */}
				<FAQ />

				{/* 11. AÇÃO — Oferta */}
				<Offer />
			</main>

			<Footer />

			{/* CTA fixo no mobile */}
			<StickyCta />
		</>
	)
}
