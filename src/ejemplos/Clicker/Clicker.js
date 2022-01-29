import { Boton } from "../Boton/Boton"
import { useState, useEffect } from 'react'


export const Clicker = () => {

    const [clicks, setClicks] = useState(0)

    const sumarClick = () => {
        setClicks( clicks + 1)
    }

    useEffect(() => {

        const aumentar = () => {
            console.log("click")
        }

        window.addEventListener('click', aumentar)

        return () => {
            window.removeEventListener('click', aumentar)
        }

    }, [])

    return (
        <>
            <Boton click={sumarClick}>Click me!</Boton>
            <p>Clicks: {clicks}</p>
            <p>F y H último click: { new Date().toLocaleString() }</p>
        </>
    )
}