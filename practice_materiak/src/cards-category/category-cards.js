import React from "react";
import { Typography, AppBar , Button, Card , CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container,Input,InputBase,SearchBar} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

import useStyles from "../styles";
const cards = [1,2,3,4]

const CategoryCard = () => {
    const classes = useStyles()
    return (
        <Container className={classes.cardGrid}> 
            <Grid container spacing={4}>
                { cards.map((card) => (
                    <Grid item key={cards} xs={12} sm={6} md={3}>
                    <CardMedia className={classes.category__card}
                        image="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                    </Grid>
                )) }
            </Grid>
            <Typography variant="h6" className={classes.all__variants} align="center">
                     Все категории <KeyboardArrowDown />
                     
            </Typography>
        </Container>
    )
}

export default CategoryCard;

