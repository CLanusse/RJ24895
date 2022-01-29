

export const Contenedor = ({children}) => {

    const styles = {
        margin: '0 auto',
        maxWidth: '1200px'
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}