import Navbar from "./components/NavBar/index"
import './App.css'
import Events from "../src/components/eventos"

function App() {

  const funcionBoton = ()=>{
    alert("me clickeaste!")
  }

  return (
    <>
      <button onClick={funcionBoton}>clickeame!</button>
      <Navbar/>
      <Events/>
    </>
  )
}

export default App
