import './Card.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const CardItem = (props) => {
    const { image, title, price, stock, id } = props
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    
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
                    <p>${price}</p>
                    <div>
                        <ItemCount 
                            cantidad={cantidad}
                            setCantidad={setCantidad}    
                        />
                    </div>
                    <Button onClick={() => {
                        navigate(`/product/${id}`, {
                            state: props,
                        })
                    }}>
                        <Button variant={'contained'}>Ver detalle</Button>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem