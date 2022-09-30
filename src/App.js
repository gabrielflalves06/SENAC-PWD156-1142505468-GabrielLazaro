import { Routes, Route } from "react-router-dom"
import Home from "./paginas/Home/Home"
import Cadastro from "./paginas/Cadastro/Cadastro"
import Simu from "./paginas/Simulação/Simulação"
import Sobre from "./paginas/Sobre nós/Sobre"
import Conta from "./paginas/conta/conta"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="cadastro" element={ <Cadastro/> } />
        <Route path="simulacao" element={ <Simu/> } />
        <Route path="sobre" element={ <Sobre/> } />
        <Route path="conta" element={ <Conta/> } />
      </Routes>
    </div>
  )
}

export default App