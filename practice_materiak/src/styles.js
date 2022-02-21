import React from 'react'
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme) => ({
    container: {
        backgroudColor: 'blue',
        padding: '30px',
        '& li': {

        }

    },
    headerApp: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header__container: {
        maxWidth: '1110px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    buttons: {
        marginTop: '40px'
    },
    icon: {
        marginRight: '20px',
    },
    cardGrid: {
         padding: '20px 0',
         maxWidth: '1110px',
         border: '2px solid red'
    },
    card: {
        width: '250px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%',
        height: '250px',
    },
    cardContent: {
         flexGrow: 1,
    },
    input: {
        maxWidth: '400px',
       
    },
    toolbar__header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center' 

    },
    ulList: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        listStyle: 'none',
        alignItems: 'center',
    },
    headerList: {
        width: '630px',
        listStyle: 'none',
        marginLeft: ' 20px',
        border: '1px solid red',
        marginLeft: '20px',
        ' & li ': {
            float: 'left',
            marginLeft: '20px',

        }
    }, 
    header__logo: {
        width: '380px',
        height: '80px',
        border: '1px solid red',
        ' & img' : {
            width: '100%',
            height: '80px',
        }
    },
    login__button: {
        width: '320px',
        height: '40px',
        display: 'flex',
        justifyContent: 'space-between',  
        marginLeft: '180px',    
        border: '1px solid red' ,
        alignItems: 'center',

    },
    header__language: {
        width: '50px',
        height: '25px',
        marginLeft: '30px',
        border: '1px solid red',
        '& button': {
            width: '40px',
            height: '20px',
            color: '#0051BA',
            borderRadius: '5px',
            border: 'none',  
            background: 'rgba(0, 81, 186, 0.11)',
          cursor: 'pointer'

        }
    },
    button__login: {
        border:'1 px solid red',
        '& button': {
            width: '90px',
            height: '25px',
            borderLeft: '2px solid #D6D6D6',
            border: 'none',
            background: 'transparent',
         cursor: 'pointer'

        },
    },
    sign__up: {
        width: '90px',
        height: '25px',
        borderLeft: '2px solid #D6D6D6',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer'
    },
    label__input:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    input__header: {
        width: '850px',
        height: '50px',
        border: '2px solid #FFCB05',
        borderRadius: '5px',
        fontSize: '12px',
        padding: '25px',
        position: 'relative'
    },
    input__submit: {
        width: '150px',
        height: '55px',
        borderRadius: '0 5px 5px 0',
        background: '#FFCB05',
        border: 'none',
        color: '#0A142F;',
        fontWeight: 'bold',
        fontSize: '16px',
        position: '',
        marginRight: '20px',
        cursor: 'pointer'
        
    },
    sell__input: {
        width: '200px',
        height: '50px',
        borderRadius: '5px',
        background: '#FFCB05',
        border: 'none',
        marginLeft: '20px',
        color: '#0A142F;',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer'

    },
    arrow__down: {
        transform: 'rotateX(50%)'
    }
    ,
    category__card: {
        width: '210px',
        height: '100px',
        borderRadius: '10px'
    },
    all__variants: {
        color: '#0051BA',
        paddingTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    Buttoncards__newItems: {
        width: '1140px',
        height: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '10px',
    },
    newItem__black: {
        color: '#333333',
    },
    newItem__blue: {
        color: '#0051BA'
    },
    footer: {
        backgroundColor: '#ffffff',
        padding: '50px 0',
    },
    footer__container: {
        maxWidth: '1110px',

    },
    footer__txt1: {
        width: '520px',
        height: '230px',
        border: '1px solid red'
    },
    footer__blocks: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        border: '2px solid red '

    },
    footer__title: {
        color: '#0051BA',
        fontSize: '20px',
    },
    footer__subtitle1: {
        width: '480px',
        height: '130px',
        fontSize: '14px'
    },
    footer__txt2: {
        width: '225px',
        hright: '190px',
        border: '1px solid red'
    },
    footer__subtitle2: {
        width:'240px',
        height: '200px',
        border: '1px solid red ',
        '& li': {
            listStyle: 'none',
            fontSize: '15px',
            color: '#1B1B1B',
            lineHeight: '30px',

        }
    },
    
}));

export default useStyles;