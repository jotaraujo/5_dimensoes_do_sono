import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Cada bônus agora tem um título e uma descrição separados
const bonus = [
  {
    titulo: 'Bônus 1: Plano de Sono Personalizado',
    destaque: 'Apenas para as 10 primeiras inscritas!',
    descricao:
      'As 10 primeiras mães que garantirem a vaga vão ganhar uma análise individual e um plano de ação exclusivo feito por mim, focado exatamente na rotina do seu bebê. (Atenção: Esse bônus costuma esgotar nos primeiros minutos!)',
  },
  {
    titulo: 'Bônus 2: Sorteio de uma Consultoria Individual Completa',
    descricao:
      'Para celebrar essa turma, vou realizar um sorteio exclusivo entre todas as alunas inscritas. A vencedora ganhará o meu acompanhamento premium lado a lado, de forma totalmente gratuita.',
  },
  {
    titulo: 'Bônus 3: Encontros Mensais ao Vivo',
    descricao:
      'Uma vez por mês, teremos um encontro online em grupo para tirar dúvidas, ajustar rotinas e conversar. Você não estará sozinha nessa jornada.',
  },
  {
    titulo: 'Bônus 4: 1 Ano de Acesso e Acompanhamento na Plataforma',
    descricao:
      'Você terá 12 meses inteiros para assistir às aulas quantas vezes quiser, com suporte garantido na nossa área de membros para te ajudar a cada nova fase de desenvolvimento do bebê.',
  },
  {
    titulo: 'Bônus 5: Comunidade VIP no WhatsApp',
    descricao:
      'Um espaço direto no seu celular para receber materiais de apoio, lembretes dos nossos encontros ao vivo e conteúdos extras.',
  },
]

export default function Bonus() {
  const headingRef = useScrollAnimation()
  const cardRef = useScrollAnimation()

  return (
    <section className="section-padding bg-surface-container">
      <div className="container-max">

        <div ref={headingRef} className="text-center mb-12 fade-in-up">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
            Por tempo limitado
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-secondary">
            🎁 Bônus Especiais
          </h2>
        </div>

        <div
          ref={cardRef}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-ambient max-w-3xl mx-auto fade-in-up delay-200"
        >
          <ul className="divide-y divide-primary-container">
            {bonus.map((item, i) => (
              <li
                key={i}
                className="py-6 flex items-start gap-4 first:pt-0 last:pb-0"
              >
                <span className="text-2xl shrink-0 mt-1">🎁</span>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-primary text-lg leading-snug">
                    {item.titulo}
                  </span>
                  {/* Badge de urgência — só aparece se o bônus tiver a propriedade "destaque" */}
                  {item.destaque && (
                    <span className="inline-block self-start text-xs font-bold uppercase tracking-wide bg-vinculo text-on-surface-variant rounded-full px-3 py-1">
                      {item.destaque}
                    </span>
                  )}
                  <p className="text-on-surface-variant text-base leading-relaxed mt-1">
                    {item.descricao}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
