import { sobre } from "../data/evento.js";

function Sobre() {
  return (
    <article id="sobre" className="rounded-2xl bg-white p-5 sm:p-8 shadow-sm border border-teal-100">
      {Array.isArray(sobre) && sobre.map((item, index) => (
        <div key={index}>
          {item.sobre && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-3 text-primaria">Sobre o Evento</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.sobre}</p>
            </div>
          )}

          {item.numeros && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-destaque mb-3">
                Em Números
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {item.numeros.split("·").map((numero, idx) => (
                  <div
                    key={idx}
                    className="bg-fundo border border-teal-100 rounded-xl px-4 py-3 text-center font-bold text-primaria text-sm sm:text-base"
                  >
                    {numero.trim()}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </article>
  );
}

export default Sobre;
