import { useEffect } from "react"


const Nosotros = () => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log("Click en componente")
        // console.log(e)
        // console.log(e.nativeEvent)
    }

    useEffect(() => {
        window.addEventListener('click', () => {
            console.log('Window clickeado')
        })
    }, [])

    return (
        <div onClick={handleClick}>
            <h2>Nosotros</h2>
            <hr/>
        </div>
    )
}

export default Nosotros