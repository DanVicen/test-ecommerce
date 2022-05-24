import { useState } from 'react'
import { Button } from '@mui/material'
import './ItemCount.css'

const ItemCount = (props) => {    

    const [count, setCount] = useState(1)
    const { image, title, price, stock } = props
    
    const addCount = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    
    const removeCount = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <div className='custom-count'>
            <Button onClick={removeCount}>-</Button>
            <p>{count}</p>
            <Button onClick={addCount}>+</Button>
        </div>
    )
}

export default ItemCount