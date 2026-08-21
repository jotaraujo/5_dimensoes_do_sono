import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

/**
 * Course — Seção dedicada ao Curso Online (Método 5 Dimensões do Sono).
 * Versão standalone do antigo PathCard "CURSO ONLINE".
 */
export default function Course() {
  const headingRef = useScrollAnimation()
  const cardRef = useScrollAnimation()

  return (
    <section className="section-padding bg-background" id="curso">
      <div className="container-max">

        {/* Cabeçalho da seção */}
        <div ref={headingRef} className="text-center mb-10 fade-in-up">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary-container text-primary mb-4">
            Curso Online
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-primary leading-tight text-balance">
            Para quem quer entender o que está acontecendo e aprender a conduzir as mudanças com mais clareza e autonomia
          </h2>
        </div>

        {/* Card principal */}
        <div
          ref={cardRef}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-ambient border-2 border-primary flex flex-col gap-6 fade-in-up max-w-4xl mx-auto"
        >
          {/* Texto introdutório */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty">
              O curso é a versão completa do Método 5 Dimensões do Sono para famílias que querem compreender melhor o sono do bebê e aprender a aplicar, no próprio ritmo, uma sequência organizada de investigação e intervenção.
            </p>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty">
              Você aprende a observar o sono pelas 5 Dimensões, organizar a base, identificar o que precisa mudar e conduzir mudanças progressivas na forma de adormecer, nas associações, no berço, nos despertares e nas sonecas — quando esses pontos fizerem parte da dificuldade da sua família.
            </p>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty">
              Mais do que assistir a aulas sobre sono, a proposta é ajudar você a sair da tentativa e erro e ter critérios mais claros para decidir o que fazer, quando manter uma estratégia, quando avançar e quando rever o caminho.
            </p>
          </div>

          {/* O que você encontra no curso */}
          <div className="pt-2">
            <p className="font-display text-xl font-medium text-on-surface mb-4">
              No curso, você encontra:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {[
                'o Método 5 Dimensões do Sono passo a passo;',
                'orientação para observar e compreender o padrão atual de sono;',
                'organização de rotina, sonecas, horário noturno e ambiente;',
                'critérios para avaliar associações de sono e decidir quando modificá-las;',
                'estratégias progressivas para construir novas formas de adormecer;',
                'orientação para adaptação ao berço e redução de assistência;',
                'estratégias para despertares noturnos;',
                'orientação para sonecas e transições;',
                'módulo de dificuldades comuns e ajustes;',
                'materiais de apoio para aplicar o método em casa.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-on-surface-variant">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary-container flex items-center justify-center text-primary text-xs font-bold">
                    ✓
                  </span>
                  <span className="leading-relaxed text-base md:text-[0.95rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Indicação + aviso */}
          <div className="flex flex-col gap-3 pt-2 border-t border-primary/10">
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty font-medium">
              O curso é indicado para quem deseja aprender o método e aplicar as orientações com mais autonomia, no próprio ritmo.
            </p>
            <p className="text-sm md:text-base text-primary font-medium italic">
              Nova versão em atualização. Entre em contato para saber sobre a próxima liberação.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2 flex flex-col items-center gap-2">
            <Button
              href="https://wa.me/5521994924368?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20curso%20As%205%20Dimens%C3%B5es%20do%20Sono."
              target="_blank"
              variant="primary"
              size="default"
              className="w-full sm:w-auto whitespace-normal text-center leading-snug px-6 py-4 text-base md:text-lg"
            >
              Quero saber mais sobre o Curso
            </Button>
            <p className="text-xs md:text-sm text-on-surface-variant text-center max-w-md">
              Ao clicar, você será direcionada para o WhatsApp para receber mais informações sobre o curso.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}