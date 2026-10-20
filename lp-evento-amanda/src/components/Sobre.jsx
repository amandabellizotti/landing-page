import { sobre } from "../data/evento.js";

function Sobre() {
  return (
    <article id="sobre" className="rounded-xl bg-white p-6 shadow max-w-4xl mx-auto my-6">
      {/* Usando o .map de forma segura para varrer a sua lista */}
      {Array.isArray(sobre) && sobre.map((item, index) => (
        <div key={index}>
          {/* Se o objeto da vez tiver a propriedade 'sobre', renderiza o bloco do Sobre */}
          {item.sobre && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Sobre:</h3>
              <p className="text-gray-700">{item.sobre}</p>
            </div>
          )}

          {/* Se o objeto da vez tiver a propriedade 'numeros', renderiza o bloco dos Números */}
          {item.numeros && (
            <div>
              <h3 className="text-xl font-bold mb-2">Números:</h3>
              <p className="text-gray-700">{item.numeros}</p>
            </div>
          )}
        </div>
      ))}
    </article>
  );
}

export default Sobre;
