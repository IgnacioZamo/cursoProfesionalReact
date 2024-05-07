import { useState, useEffect } from "react"

    const NavBar = ({onSearch})=>{
        const [search, setSearch] = useState('');

        useEffect(()=>{}, [search, onSearch])



        const handleInputChange = (e)=>{
            console.log("1010 effecto asldkjsalkdj")
            setSearch(e.target.value)
        };

        const handleInputKeyDown = (e)=>{
            if (e.key === "Enter"){
                onSearch(search)

            }
        }
        
        return (
         <div>
             <p>Eventos</p>
             <input type="text"
                    placeholder="Busca tu evento favorito" 
                    onChange = {handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value = {search}/>
         </div>
     )
    }

    export default NavBar;