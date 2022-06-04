import { useState, useEffect } from "react"
import CardList from '../CardList/CardList'
import { fetchProductsByCategory } from '../../api/products'
import { useParams } from 'react-router-dom'

const ProductsListContainer = () => {

    const [products, setProducts] = useState ([])
    const [loadingProducts, setLoadingProducts] = useState(false)
    const { categoryId } = useParams()
    
    useEffect ( () => {
        setLoadingProducts(true)
        fetchProductsByCategory(parseInt(categoryId))
        .then( (response) => {
            setLoadingProducts(false)
            setProducts(response)
        })
        .catch( (err) => {
            setLoadingProducts(false)
        })
    
    }, [categoryId])

    if (loadingProducts) {
        return (
            <h1>CARGANDO</h1>
        )
    }

    return (
        <div>
            <CardList products={products} title={''} />
        </div>
    )
}

export default ProductsListContainer