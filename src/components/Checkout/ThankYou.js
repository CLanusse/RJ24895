import { Link } from "react-router-dom"


export const ThankYou = ({order}) => {

    return <div className="container my-5">
                <h2>Gracias por tu compra!</h2>
                <hr/>
                <h3>Tu número de orden es: {order}</h3>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
}