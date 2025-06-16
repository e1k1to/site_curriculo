import { HashRouter, Routes, Route } from 'react-router-dom'
import { SobreMim } from './Pages/SobreMim.tsx'
import { Home } from './Pages/Home.tsx'
import { Projetos } from './Pages/Projetos.tsx'

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre-mim" element={<SobreMim/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
        </Routes>
      </HashRouter>
  )
}

export default App
