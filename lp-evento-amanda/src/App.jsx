import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import CartaoMentores from "./components/CartaoMentores"
import Programacao from "./components/Programacao";
import Inscricao from "./components/Inscricao"
import Rodape from "./components/Rodape"


function App() {
  return (
      <section className="min-h-screen flex flex-col bg-gray-50 text-gray-800 w-full">
      <Cabecalho/>
    <main className="flex-grow w-full space-y-6 pb-12">
      <Hero />
      <Sobre/>
      <CartaoMentores/>
      <Programacao />
      <div>
      <Inscricao/>
      </div>
    </main>
    <Rodape/>
    </section>
  )
}

export default App