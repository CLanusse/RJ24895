import { useEffect, useState } from "react"


const Contacto = () => {

    const [isMobile, setIsMobile] = useState(false)
    
    const checkIsMobile = () => {
        console.log(window.visualViewport.width)

        if (window.visualViewport.width <= 552) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        checkIsMobile()

        window.addEventListener('resize', checkIsMobile)

        return () => {
            window.removeEventListener('resize', checkIsMobile)
        }
    }, [])

    return (
        <div>
            <h2>Contacto</h2>
            <hr/>

            {
                isMobile
                ? <h4>Estoy en Mobile</h4>
                : <h4>Estoy en Desktop</h4>
            }
        </div>
    )
}

export default Contacto