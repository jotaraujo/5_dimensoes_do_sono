import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Button from './ui/Button'

/**
 * Mentoria — Seção dedicada à Mentoria Individual.
 * Layout de duas colunas (texto + card lateral) para dar mais destaque
 * em relação à seção do Curso Online.
 */
export default function Mentoria() {
  const headingRef = useScrollAnimation()
  const cardRef = useScrollAnimation()
  const highlightsRef = useScrollAnimation()

  const items = [
    {
      label: 'Avaliação',
      text: 'Avaliação individualizada pelas 5 Dimensões;',
    },
    {
      label: 'Investigação',
      text: 'período de observação e análise do sono;',
    },
    {
      label: 'Aprofundamento',
      text: 'consulta individual para aprofundamento do caso;',
    },
    {
      label: 'Plano personalizado',
      text: 'Plano de Ação Integrativo personalizado e organizado por etapas;',
    },
    {
      label: 'Alinhamento',
      text: 'reunião para apresentação e alinhamento das estratégias;',
    },
    {
      label: 'Acompanhamento',
      text: 'acompanhamento ao longo de 45 dias;',
    },
    {
      label: 'Ajustes',
      text: 'ajustes progressivos conforme a resposta do bebê;',
    },
    {
      label: 'Orientações',
      text: 'orientação para associações, berço, redução de assistência, despertares e sonecas quando fizerem parte do objetivo;',
    },
    {
      label: 'Suporte contínuo',
      text: 'check-ins e suporte dentro do formato vigente da Mentoria;',
    },
    {
      label: 'Continuidade',
      text: 'plano de continuidade ao final.',
    },
  ]

  return (
    <section className="section-padding bg-surface-container-low relative overflow-hidden" id="mentoria">
      {/* Decoração sutil de fundo para reforçar destaque */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-container rounded-full -z-10 blur-3xl opacity-40" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-container rounded-full -z-10 blur-3xl opacity-30" aria-hidden="true" />

      <div className="container-max">

        {/* Cabeçalho da seção — alinhado à esquerda para destacar */}
        <div ref={headingRef} className="mb-10 lg:mb-14 fade-in-up">
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-secondary-container text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
              Mentoria Individual • Acompanhamento mais completo
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.2rem] font-medium text-primary leading-[1.1] tracking-tight text-balance max-w-3xl">
              Quando você quer um plano feito para o seu bebê e acompanhamento durante a mudança
            </h2>
          </div>
        </div>

        {/* Grid principal: duas colunas em telas grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start">

          {/* Coluna esquerda — copy persuasivo + destaques */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p className="text-lg md:text-xl text-on-surface leading-relaxed text-pretty">
                A Mentoria é o meu acompanhamento mais completo. Nós começamos entendendo profundamente como o sono acontece hoje, definimos o resultado que a família precisa alcançar e construímos um Plano de Ação Integrativo organizado por etapas.
              </p>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-pretty">
                Ao longo do acompanhamento, eu observo a resposta do bebê aos ajustes e ajudo a família a decidir quando manter, quando avançar, quando aumentar o suporte e quando recuar uma etapa. O objetivo não é entregar uma lista de regras: é conduzir a mudança até que a família saiba continuar com mais segurança e autonomia.
              </p>
            </div>

            {/* Mini-destaques (diferenciais visuais) */}
            <div ref={highlightsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3 fade-in-up">
              {[
                { number: '45', unit: 'dias', label: 'de acompanhamento próximo' },
                { number: '1:1', unit: '', label: 'plano personalizado e individual' },
                { number: '+', unit: 'ajustes', label: 'progressivos conforme o bebê' },
              ].map((d) => (
                <div
                  key={d.label}
                  className="bg-white rounded-2xl p-4 border border-secondary/20 shadow-sm flex flex-col"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl md:text-4xl font-semibold text-secondary leading-none">
                      {d.number}
                    </span>
                    {d.unit && (
                      <span className="text-sm font-medium text-secondary/80">{d.unit}</span>
                    )}
                  </div>
                  <span className="text-xs md:text-sm text-on-surface-variant leading-snug mt-1">
                    {d.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita — card principal com lista e CTA */}
          <div
            ref={cardRef}
            className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-ambient border-2 border-secondary ring-1 ring-secondary/10 flex flex-col gap-6 fade-in-up relative"
          >
            {/* Selo de destaque no canto */}
            <div className="absolute -top-3 left-8 bg-secondary text-on-secondary text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
              ★ Premium
            </div>

            {/* Cabeçalho do card */}
            <div className="pt-2">
              <p className="font-display text-xl font-medium text-on-surface mb-1">
                O que está incluso:
              </p>
              <p className="text-sm text-on-surface-variant">
                Cada etapa foi desenhada para sustentar a mudança real, não apenas entregar conteúdo.
              </p>
            </div>

            {/* Lista vertical com micro-categorização */}
            <ul className="flex flex-col gap-2.5">
              {items.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 text-on-surface-variant p-3 rounded-xl hover:bg-secondary-container/30 transition-colors"
                >
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-secondary text-sm font-bold">
                    ✓
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wide leading-none mb-1">
                      {item.label}
                    </span>
                    <span className="leading-relaxed text-base">
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA — maior e mais destacado */}
            <div className="pt-4 flex flex-col items-center gap-3 border-t border-secondary/20 mt-2">
              <Button
                href="https://wa.me/5521994924368?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20a%20Mentoria%20de%20Sono%20Infantil."
                target="_blank"
                variant="secondary"
                size="default"
                className="w-full whitespace-normal text-center leading-snug px-6 py-5 text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                Quero conversar sobre a Mentoria
              </Button>
              <p className="text-xs md:text-sm text-on-surface-variant text-center max-w-md">
                Ao clicar, você será direcionada para o WhatsApp para eu entender brevemente o seu caso e explicar como funciona.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}