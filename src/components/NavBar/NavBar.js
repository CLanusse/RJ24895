import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
        <header className="header">
            
            <Link className="header-link" to="/"><h1>LOGO</h1></Link>

            <nav className="header-nav">
                <Link className="header-link" to="/productos/remeras">Remeras</Link>
                <Link className="header-link" to="/productos/zapatillas">Zapatillas</Link>
                <Link className="header-link" to="/productos/buzos">Buzos</Link>
            </nav>
        </header>
    )
}