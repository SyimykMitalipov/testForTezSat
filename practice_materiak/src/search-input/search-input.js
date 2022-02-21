import React from "react";
import useStyles from "../styles";
import { Container } from "@mui/material";


const SearchInput = () => {
    const classes =  useStyles()
    return (
        <Container>
        <div className={classes.serarch__panel}>
        <label className={classes.label__input}>
        <input placeholder="Search" type="text" className={classes.input__header}/>
       <input type="button" value="Найти" className={classes.input__submit} />
       <input type="button" value="Подать объявление"  className={classes.sell__input} />
        </label>
    </div>
    </Container>
    )
}
export default SearchInput;