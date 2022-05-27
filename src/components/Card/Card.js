import './Card.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'

const CardItem = (props) => {
    const { image, title, price, stock } = props
    
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
                    <Button variant={'outlined'}>Agregar al carrito</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem