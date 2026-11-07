/**
 * Constantes de checkout — links para as ofertas do curso.
 *
 * Oferta de lançamento: R$97 (30/10 a 06/11)
 * Oferta de novembro: R$197 (07/11 a fim de novembro)
 * Preço oficial: R$397
 *
 * O link CHECKOUT_LAUNCH deve ser atualizado para CHECKOUT_NOVEMBER
 * após o período de lançamento.
 */

// TODO: Substituir pelos links reais do checkout quando a Fernanda enviar
export const CHECKOUT_LAUNCH = 'https://pay.kiwify.com.br/g0SED7e'
export const CHECKOUT_NOVEMBER = 'https://pay.kiwify.com.br/lDy4qKE'
export const CHECKOUT_OFFICIAL = 'https://pay.kiwify.com.br/eSd350h'

// Preços
export const PRICE_LAUNCH = 97
export const PRICE_NOVEMBER = 197
export const PRICE_OFFICIAL = 397

// Datas de vigência (formato ISO YYYY-MM-DD para evitar ambiguidade)
export const LAUNCH_END_DATE = '2026-11-06'
export const NOVEMBER_END_DATE = '2026-11-30'

// Determina o estado ativo com base na data corrente.
// Forçado para Novembro conforme pedido do usuário.

let CHECKOUT_ACTIVE = CHECKOUT_NOVEMBER
let PRICE_ACTIVE = PRICE_NOVEMBER
let DATE_ACTIVE = NOVEMBER_END_DATE

export { CHECKOUT_ACTIVE, PRICE_ACTIVE, DATE_ACTIVE }