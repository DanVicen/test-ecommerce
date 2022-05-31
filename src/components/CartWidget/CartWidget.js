import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './CartWidget.css'

const CartWidget = () =>  {
    return(
        <div className='cart-container-icon'>
            <ShoppingCartIcon color={'primary'}/>
        </div>
    )
}

export default CartWidget