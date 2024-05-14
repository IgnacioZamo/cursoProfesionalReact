import { useState, useEffect, useRef, forwardRef } from "react"

    const NavBar = forwardRef( ({onSearch}, ref)=>{
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
         <div ref={ref}>
             <p>Eventos</p>
             <input type="text"
                    placeholder="Busca tu evento favorito" 
                    onChange = {handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value = {search}/>
         </div>
     )
    })

    export default NavBar;