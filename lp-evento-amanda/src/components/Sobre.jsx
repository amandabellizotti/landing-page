import { sobre } from "../data/evento.js";

function Sobre() {
  return (
    <article id="sobre" className="rounded-xl bg-white p-6 shadow max-w-4xl mx-auto my-6">
      {Array.isArray(sobre) && sobre.map((item, index) => (
        <div key={index}>
          {/* Trocado de h3 para h2 para seguir a ordem logo após o h1 do Hero */}
          {item.sobre && (
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2 text-destaque">Sobre:</h2>
              <p className="text-gray-700">{item.sobre}</p>
            </div>
          )}

          {/* Trocado de h3 para h2 para manter o mesmo nível hierárquico */}
          {item.numeros && (
            <div>
              <h2 className="inline-block bg-[#E2ECEE] text-primaria font-semibold text-sm px-3 py-1 rounded-full mt-2">
                Números:
              </h2>
              <p className="text-gray-700 text-sm">{item.numeros}</p>
            </div>
          )}
        </div>
      ))}
    </article>
  );
}

export default Sobre;
