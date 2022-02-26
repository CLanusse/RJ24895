import { collection, addDoc, Timestamp, updateDoc, doc, getDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"



export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generarOrden = () => {
        const orden = {
            comprador: values,
            items: cart,
            total: totalCart(),
            fyh: Timestamp.fromDate(new Date())
        } 

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((resp) => {
                
                cart.forEach((item) => {
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                        .then((dbDoc) => {
                            updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                        })
                })

                setOrderId(resp.id)
                vaciarCart()
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 5) {
            alert("El nombre es demasiado corto")
            return
        }
        if (values.email.length < 7) {
            alert("El email es inválido")
            return
        }
        if (values.tel.length < 8) {
            alert("El teléfono es inválido")
            return
        }
        
        generarOrden()
    }


    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Gracias por tu compra!</h2>
                <hr/>
                <h3>Tu número de orden es: {orderId}</h3>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Tu email"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <input
                    className="form-control my-2"
                    type='tel'
                    placeholder="Tu teléfono"
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                />

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    )
}



// ejemplo addDoc
// addDoc(ordersRef, orden)
// .then((resp) => {
    
//     cart.forEach((item) => {
//         const docRef = doc(db, 'productos', item.id)
//         getDoc(docRef)
//             .then((dbDoc) => {
//                 updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
//             })
//     })

//     setOrderId(resp.id)
//     vaciarCart()
// })
// .catch((err) => {
//     console.log(err)
// })