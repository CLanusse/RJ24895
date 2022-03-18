import { useEffect, useState } from "react"


const Modal = () => {

    const [showModal, setShowModal] = useState(true)

    const closeModal = () => {
        setShowModal(false)
    }

    const stopProp = (e) => {
        e.stopPropagation()
    }

    useEffect(() => {

        const timer = setTimeout(() => {
            closeModal()
        }, 5000)

        return () => {
            window.clearTimeout(timer)
        }
    }, [])

    return (
        <>
            {
                showModal &&
                    <div className="modal-container" onClick={closeModal}>
                        <div className="modal-m" onClick={stopProp}>
                            <h2>Hola Mundo!</h2>
                            <p>Soy un modal</p>
                            <hr/>
                            <button onClick={closeModal}>Click para cerrarme</button>
                        </div>
                    </div>
            }
        </>
    )
}

export default Modal