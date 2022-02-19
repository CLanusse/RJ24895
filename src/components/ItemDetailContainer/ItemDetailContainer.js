
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- referencia al document
        const docRef = doc(db, "productos", itemId)
        // 2.- peticion del doc
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [])


    return (
        <div className='container my-5'>
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )
};
