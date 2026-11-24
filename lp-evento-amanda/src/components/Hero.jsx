import BotaoLembrete from "./BotaoLembrete";

function Hero() {
  return (
    <section className="bg-primaria px-4 py-20 text-white flex flex-col items-start gap-4">
      <h1 className="text-4xl font-extrabold">GameJam OC 48h</h1>
      <p className="text-lg">De 10 a 12 de setembro, na praça central.</p>

      {/* Botão de ingresso */}
      <a
        href="#inscricao"
        className="bg-white text-primaria font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-200"
      >
        Garantir Ingresso
      </a>

      {/* Botão de Lembrete logo abaixo */}
      <BotaoLembrete />
    </section>
  );
}

export default Hero;