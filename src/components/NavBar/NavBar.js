import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const NavBar = () => {
    return (
        <AppBar position="static" className='header-primary'>
          <Toolbar>
            <div className='container-logo'>
                <img src="./vicentelopez_logo.jpg"/>
            </div>
            <ul className='navbar'>
                <li>
                    <button disableRipple style={{ backgroundColor: 'transparent'}} variant='text' className='navbar__btn'>Productos</button>
                </li>
                <li>
                    <button disableRipple style={{ backgroundColor: 'transparent'}} variant='text' className='navbar__btn'>Sin TACC</button>
                </li>
                <li>
                    <button disableRipple style={{ backgroundColor: 'transparent'}} variant='text' className='navbar__btn'>Eventos</button>
                </li>
                <li>
                    <button disableRipple style={{ backgroundColor: 'transparent'}} variant='text' className='navbar__btn'>Contacto</button>
                </li>
            </ul>
            <Button>
                <AddShoppingCartIcon color="red" />
            </Button>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar