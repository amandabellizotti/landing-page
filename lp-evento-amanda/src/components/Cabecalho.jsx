function Cabecalho() {
  return (
    <header className="p-4 bg-white shadow-sm flex justify-between items-center w-full">
      <div>
        {/* Mantém o título na extrema esquerda */}
        <h1 className="text-2xl font-bold text-gray-800">GameJam OC 48h</h1>
      </div>
      
      {/* O container do menu agora agrupa os links e o botão lado a lado com flex e gap */}
      <div className="flex items-center gap-6">
        <nav className="flex gap-4">
          <a href="#inscricao" className="font-semibold hover:underline">Inscrição</a>
          <a href="#programacao" className="font-semibold hover:underline">Programação</a>
          <a href="#sobre" className="font-semibold hover:underline">Sobre</a>
        </nav>

        {/* Botão de Inscrição  */}
        <a 
          href="#inscricao" 
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm shadow-sm"
        >
          Se Inscrever
        </a>
      </div>
    </header>
  );
}

export default Cabecalho;
