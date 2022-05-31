import { blue } from '@mui/material/colors'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CardList from './components/CardList/CardList'
import ProductsListContainer from './components/ProductsListContainer/ProductsListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    //JSX
    <div className="App">
      <NavBar />
      <div className='general-container'>
        <div className='seccion-style'><img src="./seccion_tartas.jpg"/></div>
        <ProductsListContainer />
        <ItemDetailContainer />
      </div> 
    </div>
  );
}

export default App;
