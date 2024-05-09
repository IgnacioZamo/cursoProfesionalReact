import EventItem from "./itemEvento"
import useEventsData from "../../hooks/useEventsData"



const Events = ({searchValue})=>{
    const {events, isLoading, error} = useEventsData();
    
    const handleEventItemClick = (id)=>{
        alert(`Evento clickeado: ${id}`)
    }
    
    const renderEventsComponentes = ()=>{
        let eventFilter = events;
        if (searchValue.length > 0) {
            eventFilter = eventFilter.filter((item)=> item.name.toLocaleLowerCase().includes(searchValue))
        }
    
        return eventFilter.map((eventItem) => (
            <EventItem 
                key={`event-item-${eventItem.id}`} 
                name = {eventItem.name}
                info={eventItem.info}
                img={eventItem.images[0].url}
                onEventClick={handleEventItemClick}
                id = {eventItem.id}
            /> ))
           
        } 

        if(error){
            return <div>Ha ocurrido un error</div>
        }

        if(isLoading){
            return <div>Cargando resultados...</div>
        }


    return(
        <div>
            {renderEventsComponentes()}
        </div>
    )
}

export default Events;