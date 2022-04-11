import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
 
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()

    useEffect( () => {
        setLoading(true)

        // 1.- armar la referencia
        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef
        // 2.- llamar (async) a esa referencia
        getDocs(q)
            .then(resp => {
                const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                console.log(items)
                setProductos(items)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}