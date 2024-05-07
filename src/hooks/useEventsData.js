//este hook es con finalizacion "js" porque no va a retornar un componente, sino una funcion.

import { useState } from "react";
import eventsData from "../data/events.json"

const useEventData = ()=>{
    const [data] = useState (eventsData)
    const {_embedded: {events}} = data;

    return {
        events
    }
};

export default useEventData;

//funcion exportada a 'eventos'