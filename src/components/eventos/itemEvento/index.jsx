const Events = ({id, info, name, img, onEventClick })=>{
    return (
        <div >
            <h4>{name}</h4>
            <p>{info}</p>
            <img src={img} alt={`Imagen relacionada a: ${name}`} height={200} /> <br />
            <button onClick={(e)=>{
                e.stopPropagation(); //para que el evento no se propage por el padre
                onEventClick (id)}} >Mas info</button>
        </div>
    )
}

export default Events