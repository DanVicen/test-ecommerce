export const categorias = [
    {
        id: 1,
        name: 'Sin TACC',
        mostrarSeparado: true,
        image: "seccion_celiacos.jpg",
        backgroundColor: 'brown'
    }, 
    {
        id: 2, 
        name: 'Lunch',
        image: "seccion_lunch.jpg",
        backgroundColor: 'brown'
    },
    {
        id: 3, 
        name: 'Dulces',
        image: "seccion_dulces.jpg"
    },
    {
        id: 4, 
        name: 'Salados',
        image: "seccion_salados.jpg"
    },
    {
        id: 5, 
        name: 'Pastelería',
        image: "seccion_pasteleria.jpg"
    },
    {
        id: 6, 
        name: 'Chocolates',
        image: "seccion_chocolates.jpg"
    },
]

const productos = [
    {
        id: 1,
        title: 'Alfajor de Maicena',
        price: 160,
        image: 'Maicena-celiacos.jpg',
        stock: 5,
        description: '',
        categoryId: 1
    },
    {
        id: 2,
        title: 'Brownie Individual',
        price: 1500,
        image: 'Brownie-celiacos.jpg',
        stock: 5,
        description: '',
        categoryId: 1
    },
    {
        id: 3,
        title: 'Lemon Pie',
        price: 1300,
        image: 'Lemon-celiacos.jpg',
        stock: 5,
        description: '',
        categoryId: 1
    },
    {
        id: 4,
        title: 'Mousse',
        price: 1800,
        image: 'Mousse-celiacos.jpg',
        stock: 5,
        description: '',
        categoryId: 1
    },
    {
        id: 5,
        title: 'Tableta chocolate blanco con cookies',
        price: 300,
        image: 'Tableta-chocolate-blanco-con-cookies.jpg',
        stock: 5,
        description: '',
        categoryId: 6,
    },
    {
        id: 6,
        title: 'Tarta de coco',
        price: 800,
        image: 'Tarta-de-coco.jpg',
        stock: 5,
        description: '',
        categoryId: 5,
    },
    {
        id: 7,
        title: 'Sandwiches Triples Base de Jamón Cocido',
        price: 180,
        image: 'sandwichs-miga.jpg',
        stock: 5,
        description: '',
        categoryId: 2,
    },
    {
        id: 8,
        title: 'Bizcochitos x 250g',
        price: 450,
        image: 'Bizcochitos-o-cuernitos-en-bolsita-de-250-grs.jpg',
        stock: 5,
        description: '',
        categoryId: 4,
    },
]

export const fetchProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const fetchProductsByCategory = (categoryId) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const filteredProducts = productos.filter(product => product.categoryId === categoryId)
            resolve(filteredProducts)
        }, 2000)
    })
}