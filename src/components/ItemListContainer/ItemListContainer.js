import './ItemListContainer.css'

export const ItemListContainer = ( {greeting} ) => {

    return (
        <section className="item-list-container">
            <h2>{greeting}</h2>
            <hr/>
        </section>
    )
}