import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return (
        <Container className="my-5">
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </Container>
    )
}

export default ItemDetailContainer