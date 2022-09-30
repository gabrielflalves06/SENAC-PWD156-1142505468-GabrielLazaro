import { Routes, Route } from "react-router-dom"
import Home from "./paginas/Home/Home"
import Cadastro from "./paginas/Cadastro/Cadastro"
import Simu from "./paginas/Simulação/Simulação"
import Sobre from "./paginas/Sobre nós/Sobre"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="cadastro" element={ <Cadastro/> } />
        <Route path="simulacao" element={ <Simu/> } />
        <Route path="sobre" element={ <Sobre/> } />
      </Routes>
    </div>
  )
}

export default App