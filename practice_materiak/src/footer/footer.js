import React from "react"
import { Typography, Container} from "@mui/material";
import useStyles from "../styles";

const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Container className={classes.footer__container}> 
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
                <div className={classes.footer__txt3}>
                    <Typography variant="h6" className={classes.footer__title}>
                      Скачать приложение
                    </Typography>
                    <div className={classes.footer__playmarket}>
                        <img src="/images/play__market.svg" />
                    </div>
                    <div className={classes.footer__appstore}>
                        <img src="/images/appstore.svg" />
                    </div>
                </div>
            </div>
            <div className={classes.footer__end}>
                <div className={classes.footer__logo}>
                    <img src="/images/logo__tezsat.svg"/>
                </div>
                <div className={classes.footer__2021}>
                    <Typography variant="subtitle 1" className={classes.footer__2021__txt}>
                    © 2021 Все права защищены
                    </Typography>
                </div>
                <div className={classes.footer__icons}>
                    <img src="/images/telegram.svg" alt />
                    <img src="/images/whatsapp.svg" alt />
                    <img src="/images/insta.svg" alt />
                     <img src="/images/yo.svg" alt />
                     <img src="/images/vk.svg" alt />
                     <img src="/images/ok.svg" alt />
                     <img src="/images/fb.svg" alt />
                     <img src="/images/tw.svg" alt />
                </div>
            </div>
            </Container>
            </footer>
    )
}
export default Footer;