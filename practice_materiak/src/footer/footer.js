import React from "react"
import { Typography, Container} from "@mui/material";
import useStyles from "../styles";

const Footer = () => {
    const classes = useStyles()
    return (
        <Container className={classes.footer__container}>   
        <footer className={classes.footer}>
            <div className={classes.footer__blocks}>
                <div className={classes.footer__txt1}>
                <Typography variant="h6" className={classes.footer__title}>
                     Tez Sat
                </Typography >
                <div className={classes.footer__subtitle1}>
                <Typography  variant="subtitle 1">
                Tez Sat (Тез Сат) - это сервис бесплатных объявлений Кыргызстана.Сервис позволяет подавать бесплатные объявления о купле, продаже, аренде, обмене как б/у, так и новых товаров и услуг. Продажа авто, домов, квартир, электроники, поиск работы и услуг является неотъемлемой частью повседневного бытия.
                </Typography>
                </div>
                </div>
                <div className={classes.footer__txt2}>
                    <Typography variant="h6" className={classes.footer__title}>
                    Узнать больше
                    </Typography>
                    <div className={classes.footer__subtitle2}>
                    <ul>
                        <li>Служба поддержки</li>
                        <li>Карта сайта</li>
                        <li>О нас</li>
                        <li>Помощь</li>
                        <li>Пользовательское соглашение</li>

                    </ul>
                    </div>  
                </div>
                <div className={classes.foooter__txt3}>
                    <Typography variant="h6" className={classes.footer__title}>
                      Скачать приложение
                    </Typography>
                </div>
            </div>
            </footer>
        </Container>
    )
}
export default Footer;