import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import { PokeApi } from "./ejemplos/PokeApi/PokeApi";

function App() {

    return (
        <>
          <NavBar/>

          <PokeApi/>  
          {/* <ItemListContainer/> */}
        </>
    );
}

export default App;
