import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contacto from "./components/Contacto/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";

function App() {

    return (
        <CartProvider>
            <BrowserRouter>
              <NavBar/>

              <Routes>
                <Route path="/" element={ <ItemListContainer/> }/>
                <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
                <Route path="/contacto" element={ <Contacto/> }/>
                <Route path="/nosotros" element={ <Nosotros/> }/>
                <Route path="/cart" element={ <Cart/> }/>

                <Route path="*" element={ <Navigate to="/"/> }/>
              </Routes>

              {/* Footer */}

            </BrowserRouter>
        </CartProvider>

    );
}

export default App;
