import React from "react";
import { Typography, AppBar , CssBaseline,Toolbar, Container} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import useStyles from "../styles";


const HeaderApp = () => {
const classes = useStyles();
    return (
        <div className={classes.headerApp}>
        <Container className={classes.header__container}>
        <CssBaseline />
        <AppBar position="relative" style={{ backgroundColor: '#ffffff', color: 'black', display: 'flex', justifyContent: 'space-around'}}>
            <Toolbar spacing={0} className={classes.toobar__header}>
               <div className={classes.ulList}>
               <div className={classes.header__logo}>
                   <img src="/images/logo__tezsat.svg" alt="sss" />
                        </div>
                   <ul className={classes.headerList}>
                       <li>Для бизнеса</li>
                       <li>Блог</li>
                       <li>О нас</li>
                       <li>Помощь</li>
                       <KeyboardArrowDown />
                   </ul>
                   <div className={classes.header__language}>
                        <button>RU</button>
                    </div>
                   <div className={classes.login__button}>
                    <div className={classes.button__login}>
                            <button>
                                Войти
                                </button>
                    </div> 
                    <div className={classes.button__login}>
                            <button>
                                Регистрация
                                </button>
                    </div>                        
               </div>
               </div>
            </Toolbar>
        </AppBar>
        </Container>
    </div>
    )
}
export default HeaderApp;