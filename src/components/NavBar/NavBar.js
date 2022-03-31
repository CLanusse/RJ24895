import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

export const NavBar = () => {

    return (
        <header className="header">
            <Link to="/"><h1>LOGO</h1></Link>

            <nav className="header-nav">
                <Link to="/category/remeras" className="header-link">Remeras</Link>
                <Link to="/category/buzos" className="header-link">Buzos</Link>
                <Link to="/category/zapatillas" className="header-link">Zapatillas</Link>
                <CartWidget/>
            </nav>

        </header>
    )
}