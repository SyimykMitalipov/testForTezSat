import React from "react";
import { Typography, AppBar , Button, Card , CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container,Input,InputBase,SearchBar,Switch} from "@mui/material";
import useStyles from "../styles";

const cards =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];

const ContentCards = () => {
    const classes = useStyles()
    return (
        <Container className={classes.cardGrid}>
            <div className={classes.Buttoncards__newItems}>
            <Typography variant="h6" className={classes.newItem__black}>
            Новые объявления
            </Typography>
            <Typography variant="h6" className={classes.newItem__blue}>
            Business <Switch />
            </Typography>
            </div>
        <Grid container spacing={4}>
            { cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                    <CardMedia 
                    className={classes.cardMedia}
                    image="https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4.png"
                    title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            Heading
                        </Typography>
                        <Typography>
                            This is a media card. you can use this conternt to describe card
                        </Typography>
                    </CardContent>
                    <CardActions>
                        
                    </CardActions>
                </Card>
            </Grid>
            ))}
            
        </Grid>
    </Container>
    )
}
export default ContentCards;