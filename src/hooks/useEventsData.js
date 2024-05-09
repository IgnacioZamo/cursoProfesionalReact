//este hook es con finalizacion "js" porque no va a retornar un componente, sino una funcion.

import { useState, useEffect } from "react";
import eventsData from "../data/events.json"

const useEventData = ()=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    // const {_embedded: {events}} = data.current
    useEffect(()=> {
        setTimeout(()=>{
            try{
                setData(eventsData);
                setIsLoading(false);

            } catch (error) {
                setError(error)
            }
        }, 3000);
    }, [])

    console.log(data)

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error,
    };
};

export default useEventData;

//funcion exportada a 'eventos'