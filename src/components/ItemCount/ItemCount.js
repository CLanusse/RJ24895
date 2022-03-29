
const ItemCount = ({max = 10, cantidad, setCantidad, onAdd}) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleRestar}>-</button>
            <span className="mx-2">{cantidad}</span>
            <button className="btn btn-primary" onClick={handleSumar}>+</button>
            <br/>
            <button className="btn btn-success my-2" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount