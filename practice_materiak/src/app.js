import React from "react";
import { Typography, AppBar , Button, Card , CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container,Input,InputBase,SearchBar} from "@mui/material";
import useStyles from "./styles";
import HeaderApp from "./header-app";
import SearchInput from "./search-input";
import ContentCards from "./content-cards";
import Footer from "./footer";
import CategoryCard from "./cards-category/category-cards";
 

const App = () => {
    const classes = useStyles();
    return (
        <>
        <HeaderApp />
            <main>
                <div className={classes.container}>
                    <Container>
                      <SearchInput />
                         <CategoryCard />
                    </Container> 
                </div>  
            <ContentCards />
            </main>
            <Footer />
        </>
    )
}
export default App;