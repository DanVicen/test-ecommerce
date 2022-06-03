import './Card.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const CardItem = (props) => {
    const { image, title, price, stock, id } = props
    
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`}/>
                    </div>
                    <p>{title}</p>
                    <span>${price}</span>
                    <div>
                        <ItemCount stock={stock}/>
                    </div>
                    <Button variant={'contained'}>
                        <Link to={`/product/${id}`}>Ver detalle</Link>
                    </Button>
                    <Button variant={'contained'}>Agregar al carrito</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem