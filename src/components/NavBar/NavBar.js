import './NavBar.css'
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
                        <Button disableRipple style={{ backgroundColor: 'brown'}} variant='contained' className='navbar__btn'>Productos</Button>
                    </li>
                    <li>
                        <Button disableRipple style={{ backgroundColor: 'brown'}} variant='contained' className='navbar__btn'>Sin TACC</Button>
                    </li>
                    <li>
                        <Button disableRipple style={{ backgroundColor: 'brown'}} variant='contained' className='navbar__btn'>Eventos</Button>
                    </li>
                    <li>
                        <Button disableRipple style={{ backgroundColor: 'brown'}} variant='contained' className='navbar__btn'>Sobre nosotros</Button>
                    </li>
                    <li>
                        <Button disableRipple style={{ backgroundColor: 'brown'}} variant='contained' className='navbar__btn'>Contacto</Button>
                    </li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar