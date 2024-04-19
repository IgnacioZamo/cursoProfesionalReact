const Events = ({info, name, img })=>{
    return (
        <div>
            <h4>{name}</h4>
            <p>{info}</p>
            <img src={img} alt={`Imagen relacionada a: ${name}`} height={200} />
        </div>
    )
}

export default Events