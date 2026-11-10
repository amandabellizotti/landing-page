function Cabecalho() {
  return (
    <header className="p-4 bg-white shadow-sm flex justify-between items-center w-full">
      <div>
        {/* Trocado de h1 para <a> para manter apenas um h1 na página */}
        <a href="#" className="text-2xl font-bold text-gray-800">
          GameJam OC 48h
        </a>
      </div>
      
      <div className="flex items-center gap-6">
        <nav className="flex gap-4">
          <a href="#sobre" className="font-semibold hover:underline">Sobre</a>
          <a href="#mentores" className="font-semibold hover:underline">Mentores</a>
          <a href="#programacao" className="font-semibold hover:underline">Programação</a>
          <a href="#inscricao" className="font-semibold hover:underline">Inscrição</a>
        </nav>

        <a 
          href="#inscricao" 
          className="bg-destaque hover:bg-primaria text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm shadow-sm"
        >
          Se Inscrever
        </a>
      </div>
    </header>
  );
}

export default Cabecalho;
