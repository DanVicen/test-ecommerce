import './Card.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'

const CardItem = (props) => {
    const { image, title, price } = props
    console.log("Propiedades de Card: ", props)
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`}/>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button variant={'outlined'}>Detalle</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem