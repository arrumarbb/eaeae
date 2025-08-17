import React from 'react';
import { Lock, Zap, Shield } from 'lucide-react';

function App() {
  const handleCTAClick = () => {
    window.open('https://go.disruptybr.com.br/xfuemwpvjf', '_blank');
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

        {/* Vídeo Wistia */}
        <div className="w-full max-w-[700px] mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <wistia-player 
              media-id="m8e333g9y9" 
              aspect="1.0"
              className="w-full"
            ></wistia-player>
          </div>
        </div>

        {/* Botão CTA */}
        <div className="pt-4">
          <button
            onClick={handleCTAClick}
            className="bg-cta-orange hover:bg-cta-orange-hover text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Sim, quero meu ensaio agora
          </button>
        </div>

        {/* Selos de Confiança */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8">
          
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

      </div>
    </div>
  );
}

export default App;