import { blue } from '@mui/material/colors'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SinTacc from './pages/SinTacc'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Events from './pages/Events'
import ProductsListContainer from './components/ProductsListContainer/ProductsListContainer'
import Cart from './pages/Cart'
import ThemeProvider from './context/ThemeContext'
import { ThemeContext } from '@emotion/react'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    //JSX
    <div className="App">
      <CartProvider>
      <ThemeProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/SinTacc' element={<SinTacc />}/>
            <Route path='/Events' element={<Events />}/>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='/product/:id' element={<Detail />}/>
            <Route path='/products/:categoryId' element={<ProductsListContainer />}/>
            <Route path='*' element={<h1>Página no encontrada</h1>}/>
            <Route path='/Cart' element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
