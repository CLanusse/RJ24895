import { useState } from "react"



export const Form = () => {
 
    const [values, setValues] = useState({
        nombre: '',
        email: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Submit")
        console.log(values)
    }

    return (
        <div className="my-5 container">
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

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    )
}



// form for dummies

// const [nombre, setNombre] = useState('')
// const [email, setEmail] = useState('')

// const handleNombre = (e) => {
//     setNombre(e.target.value)
// }
// const handleEmail = (e) => {
//     setEmail(e.target.value)
// }

// const handleSubmit = (e) => {
//     e.preventDefault()

//     console.log("Submit")
//     console.log({
//         nombre, email
//     })
// }