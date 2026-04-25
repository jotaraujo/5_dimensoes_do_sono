import { useEffect, useRef } from 'react'

/**
 * Hook que usa o Intersection Observer para detectar quando
 * um elemento entra na viewport e adiciona a classe 'is-visible'.
 *
 * Por que usar Intersection Observer?
 * É mais performático que ouvir o evento 'scroll' diretamente,
 * pois o browser dispara apenas quando a visibilidade muda.
 *
 * @param {Object} options - Opções do IntersectionObserver
 * @returns {React.RefObject} ref - Attach em qualquer elemento
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Após aparecer, para de observar (animação só ocorre 1x)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15, // Aparece quando 15% do elemento está visível
        rootMargin: '0px 0px -50px 0px', // Margem negativa embaixo → ativa um pouco antes do fim
        ...options,
      }
    )

    observer.observe(element)

    // Limpeza: desconecta o observer quando o componente desmonta
    return () => observer.disconnect()
  }, [])

  return ref
}
