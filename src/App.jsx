import Header from './components/Header'
import Hero from './components/Hero'
import Exhaustion from './components/Exhaustion'
import Method from './components/Method'
import Modules from './components/Modules'
import Bonus from './components/Bonus'
import AboutMe from './components/AboutMe'
import Testimonials from './components/Testimonials'
import VideoSection from './components/VideoSection'
import Offer from './components/Offer'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

/**
 * App — componente raiz que monta a landing page completa.
 *
 * Ordem das seções (baseada no design Stitch + boas práticas de copywriting):
 * Header → Hero → Dor → Solução → Módulos → Bônus → Autoridade → Prova Social
 * → Vídeo → Oferta → FAQ → Footer
 *
 * Essa ordem segue a estrutura AIDA:
 * Atenção → Interesse → Desejo → Ação
 */
export default function App() {
  return (
    <>
      <Header />

      <main>
        {/* 1. ATENÇÃO — Captura o visitante */}
        <Hero />

        {/* 2. INTERESSE — Identifica a dor */}
        <Exhaustion />

        {/* 3. INTERESSE — Apresenta a solução */}
        <Method />

        {/* 4. DESEJO — Detalha o que vai receber */}
        <Modules />

        {/* 5. DESEJO — Mais valor com os bônus */}
        <Bonus />

        {/* 6. CONFIANÇA — Quem é a especialista */}
        <AboutMe />

        {/* 7. PROVA SOCIAL — Resultados de outras mães */}
        <Testimonials />

        {/* 8. ENGAJAMENTO — Vídeo de apresentação */}
        <VideoSection />

        {/* 9. AÇÃO — Oferta e garantia */}
        <Offer />

        {/* 10. OBJEÇÕES — FAQ */}
        <FAQ />
      </main>

      <Footer />
    </>
  )
}
