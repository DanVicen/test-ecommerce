import CardItem from '../Card/Card'
import { Grid } from '@mui/material'

const CardList = ({title}) => {
    const productos= [
        {
            title: 'Tarta de coco',
            price: 2500,
            image: 'Tarta-de-coco.jpg',
            stock: 5
        },
        {
            title: 'Tarta de frambuesa',
            price: 1500,
            image: 'Tarta-de-Frambuesa.jpg',
            stock: 5
        },
        {
            title: 'Tarta de ricota',
            price: 2000,
            image: 'Tarta-de-ricota.jpg',
            stock: 5
        },
        {
            title: 'Tarta de manzana',
            price: 2000,
            image: 'Tarta-de-manzana.jpg',
            stock: 5
        }
    ]
    return(
        <>
        <h2>{title}</h2>
        <Grid container >
            <Grid item md={3}>
                <CardItem title={"Tarta de coco"} price={2500} image={"Tarta-de-coco.jpg"} stock={5}/>  
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Tarta de frambuesa"} price={1500} image={"Tarta-de-Frambuesa.jpg"} stock={5}/>  
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Tarta de ricota "} price={2000} image={"Tarta-de-ricota.jpg"} stock={5}/>  
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Tarta de manzana "} price={2000} image={"Tarta-de-manzana.jpg"} stock={5}/>  
            </Grid>
        </Grid>
        </>
    )
}

export default CardList