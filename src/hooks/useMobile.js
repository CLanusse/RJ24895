import { useEffect, useState } from "react"



export const useMobile = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
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

    return {isMobile}
}