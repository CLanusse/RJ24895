import { useEffect } from "react"

const ItemCount = ({max = 10, cantidad, setCantidad, onAdd}) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const btnRestarConfig = {
        className: `btn ${cantidad > 0 ? 'btn-outline-primary' : 'btn-outline-danger'}`,
        disabled: cantidad === 0
    }


    return (
        <div>
            <button onClick={handleRestar} {...btnRestarConfig}>
                -
            </button>
            <span className="mx-2">{cantidad}</span>
            <button 
                className={`btn ${cantidad < max ? 'btn-primary' : 'btn-danger'}`}
                onClick={handleSumar}
                disabled={cantidad === max}
            >
                 +
                </button>
            <br/>
            <button 
                className="btn btn-success my-2" 
                onClick={onAdd}
                disabled={cantidad === 0}
            >
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount