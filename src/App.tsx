import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./index.css"
import ValidarPedido from "./pages/validatePage"
import LayoutHome from './LayoutHome'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutHome />} />
        <Route path="/validar/:id/:token" element={<ValidarPedido />} />
      </Routes>
    </Router>
  )
}

export default App
