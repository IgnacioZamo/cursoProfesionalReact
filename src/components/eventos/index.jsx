import EventItem from "./itemEvento"
import data from "../../data/events.json"


const Events = ({searchValue})=>{
    const {_embedded: {events}} = data;
    
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
    return(
        <div>
            {renderEventsComponentes()}
        </div>
    )
}

export default Events;