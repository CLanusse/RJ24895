import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'

import { Nosotros } from './components/Nosotros'
import { Contacto } from './components/Contacto'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './context/CartContext'
import { Cart } from "./components/Cart/Cart";

function App() {

    return (

      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          
          <Routes>
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path='/productos/:catId' element={ <ItemListContainer/> }/>
            <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
            <Route path="/nosotros" element={ <Nosotros /> } />
            <Route path="/contacto" element={ <Contacto /> } />
            <Route path='/cart' element={ <Cart/> } />

            {/* <Route path='/404' element={ <Error404/> }/> */}
            <Route path='*' element={ <Navigate to='/'/> }/>
          </Routes>

          {/* <Footer/> */}
        </BrowserRouter>
      </CartProvider>
    )
}

export default App;
