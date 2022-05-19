import CardItem from '../Card/Card'
import { Grid } from '@mui/material'

const CardList = ({title}) => {
    const productos= [
        {
            title: 'Tarta',
            price: 2500,
            image: 'tarta-de-coco.jpg'
        },
        {
            title: 'Tarta',
            price: 2500,
            image: 'tarta-de-coco.jpg'
        },
        {
            title: 'Tarta',
            price: 2500,
            image: 'tarta-de-coco.jpg'
        }
    ]
    return(
        <>
        <h2>{title}</h2>
        <Grid container >
            <Grid item md={3}>
                <CardItem title={"Tarta de coco"} price={2500} image={"Tarta-de-coco.jpg"}/>  
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Tarta de frambuesa"} price={1500} image={"Tarta-de-Frambuesa.jpg"}/>  
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Tarta de ricota "} price={2000} image={"Tarta-de-ricota.jpg"}/>  
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Tarta de manzana "} price={2000} image={"Tarta-de-manzana.jpg"}/>  
            </Grid>
        </Grid>
        </>
    )
}

export default CardList