import Hero from './components/Hero'
import Comprehension from './components/Comprehension'
import Identification from './components/Identification'
import Method from './components/Method'
import Results from './components/Results'
import HowItWorks from './components/HowItWorks'
import Modules from './components/Modules'
import Bonus from './components/Bonus'
import NaPratica from './components/NaPratica'
import CasoReal from './components/CasoReal'
import AboutMe from './components/AboutMe'
import Testimonials from './components/Testimonials'
import Course from './components/Course'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StickyCta from './components/StickyCta'

/**
 * App — componente raiz que monta a landing page completa.
 *
 * Ordem das seções (após a reorientação do briefing):
 * Hero → Identificação → Posicionamento → 5 Dimensões → Diferencial do Método
 * → Conteúdo do curso → Materiais de apoio → Caso Real → Depoimentos
 * → Sobre Fernanda → Oferta → FAQ → CTA final → Footer
 *
 * Estrutura AIDA: Atenção → Interesse → Desejo → Ação
 *
 * O produto principal é o CURSO. A Mentoria é removida como opção
 * comercial e todos os CTAs direcionam ao checkout do curso.
 */
export default function App() {
	return (
		<>
			<main>
				{/* 1. ATENÇÃO — Captura o visitante (curso como produto principal) */}
				<Hero />

				{/* 2. INTERESSE — Identificação com dores reais */}
				<Identification />

				{/* 3. INTERESSE — Posicionamento do método */}
				<Comprehension />

				 {/* 4. INTERESSE — As 5 Dimensões (lentes do método) */}
				<Method />

				 {/* 5. INTERESSE — Resultados que o método constrói */}
				<Results />

				 {/* 6. DESEJO — Diferencial do método (COMPREENDER → CONSOLIDAR) */}
				<HowItWorks />

				 {/* 7. DESEJO — Conteúdo do curso (módulos) */}
				<Modules />

				 {/* 8. DESEJO — Materiais de apoio da entrega */}
				<Bonus />

				 {/* 9. DESEJO — Na prática, o que você vai aprender */}
				<NaPratica />

				 {/* 10. CONFIANÇA — Caso real como prova do raciocínio */}
				<CasoReal />

				 {/* 11. CONFIANÇA — Quem é a especialista */}
				<AboutMe />

				 {/* 12. PROVA SOCIAL — Resultados de outras famílias */}
				<Testimonials />

				 {/* 13. AÇÃO — Oferta principal do curso (R$97) */}
				<Course />

				 {/* 14. OBJEÇÕES — FAQ (sem Mentoria) */}
				<FAQ />

				 {/* 15. AÇÃO — Oferta final / encerramento */}
			</main>

			<Footer />

			{/* CTA fixo no mobile */}
			<StickyCta />
		</>
	)
}
