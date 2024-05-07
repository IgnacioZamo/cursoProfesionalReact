import { useState, useEffect } from "react"
import Navbar from "./components/NavBar/index"
import './App.css'
import Events from "../src/components/eventos"


function App() {

  const [searchValue, setSearch] = useState("")
  useEffect(()=> {
    console.log("useEffect usado");
  }, [searchValue])

  const handleNavbarSearch = (term) =>{
    setSearch(term);    
  };

 

  return (
    <>
      <Navbar onSearch = {handleNavbarSearch}/>
      <Events searchValue = {searchValue}/> 

    </>
  )
}

export default App
