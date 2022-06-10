import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './CartWidget.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'

const CartWidget = () =>  {
    const { cartListItems } = useContext(CartContext)
    
    {cartListItems.map( () => {
                
    
    return(
        <div className='cart-container-icon'>
            <ShoppingCartIcon color={'primary'}/>
        </div>
    )
})}
}

export default CartWidget