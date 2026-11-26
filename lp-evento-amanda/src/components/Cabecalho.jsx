import { useState } from "react";

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#mentores", label: "Mentores" },
    { href: "#programacao", label: "Programação" },
    { href: "#inscricao", label: "Inscrição" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-teal-100 shadow-xs w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl sm:text-2xl font-extrabold text-primaria tracking-tight">
          GameJam OC 48h
        </a>

        {/* Navegação Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-primaria transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#inscricao"
            className="bg-destaque hover:bg-primaria text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm shadow-sm"
          >
            Se Inscrever
          </a>
        </div>

        {/* Botão Menu Mobile */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          className="md:hidden p-2 rounded-lg text-primaria hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-destaque cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuAberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      {menuAberto && (
        <div className="md:hidden border-t border-teal-100 bg-white px-4 py-4 space-y-3 shadow-md">
          <nav className="flex flex-col space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuAberto(false)}
                className="py-2 px-3 rounded-lg font-semibold text-gray-700 hover:bg-teal-50 hover:text-primaria transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#inscricao"
            onClick={() => setMenuAberto(false)}
            className="block w-full text-center bg-destaque hover:bg-primaria text-white font-bold px-4 py-3 rounded-lg transition-colors text-sm shadow-sm"
          >
            Se Inscrever
          </a>
        </div>
      )}
    </header>
  );
}

export default Cabecalho;
