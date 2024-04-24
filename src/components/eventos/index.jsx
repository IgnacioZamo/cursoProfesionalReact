import EventItem from "./itemEvento"
import data from "../../data/events.json"



const {_embedded: {events}} = data;

const handleEventItemClick = (id)=>{
    alert(`Evento clickeado: ${id}`)
}

const renderEventsComponentes = ()=>{
    let eventFilter = events;
    return events.map((eventItem) => (
        <EventItem 
            key={`event-item-${eventItem.id}`} 
            name = {eventItem.name}
            info={eventItem.info}
            img={eventItem.images[0].url}
            onEventClick={handleEventItemClick}
            id = {eventItem.id}
        /> ))

} 

const Events = ()=>{
    return(
        <div>
            {renderEventsComponentes()}
        </div>
    )
}

export default Events;