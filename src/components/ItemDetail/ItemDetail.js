import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import Select from "../Select/Select"

const options = [
    {value: 'L', text: 'Large'},
    {value: 'M', text: 'Medium'},
    {value: 'S', text: 'Small'}
]
// const options = [
//     {value: 'rojo', text: 'Rojo'},
//     {value: 'verde', text: 'Verde'},
//     {value: 'azul', text: 'Azul'},
//     {value: 'violeta', text: 'Violeta'},
//     {value: 'negro', text: 'Negro'},
// ]

const ItemDetail = ({id, nombre, desc, img, precio, category, stock}) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    const [cantidad, setCantidad] = useState(1)
    const [color, setColor] = useState('L')


    const agregarAlCarrito = () => {
        const itemToAdd = {
            id,
            nombre,
            precio,
            img,
            color,
            cantidad
        }

        console.log(itemToAdd)
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <h4>Precio: ${precio}</h4>
            <small>Stock disponible: {stock}</small>
            <Select 
                options={options}
                onSelect={setColor}
            />
            
            <ItemCount 
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                onAdd={agregarAlCarrito}
            />

            <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
            {/* <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Volver</button> */}
        </div>
    )
}

export default ItemDetail