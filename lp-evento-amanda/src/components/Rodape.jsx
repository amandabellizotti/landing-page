import { evento } from '../data/evento'

function Rodape() {
    return (
        <footer className="w-full text-center py-6 px-4 text-xs sm:text-sm bg-primaria text-teal-50 font-medium mt-auto">
            <div className="max-w-4xl mx-auto space-y-1">
                <p className="font-bold text-white">{evento.nome}</p>
                <p>{evento.data}</p>
                <p className="text-teal-200">{evento.local}</p>
            </div>
        </footer>
    )
}
export default Rodape;
