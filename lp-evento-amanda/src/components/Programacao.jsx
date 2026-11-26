import { programacao } from "../data/evento.js";

function Programacao() {
  return (
    <article id="programacao" className="rounded-2xl bg-white p-5 sm:p-8 shadow-sm border border-teal-100">
      <h2 className="text-2xl font-bold text-primaria mb-4">Programação</h2>

      {/* Lista em cards para celular */}
      <div className="space-y-3 sm:hidden">
        {Array.isArray(programacao) && programacao.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-fundo border border-teal-100 flex flex-col gap-1.5"
          >
            <div className="flex items-center gap-2">
              <span className="inline-block bg-primaria text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                {item.dia}
              </span>
              <span className="text-sm font-bold text-destaque">{item.horario}</span>
            </div>
            <p className="text-gray-800 font-medium text-sm">{item.atividade}</p>
          </div>
        ))}
      </div>

      {/* Tabela para tablet/desktop */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-teal-100 bg-fundo">
              <th className="p-3 text-sm font-bold uppercase tracking-wider text-primaria rounded-tl-lg">Dia</th>
              <th className="p-3 text-sm font-bold uppercase tracking-wider text-primaria">Horário</th>
              <th className="p-3 text-sm font-bold uppercase tracking-wider text-primaria rounded-tr-lg">Atividade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {Array.isArray(programacao) && programacao.map((item, index) => (
              <tr key={index} className="hover:bg-fundo/60 transition-colors">
                <td className="p-3 font-semibold text-primaria whitespace-nowrap">{item.dia}</td>
                <td className="p-3 text-destaque font-medium whitespace-nowrap">{item.horario}</td>
                <td className="p-3 text-gray-700">{item.atividade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default Programacao;
