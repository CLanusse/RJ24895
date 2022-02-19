import {Link} from 'react-router-dom'
import { useMobile } from '../../hooks/useMobile'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {


    return (
        <header className="header">
            <Link to='/' style={{color: '#FFF'}}>
                <h1>LOGO</h1>
            </Link>

            
            <nav className="header-nav">
                <Link to='/productos/remeras' className='header-link'>Remeras</Link>
                <Link to='/productos/zapatos' className='header-link'>Zapatos</Link>
                <Link to='/productos/gorros' className='header-link'>Gorros</Link>
                <CartWidget/>
            </nav>
            
        </header>
    )
}