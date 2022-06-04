import './NavBar.css'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import CartWidget from '../CartWidget/CartWidget'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import { categorias } from '../../api/products'

const NavBar = () => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <AppBar position="static" className='header-primary'>
            <Toolbar>
                <div className='container-logo'>
                    <img src="/vicentelopez_logo.jpg"/>
                </div>
                <ul className='navbar'>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'brown'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/" style={{ color: '#FFF' }}>Inicio</Link>
                        </Button>
                    </li>
                    <li>
                    <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            disableRipple
                            variant='text' 
                            className='navbar__btn'
                            style={{ backgroundColor: 'brown'}}
                        >
                            Productos
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {categorias
                            .filter(cat => !cat.mostrarSeparado)
                            .map( (cat) => {
                                return <MenuItem onClick={handleClose}><Link to={`/products/${cat.id}`}  style={{ color: 'brown' }}>{cat.name}</Link></MenuItem>
                            })}
                        </Menu>
                    </li>
                    <li>
                        <Button 
                            id="basic-button"
                            disableRipple 
                            style={{ backgroundColor: 'brown'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/products/1" style={{ color: '#FFF' }}>Sin TACC</Link>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'brown'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/Events" style={{ color: '#FFF' }}>Eventos</Link>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'brown'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/Contact" style={{ color: '#FFF' }}>Contacto</Link>
                        </Button>
                    </li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar