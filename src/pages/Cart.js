import { useContext, useState } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cartListItems, totalPrice, removeProductFromCart, getTotal } = useContext(CartContext)
    
    const [quantity, setQuantity] = useState (1)

    const handleDelete = (product) => {
        removeProductFromCart(product)
    }

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            }
        } ),
        total: totalPrice
    })

    return(
            <Container className='container-general'> 
                <h1>Tu Carrito</h1>
                <div className='cart-section'>
                    <div className='col-cart-table__head'>
                        <h2>Imagen</h2>
                        <h2>Producto</h2>
                        <h2>Precio</h2>
                        <h2>Cantidad</h2>
                        <h2>Subtotal</h2>
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
                                    <h3>{item.title}</h3>
                                </div>
                                <div className='cart-table__content-price'>
                                    <h3>$ {item.price}</h3>
                                </div>
                                <div className='cart-table__content-quantity'>
                                    <h3>{item.quantity}</h3>
                                </div>
                                <div className='cart-table__content'>
                                    <h3>${item.amount || item.price}</h3>
                                </div>
                                
                                <div className='cart-table__content-price'>
                                    <button onClick={() => handleDelete(item)}>
                                        <Delete />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <div className='cart-footer'>
                            <div>
                                <Button variant='contained'><Link to="/" style={{ textDecoration: 'none', color:'#FFF' }}>Continuar comprando</Link></Button>
                            </div>
                            <div className='cart-checkout__total'>
                                <span>Total compra $ {getTotal()}</span>
                            </div>
                            <div>
                                <Button variant='contained'>Finalizar compra</Button>
                            </div>
                    </div>
                </div>
        </Container>
    )
}

export default Cart