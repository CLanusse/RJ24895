
const ItemCount = ( {max = 10, cantidad, setCantidad, handleAgregar} ) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleRestar}>-</button>
            <span className="mx-3">{cantidad}</span>
            <button className="btn btn-primary" onClick={handleSumar}>+</button>
            <br/>
            <button className="btn btn-success my-2" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount