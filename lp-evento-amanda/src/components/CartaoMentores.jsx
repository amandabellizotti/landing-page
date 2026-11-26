import { mentores } from "../data/evento.js";

function CartaoMentores() {
  return (
    <section id="mentores" className="py-2">
      <h2 className="text-2xl font-bold mb-4 text-primaria">Mentores</h2>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Array.isArray(mentores) && mentores.map((mentor, index) => (
          <article
            key={index}
            className="rounded-2xl p-5 sm:p-6 shadow-sm border border-teal-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primaria/10 text-primaria font-bold flex items-center justify-center shrink-0">
                {mentor.nome.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-destaque leading-tight">{mentor.nome}</h3>
            </div>
            <div>
              <span className="inline-block bg-[#E2ECEE] text-primaria font-semibold text-xs px-3 py-1 rounded-full mt-1">
                {mentor.area}
              </span>
            </div>
            <p className="text-sm mt-3 text-gray-600 leading-relaxed">{mentor.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CartaoMentores;
