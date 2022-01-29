import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'

function App() {

    return (
        <>
          <NavBar/>
          <ItemListContainer greeting="Otro mensaje Coder!"/>
        </>
    );
}

export default App;
