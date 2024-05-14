import { useState, useEffect, useRef } from "react"
import Navbar from "./components/NavBar/index"
import './App.css'
import Events from "../src/components/eventos"


function App() {

  const [searchValue, setSearch] = useState("")
  const conteinerRef = useRef();
  useEffect(()=> {
    console.log("useEffect usado");
  }, [searchValue])

  const handleNavbarSearch = (term) =>{
    setSearch(term);
    console.log(conteinerRef.current)
  };

 

  return (
    <>
      <Navbar onSearch = {handleNavbarSearch} ref={conteinerRef}/>
      <Events searchValue = {searchValue}/> 

    </>
  )
}

export default App
