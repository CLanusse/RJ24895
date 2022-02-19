import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link, Navigate } from "react-router-dom"


export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    // render si el cart está vacío
    if (cart.length === 0) {
        return <div className="container my-4">
                    <h2>Tu carrito está vacío</h2>
                    <Link to="/" className="btn btn-primary">Volver</Link>
                </div>
    }

    // if (cart.length === 0) {
    //     return <Navigate to="/"/>
    // }

    return (
        <>     
            <div className="container my-4">
                <h2>Tu compra</h2>
                <hr/>

                {
                    cart.map((item) => (
                        <div key={item.id}>
                            <h4>{item.nombre}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.cantidad * item.precio}</p>
                            <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
                                <BsFillTrashFill/>
                            </button>
                        </div>
                    ))
                }

                <hr/>
                <h2>Total: ${totalCart()}</h2>

                <div className="my-2">
                    <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
                    <button className="btn btn-success mx-2">Terminar mi compra</button>
                </div>
            </div>
        
        </>
    )
}