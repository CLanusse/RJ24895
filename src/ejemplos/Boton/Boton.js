import './Boton.scss'

export const Boton = ( {children, click} ) => {

    return (
        <button className='my-boton' onClick={click}>{children}</button>
    )
}