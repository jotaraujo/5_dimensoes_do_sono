import { useState, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

import thumbImg from '../assets/hero.jpeg'

const videoSrc = '/video_apresentacao.mp4'

export default function VideoSection() {
  const headingRef = useScrollAnimation()
  const videoRef = useScrollAnimation()

  // Estado que controla se o vídeo está tocando ou exibindo a thumbnail
  const [isPlaying, setIsPlaying] = useState(false)
  const videoElRef = useRef(null)

  /**
   * Ao clicar em play: esconde a thumbnail e inicia a reprodução do vídeo.
   * O autoPlay no elemento <video> garante que começa imediatamente.
   */
  function handlePlay() {
    setIsPlaying(true)
    // Aguarda o DOM atualizar antes de chamar .play()
    setTimeout(() => {
      videoElRef.current?.play()
    }, 50)
  }

  return (
    <section className="section-padding bg-secondary">
      <div className="container-max text-center">

        <div ref={headingRef} className="mb-10 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white">
            ASSISTA ANTES DE DECIDIR
          </h2>
          <p className="text-white/60 mt-4 text-lg max-w-xl mx-auto">
            Em poucos minutos, entenda por que o método funciona — e por que tantas famílias confiam nele.
          </p>
        </div>

        <div
          ref={videoRef}
          className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-glow border border-primary-container/30 aspect-video bg-black fade-in-scale delay-200"
        >
          {!isPlaying && (
            <button
              onClick={handlePlay}
              aria-label="Reproduzir vídeo de apresentação"
              className="absolute inset-0 w-full h-full group cursor-pointer"
            >
              <img
                src={thumbImg}
                alt="Thumbnail do vídeo — Fernanda apresentando o método"
                className="w-full h-full object-contain opacity-60 transition-opacity duration-300 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="video-play-btn w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(74,93,35,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-container group-hover:shadow-[0_20px_50px_-5px_rgba(74,93,35,0.6)]">
                  <span className="material-symbols-outlined fill text-white text-4xl">
                    play_arrow
                  </span>
                </div>
              </div>

              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                Clique para assistir
              </p>
            </button>
          )}

          {isPlaying && (
            <video
              ref={videoElRef}
              src={videoSrc}
              controls
              className="w-full h-full object-contain"
              onEnded={() => setIsPlaying(false)}
            />
          )}
        </div>
      </div>
    </section>
  )
}
