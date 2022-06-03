import ProductsListContainer from "../components/ProductsListContainer/ProductsListContainer"

const Home = () => {
    return(
        <div className='general-container'>
            <div className='seccion-style'><img src="./seccion_tartas.jpg"/></div>
            <ProductsListContainer />
        </div>
    )
}

export default Home