import ItemCount from "../ItemCount/ItemCount"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import './ItemDetail.css'
import { Button } from '@mui/material'
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({data}) => {
    
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)
    
    const addProductToCart = () => {
        console.log("Producto a agregar", data)
        console.log("Cantidad", cantidad)
    }

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
                        {!showButton ?
                        <ItemCount 
                            setCantidad={setCantidad}
                            stock={data.stock}
                            cantidad={cantidad}
                            setShowButton={setShowButton}
                        />
                        :
                        <Button variant='contained'><Link style={{ color: '#FFF' }}to='/cart'>Finalizar compra</Link></Button>}
                    </div>
                </div>
            </CardContent>
        </Card>
        </div>
    )
}

export default ItemDetail