import ItemDetail from "../ItemDetail/ItemDetail"
import { producto } from '../ProductsListContainer/ProductsListContainer'
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })
    }
    
    useEffect (() => {
        getItem()
        .then( (res) => {
            setProduct(res)
        })
    }, [])
    
    return(
        <>
        <div>
            <h2>Prototipo pantalla detalle</h2>
        </div>
        <ItemDetail data={product} />
        </>
    )
}

export default ItemDetailContainer