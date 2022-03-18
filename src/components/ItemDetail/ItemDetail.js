import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"


export const ItemDetail = ({id, stock, img, desc, nombre, precio}) => {

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const itemToCart = {
            id,
            nombre,
            precio,
            img,
            cantidad
        }

        console.log(itemToCart)
    }

    return (
        <div className="container my-5">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <p>Precio: ${precio}</p>

            <ItemCount 
                max={stock} 
                cantidad={cantidad} 
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />
        </div>
    )
}
