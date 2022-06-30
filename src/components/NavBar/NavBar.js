import './NavBar.css'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import CartWidget from '../CartWidget/CartWidget'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState, useContext } from 'react'
import { categorias } from '../../api/products'
import ThemeSwitch from './ThemeSwitch'
import { ThemeContext } from '../../context/ThemeContext'

const NavBar = () => {

    const { darkTheme } = useContext(ThemeContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <AppBar position="static" className={`header-primary ${darkTheme ? 'dark-mode' : ''}`}>
            <Toolbar>
                <div className='container-logo'>
                    <img src="/1.png"/>
                </div>
                <ul className='navbar'>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'blue'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/" style={{ textDecoration: 'none', color:'#FFF' }}>Inicio</Link>
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
                            style={{ backgroundColor: 'blue'}}
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
                                return <MenuItem onClick={handleClose}><Link to={`/products/${cat.id}`}  style={{ color: 'blue', textDecoration: 'none', fontSize: '16px', fontWeight: '100' }}>{cat.name}</Link></MenuItem>
                            })}
                        </Menu>
                    </li>
                    <li>
                        <Button 
                            id="basic-button"
                            disableRipple 
                            style={{ backgroundColor: 'blue'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/products/1" style={{ textDecoration: 'none', color:'#FFF' }}>Sin TACC</Link>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'blue'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/Events" style={{ textDecoration: 'none', color:'#FFF' }}>Eventos</Link>
                        </Button>
                    </li>
                    <li>
                        <Button 
                            disableRipple 
                            style={{ backgroundColor: 'blue'}} 
                            variant='contained' 
                            className='navbar__btn'
                        >
                            <Link to="/Contact" style={{ textDecoration: 'none', color:'#FFF' }}>Contacto</Link>
                        </Button>
                    </li>
                </ul>
                <ThemeSwitch />
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar