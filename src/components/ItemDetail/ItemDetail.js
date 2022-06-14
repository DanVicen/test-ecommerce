import ItemCount from "../ItemCount/ItemCount"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import './ItemDetail.css'
import { Button } from '@mui/material'
import { useState, useContext } from "react"
import CartContext from '../../context/CartContext'

const ItemDetail = ({data}) => {
    
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)
    
    const { addProductToCart } = useContext(CartContext)

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
                        <Button 
                            variant='contained' 
                            onClick={() =>addProductToCart(data)}
                        >
                            Finalizar compra
                        </Button>}
                    </div>
                </div>
            </CardContent>
        </Card>
        </div>
    )
}

export default ItemDetail