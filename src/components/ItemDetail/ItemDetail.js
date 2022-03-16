

export const ItemDetail = ({id, img, desc, nombre, precio}) => {

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <p>Precio: ${precio}</p>
        </div>
    )
}
