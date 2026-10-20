import { evento } from '../data/evento'

function Rodape() {
    return (
    <footer className= "w-full text-center py-6 text-sm text-destaque font-medium max-w-4xl "> {evento.nome} · {evento.data}</footer>
)}
export default Rodape;