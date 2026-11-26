import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import CartaoMentores from "./components/CartaoMentores"
import Programacao from "./components/Programacao";
import Inscricao from "./components/Inscricao"
import Rodape from "./components/Rodape"
import Grafico from "./components/Grafico";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-fundo text-gray-800 w-full">
      <Cabecalho />
      <main className="flex-grow w-full pb-12">
        <Hero />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 mt-6 sm:mt-8">
          <Sobre />
          <CartaoMentores />
          <Programacao />
          <Grafico />
          <Inscricao />
        </div>
      </main>
      <Rodape />
    </div>
  )
}

export default App