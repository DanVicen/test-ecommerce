import { useContext } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cartListItems, totalPrice } = useContext(CartContext)
    return(
            <Container className='container-general'> 
                <h2>Tu Carrito: </h2>
                <div className='cart-section'>
                    <div className='col-cart-table__head'>
                        <h2></h2>
                        <h2>Producto</h2>
                        <h2>Precio</h2>
                        <h2>Cantidad</h2>
                        <h2>Borrar</h2>
                    </div>
                    {cartListItems.map( (item) => {
                        const {id, title, image, price, quantity} = item
                        return(
                            <div className='cart-table__content' key={id}>
                                <div className='cart-table__content-img'>
                                    <img src={`/${image}`} 
                                        style={{
                                            width: 80,
                                        }}    
                                />
                                </div>
                                <div className='cart-table__content-title'>
                                    <p>{title}</p>
                                </div>
                                <div className='cart-table__content-price'>
                                    <p>$ {price}</p>
                                </div>
                                <div className='cart-table__content-quantity'>
                                    <p>{quantity}</p>
                                </div>
                                <div className='cart-table__content-price'>
                                    <button className='btn-delete'>
                                        <Delete />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <div className='cart-footer'>
                            <div>
                                <Button variant='contained'> <Link to="/" style={{ textDecoration: 'none', color:'#FFF' }}>Continuar comprando</Link></Button>
                            </div>
                            <div className='cart-checkout__subtotal'>
                                <p>Subtotal</p>
                                <span>$ {totalPrice}</span>
                            </div>
                            <div className='cart-checkout__total'>
                                <p>Total</p>
                                <span>$ {totalPrice}</span>
                            </div>
                            <div>
                                <Button variant='contained' >Finalizar compra</Button>
                            </div>
                    </div>
                </div>
        </Container>
    )
}

export default Cart