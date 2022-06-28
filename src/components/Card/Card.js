import './Card.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import CartContext from '../../context/CartContext'

const CardItem = (props) => {
    const { image, title, price, stock, id } = props
    
    const navigate = useNavigate()
    
    const [cantidad, setCantidad] = useState(1)
    
    const { darkTheme } = useContext(ThemeContext) 

    const { addProductToCart } = useContext(CartContext)
    
    return(
        <Card sx={{ maxWidth: 275 }} className={`item-card-container ${darkTheme ? 'dark-mode' : ''}`}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img
                            src={image ? `/${image}` : null}
                            resizeMode="stretch"
                        />
                    </div>
                    <p>{title}</p>
                    <p>${price}</p>
                    <div>
                        <ItemCount
                            stock={stock} 
                            cantidad={cantidad}
                            setCantidad={setCantidad}    
                        />
                    </div>
                    <Button variant="contained" onClick={() => {
                        navigate(`/product/${id}`, {
                            state: props,
                        })
                    }}>
                        Ver detalle
                    </Button>
                    <Button
                        style={{
                            marginTop: 4,
                        }} 
                        variant={'contained'}
                        onClick={() =>addProductToCart(props)}
                    >
                            Agregar al pedido
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem