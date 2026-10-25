import Hero from './components/Hero'
import Comprehension from './components/Comprehension'
import Identification from './components/Identification'
import Method from './components/Method'
import Results from './components/Results'
import HowItWorks from './components/HowItWorks'
import Modules from './components/Modules'
import NaPratica from './components/NaPratica'
import TopicsColumns from './components/TopicsColumns'
import SupportMaterials from './components/SupportMaterials'
import Bonus from './components/Bonus'
import Testimonials from './components/Testimonials'
import CasoReal from './components/CasoReal'
import AboutMe from './components/AboutMe'
import FAQ from './components/FAQ'
import Course from './components/Course'
import Footer from './components/Footer'
import StickyCta from './components/StickyCta'

/**
 * App — componente raiz que monta a landing page completa.
 *
 * Ordem atualizada das seções conforme briefing:
 * Hero → Identificação → Posicionamento → 5 Dimensões → Resultados → Diferencial do Método
 * → Módulos do curso → Na Prática → Tópicos em colunas → Materiais de apoio
 * → Depoimentos → Caso Real → Sobre Fernanda → FAQ → Oferta → Footer
 */
export default function App() {
	return (
		<>
			<main>
				<Hero />
				<Identification />
				<Comprehension />
				<Method />
				<Results />
				<HowItWorks />
				<Modules />
				<NaPratica />
				<TopicsColumns />
				<SupportMaterials />
				<Testimonials />
				<CasoReal />
				<AboutMe />
				<FAQ />
				<Course />
			</main>
			<Footer />
			<StickyCta />
		</>
	)
}
