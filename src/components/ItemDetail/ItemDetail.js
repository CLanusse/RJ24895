import { useNavigate } from "react-router-dom"


const ItemDetail = ({id, nombre, desc, img, precio, category, stock}) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <h4>Precio: ${precio}</h4>
            <small>Stock disponible: {stock}</small>

            <hr/>
            <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
            {/* <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Volver</button> */}
        </div>
    )
}

export default ItemDetail