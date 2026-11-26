import BotaoLembrete from "./BotaoLembrete";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-primaria via-primaria to-[#024854] text-white py-14 sm:py-20 px-4 sm:px-6 shadow-sm">
      <div className="max-w-4xl mx-auto flex flex-col items-start gap-4">
        <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-white/20">
          Maratona de Criação de Jogos
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          GameJam OC 48h
        </h1>

        <p className="text-base sm:text-xl text-teal-50 max-w-xl leading-relaxed">
          De 10 a 12 de setembro, na praça central. Crie um jogo do zero em 48 horas com mentoria e muita colaboração.
        </p>

        <div className="w-full sm:w-auto pt-2 flex flex-col items-stretch sm:items-start gap-3">
          {/* Botão de ingresso */}
          <a
            href="#inscricao"
            className="text-center bg-white text-primaria font-bold px-7 py-3.5 rounded-xl shadow-md hover:bg-teal-50 hover:shadow-lg transition-all duration-200"
          >
            Garantir Ingresso
          </a>

          {/* Botão de Lembrete logo abaixo */}
          <BotaoLembrete />
        </div>
      </div>
    </section>
  );
}

export default Hero;