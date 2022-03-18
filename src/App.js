import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Modal from "./ejemplos/Modal/Modal";

function App() {

    return (
        <BrowserRouter>

          <NavBar/>
          {/* <Modal/> */}

          <Routes>
              <Route path="/" element={ <ItemListContainer/> }/>
              <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>
              <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
              <Route path="/nosotros" element={ <Nosotros/> }/>
              <Route path="/contacto" element={ <Contacto/>}/>

              <Route path="*" element={ <Navigate to="/"/> } />
              {/* <Route path="*" element={ <Error404/> } /> */}
          </Routes>
          
        </BrowserRouter>
    );
}

export default App;
