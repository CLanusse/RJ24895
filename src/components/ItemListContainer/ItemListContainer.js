import { useState } from "react"
import { Boton } from "../../ejemplos/Boton/Boton"
import { Clicker } from "../../ejemplos/Clicker/Clicker"
import { Contenedor } from "../../ejemplos/Contenedor/Contenedor"


export const ItemListContainer = ( {greeting} ) => {

    const [clicker, setClicker] = useState(true)

    console.log(clicker)

    const mostrar = () => {
        setClicker(!clicker)
    }

    return (
        <Contenedor>
            <h2>{greeting}</h2>
            <hr/>
            <Boton click={mostrar}>Mostrar clicker</Boton>

            <hr/>

            { clicker === true ? <Clicker/> : null }
            
        </Contenedor>
    )
}