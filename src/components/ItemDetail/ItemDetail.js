import ItemCount from "../ItemCount/ItemCount"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import './ItemDetail.css'
import { Button } from '@mui/material'

const ItemDetail = ({data}) => {
    return (
        <div>
            <Card sx={{ minWidth: 100 }}>
            <CardContent>
                <div className="item-card">
                    <div>
                        <img src={`/${data.image}`}/>
                    </div>
                    <div className="item-cards">
                        <p>{data.title}</p>
                        <span>Precio unidad: ${data.price}</span>
                        <span>Disponibles: {data.stock}</span>
                        <span>Descripción: {data.description}</span>
                        <ItemCount stock={data.stock}/>
                        <Button variant={'contained'}>Agregar al carrito</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
        </div>
    )
}

export default ItemDetail