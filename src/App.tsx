import React, { useState, useEffect } from 'react';
import { Lock, Zap, Shield, Play } from 'lucide-react';

declare global {
  interface Window {
    _wq: any[];
  }
}

function App() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Inicializar a fila do Wistia se não existir
    window._wq = window._wq || [];

    // Configurar o listener do Wistia
    window._wq.push({
      id: "m8e333g9y9",
      onReady: function(video: any) {
        console.log("Vídeo carregado");
        
        video.bind("end", function() {
          console.log("Vídeo terminou");
          setVideoEnded(true);
          
          // Delay para criar suspense antes de mostrar o botão
          setTimeout(() => {
            setShowButton(true);
          }, 2000);
        });
      }
    });
  }, []);

  const handleCTAClick = () => {
    if (videoEnded) {
      window.open('https://go.disruptybr.com.br/xfuemwpvjf', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white font-montserrat flex flex-col justify-center items-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Finalize seu pedido e receba suas{' '}
          <span className="text-cta-orange">fotos profissionais</span>{' '}
          em minutos!
        </h1>

        {/* Mensagem de Atenção */}
        <div className="bg-red-600 border-2 border-red-400 rounded-xl p-6 mx-auto max-w-2xl shadow-2xl animate-pulse">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="text-yellow-300 text-2xl">⚠️</div>
            <h2 className="text-xl md:text-2xl font-bold text-yellow-300">
              ATENÇÃO: ESTE VÍDEO É OBRIGATÓRIO
            </h2>
            <div className="text-yellow-300 text-2xl">⚠️</div>
          </div>
          <p className="text-white font-semibold text-base md:text-lg leading-relaxed">
            Antes de liberar o acesso à <span className="text-yellow-300 font-bold">OFERTA EXCLUSIVA</span>, você precisa assistir às recomendações até o final.
            <br />
            <span className="text-red-200 font-bold">Nada será mostrado antes disso.</span>
          </p>
        </div>

        {/* Vídeo Wistia */}
        <div className="w-full max-w-[700px] mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <wistia-player 
              media-id="m8e333g9y9" 
              aspect="1.0"
              className="w-full"
            ></wistia-player>
            
            {/* Overlay quando vídeo não terminou */}
            {!videoEnded && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-white mx-auto mb-4 opacity-70" />
                  <p className="text-white font-semibold text-lg">
                    Assista até o final para liberar a oferta
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Status do Vídeo */}
        {!videoEnded && (
          <div className="bg-yellow-600 bg-opacity-20 border border-yellow-500 rounded-lg p-4 mx-auto max-w-md">
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-yellow-300 font-semibold">
                Aguardando conclusão do vídeo...
              </span>
            </div>
          </div>
        )}

        {/* Botão CTA - Só aparece após o vídeo */}
        {showButton && (
          <div className="pt-4 animate-fade-in">
            <div className="bg-green-600 bg-opacity-20 border border-green-500 rounded-lg p-3 mb-6 mx-auto max-w-md">
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-300 font-semibold text-sm">
                  ✅ Vídeo concluído! Oferta liberada
                </span>
              </div>
            </div>
            
            <button
              onClick={handleCTAClick}
              className="bg-cta-orange hover:bg-cta-orange-hover text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-slow"
            >
              🔥 SIM, QUERO MEU ENSAIO AGORA! 🔥
            </button>
          </div>
        )}

        {/* Botão Bloqueado */}
        {!showButton && (
          <div className="pt-4">
            <div className="relative">
              <button
                disabled
                className="bg-gray-600 text-gray-400 font-bold text-xl md:text-2xl px-12 py-6 rounded-full cursor-not-allowed opacity-50 relative"
              >
                <Lock className="w-6 h-6 inline-block mr-2" />
                Oferta Bloqueada
              </button>
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                BLOQUEADO
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3 font-medium">
              Complete o vídeo para desbloquear
            </p>
          </div>
        )}

        {/* Selos de Confiança - Só aparecem após o vídeo */}
        {showButton && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8 animate-fade-in-delayed">
            
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-10 p-3 rounded-full">
                <Lock className="w-6 h-6 text-cta-orange" />
              </div>
              <span className="text-sm md:text-base font-semibold">
                Pagamento 100% Seguro
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-10 p-3 rounded-full">
                <Zap className="w-6 h-6 text-cta-orange" />
              </div>
              <span className="text-sm md:text-base font-semibold">
                Entrega Imediata
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-10 p-3 rounded-full">
                <Shield className="w-6 h-6 text-cta-orange" />
              </div>
              <span className="text-sm md:text-base font-semibold">
                Garantia de Satisfação
              </span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;