import { blue } from '@mui/material/colors';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardList from './components/CardList/CardList'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react'

function App() {

  return (
    //JSX
    <div className="App">
      <NavBar />
      <div className='general-container'>
        <div className='seccion-style'><img src="./seccion_tartas.jpg"/></div>
        <div>
        <ItemListContainer products={productos}/>
        </div>
        <div className='seccion-style'><img src="./seccion_lunch.jpg"/></div>
        <CardList/>
      </div> 
    </div>
  );
}

export default App;
