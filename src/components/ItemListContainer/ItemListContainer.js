import { useState, useEffect } from "react"

const ItemListContainer = (props) => {

    const [products, setProducts] = useState ([])
    const productos= [
        {
            id: 1,
            title: 'Tarta de coco',
            price: 2500,
            image: 'Tarta-de-coco.jpg',
            stock: 5,
            description: ''
        },
        {
            id: 2,
            title: 'Tarta de frambuesa',
            price: 1500,
            image: 'Tarta-de-Frambuesa.jpg',
            stock: 5,
            description: ''
        },
        {
            id: 3,
            title: 'Tarta de ricota',
            price: 2000,
            image: 'Tarta-de-ricota.jpg',
            stock: 5,
            description: ''
        },
        {
            id: 4,
            title: 'Tarta de manzana',
            price: 2000,
            image: 'Tarta-de-manzana.jpg',
            stock: 5,
            description: ''
        }
    ]

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect ( () => {
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
        .catch( (err) => {
        })
    
    }, [])
}

export default ItemListContainer