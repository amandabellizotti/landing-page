import { programacao } from "../data/evento.js";

function Programacao() {
  return (
    <article id='programacao' className="rounded-xl bg-white p-6 shadow max-w-4xl mx-auto my-6">
        <h2 className="p-3 text-xl font-bold">Programação</h2>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-gray-200 bg-gray-50">
            <th className="p-3 text-xl font-bold">Dia</th>
            <th className="p-3 text-xl font-bold">Horário</th>
            <th className="p-3 text-xl font-bold">Atividade</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(programacao) && programacao.map((item, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="p-3 text-gray-700">{item.dia}</td>
              <td className="p-3 text-gray-700">{item.horario}</td>
              <td className="p-3 text-gray-700">{item.atividade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default Programacao;
