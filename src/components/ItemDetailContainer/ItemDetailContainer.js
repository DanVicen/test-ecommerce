import ItemDetail from "../ItemDetail/ItemDetail"
import product from '../ProductsListContainer/ProductsListContainer'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})
    
    //const getItem = () => {
    //    return new Promise( (resolve, reject) => {
    //        setTimeout(() => {
    //            resolve(producto)
    //        }, 2000)
    //    })
    //}
    
    useEffect (() => {
        //getItem()
        //.then( (res) => {
        //    setProduct(res)
        //})
        setProduct(productFilter)    
    }, [])

    const productFilter = product.find( (product) => {
        return product.id == id
    })
    
    return(
        <>
            <div>
            <ItemDetail data={product} />
            </div>
        </>
    )
}

export default ItemDetailContainer