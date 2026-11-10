import { mentores } from "../data/evento.js";

function CartaoMentores() {
  return (
    <section id="mentores" className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-primaria">Mentores</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.isArray(mentores) && mentores.map((mentor, index) => (
          <article key={index} className="rounded-xl p-6 shadow-md border border-teal-100 hover:shadow-lg transition-shadow bg-white">
            <h3 className="text-xl font-bold text-destaque">{mentor.nome}</h3>
            <span className="inline-block bg-[#E2ECEE] text-primaria font-semibold text-xs px-3 py-1 rounded-full mt-2">
              {mentor.area}
            </span>
            <p className="text-sm mt-3 text-gray-600 ">{mentor.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CartaoMentores;
