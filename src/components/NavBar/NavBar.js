import './NavBar.css'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <AppBar position="static" className='header-primary'>
            <Toolbar>
                <div className='container-logo'>
                    <img src="./vicentelopez_logo.jpg"/>
                </div>
                <ul className='navbar'>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'brown'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/">Productos</Link>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'brown'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/SinTACC">Sin TACC</Link>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'brown'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/Events">Eventos</Link>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'brown'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/AboutUs">Sobre nosotros</Link>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'brown'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/Contact">Contacto</Link>
                        </Button>
                    </li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar