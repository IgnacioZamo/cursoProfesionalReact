import { useState } from "react"

    const NavBar = ()=>{
        const [search, setSearch] = useState('');
        const handleInputChange = (e)=>{
            setSearch(e.target.value)
        };

        console.log(search)
        
        return (
         <div>
             <p>Eventos</p>
             <input type="text"
                    placeholder="Busca tu evento favorito" 
                    onChange = {handleInputChange}
                    value = {search}/>
         </div>
     )
    }

    export default NavBar;