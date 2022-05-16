import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const NavBar = () => {
    return (
        <AppBar position="static">
          <Toolbar>
            <div className='conainer-logo'>
                <img src="./logo_cms.png"/>
            </div>
            <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>Products</button>
                </li>
                <li>
                    <button>Sales</button>
                </li>
            </ul>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar