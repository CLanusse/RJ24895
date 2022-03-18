import { useEffect, useState } from "react"


const Nosotros = () => {

    const [isMobile, setIsMobile] = useState(false)


    useEffect(() => {
        const checkMobile = (event) => {
            console.log(event)

            if (window.visualViewport.width <= 768) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        checkMobile()

        window.addEventListener('resize', checkMobile)

        return () => {
            window.removeEventListener('resize', checkMobile)
        }
        
    }, [])

    return (
        <div>
            <h2>Nosotros</h2>
            <hr/>
            {
                isMobile
                ? <h4>Estamos en Mobile</h4>
                : <h4>Estamos en Desktop</h4>
            }
        </div>
    )
}

export default Nosotros