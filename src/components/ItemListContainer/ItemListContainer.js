import { Producto } from "../../ejemplos/Producto"

export const ItemListContainer = ( {greeting} ) => {

    const obj = {
        titulo: 'Producto 1',
        desc: 'Lorem ipsum',
        precio: 2500
    }

    return (
        <section className="item-list-container">
            <h2>{greeting}</h2>
            <hr/>

            <Producto title={obj.titulo} content={obj.desc}/>
            <Producto title="Producto 2" content="Lorem ipsum asdf"/>
        </section>
    )
}