import { useEffect } from "react"
import Modal from "../../ejemplos/Modal/Modal"


const Contacto = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log(e.nativeEvent)
    }

    // useEffect(() => {

    //     window.addEventListener('click', handleClick)

    //     return () => {
    //         window.removeEventListener('click',handleClick)
    //     }
    // }, [])

    return (
        <div onClick={handleClick}>
            <h2>Contacto</h2>
            <hr/>
            <Modal/>
        </div>
    )
}

export default Contacto