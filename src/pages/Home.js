import ProductsListContainer from "../components/ProductsListContainer/ProductsListContainer"

const Home = () => {
    return(
        <div className='general-container'>
            <div className='seccion-style'><img src="./seccion_tartas.jpg"/></div>
            <div className='seccion-style'><img src="./seccion_tortas.jpg"/></div>
            <div className='seccion-style'><img src="./seccion_chocolates.jpg"/></div>
            <div className='seccion-style'><img src="./seccion_dulces.jpg"/></div>
            <div className='seccion-style'><img src="./seccion_salados.jpg"/></div>
            <div className='seccion-style'><img src="./seccion_lunch.jpg"/></div>
            <div className='seccion-style'><img src="./seccion_celiacos.jpg"/></div>
            <ProductsListContainer />
        </div>
    )
}

export default Home