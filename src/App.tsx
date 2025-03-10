import Header from "../src/components/Header"
import Nav from "./components/Nav"
import "./index.css"
import Menu from "./Menu"


function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <h2 className='text-2xl md:text-4xl font-bold text-center mt-10 mb-10'>Conheça nosso cardápio</h2>
    <Menu/>
    </>
  )
}

export default App
