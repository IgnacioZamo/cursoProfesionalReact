import EventItem from "./itemEvento"
import data from "../../data/events.json"

const {_embedded: {events}} = data;

const eventsComponentes = events.map((eventItem) => (
    <EventItem 
        key={`event-item-${eventItem.id}`} 
        name = {eventItem.name}
        info={eventItem.info}
        img={eventItem.images[0].url}
    /> ))

const Events = ()=>{
    return(
        <div>
            {eventsComponentes}
        </div>
    )
}

export default Events;