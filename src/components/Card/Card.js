import './Card.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CardItem = (props) => {
    const { image, title, price, stock, id } = props
    const navigate = useNavigate()
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img
                            src={image ? `/${image}` : null}
                            resizeMode="stretch"
                        />
                    </div>
                    <p>{title}</p>
                    <span>${price}</span>
                    <div>
                        <ItemCount stock={stock}/>
                    </div>
                    <Button onClick={() => {
                        navigate(`/product/${id}`, {
                            state: props,
                        })
                    }} variant={'contained'}>
                        <span>Ver detalle</span>
                    </Button>
                    <Button variant={'contained'}>Agregar al carrito</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem