import { useState } from "react"
import Navbar from "./components/NavBar/index"
import './App.css'
import Events from "../src/components/eventos"

function App() {

  const [searchValue, setSearch] = useState("")
  const handleNavbarSearch = (term) =>{
    setSearch(term);    
  }

  console.log(searchValue, 10000)

  return (
    <>
      <Navbar onSearch = {handleNavbarSearch}/>
      <Events searchValue = {searchValue}/>
    </>
  )
}

export default App
