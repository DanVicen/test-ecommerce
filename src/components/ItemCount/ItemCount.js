import { useState } from 'react'
import { Button } from '@mui/material'
import './ItemCount.css'

const ItemCount = ({ cantidad, setCantidad, setShowButton, stock }) => {
    //const { image, title, price, stock } = props

    const addCount = () => {
        if (cantidad + 1 > stock) {
            alert("No hay stock suficiente")
            return
        }
        setCantidad(cantidad + 1)
    }

    const removeCount = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div className='custom-count'>
                <Button onClick={removeCount}>-</Button>
                <p>{cantidad}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            {setShowButton &&
                <Button variant='contained' onClick={() => setShowButton(true)}>Agregar al carrito</Button>
            }
        </>
    )
}

export default ItemCount