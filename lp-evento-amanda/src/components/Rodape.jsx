import { evento } from '../data/evento'

function Rodape() {
    return (
        <footer className="w-full text-center py-6 text-sm bg-destaque text-white font-medium mt-10">
            {evento.nome} · {evento.data}
        </footer>
    )
}
export default Rodape;
