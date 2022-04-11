import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
            .then(doc => {
                setItem( {id: doc.id, ...doc.data()} )
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