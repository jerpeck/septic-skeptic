import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import Nav from './Nav';
import Grid from '@material-ui/core/Grid';
import BasicPage from './BasicPage';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    main: {
        height: "calc(100vh - 275px)",
        minHeight: "688px",
        background: "no-repeat center/cover url(/images/bg02.jpg)",
        zIndex: -2,
    },
    colorStripe: {
        backgroundColor: theme.palette.warning.main,
        zIndex: -1,
    },
    grid: {
        height: "100%",
    },
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    contentPaper: {
        margin: "0 256px",
        padding: "32px"
    },
}))

export default function OnePage(props) {
    const classes = useStyles();
    const { socialMedia } = props;
    const contentPage = props.contentPage ? true : false;
    console.log('from OnePage: ', props);

    return(
        <div className={classes.root}>
            <BasicPage contentPage={contentPage} socialMedia={socialMedia} >
                <Grid container className={classes.main}>
                    <Grid item sm={8} className={`${classes.grid} ${classes.content}`}>
                        {props.children}
                    </Grid>
                    <Grid item sm={3} className={`${classes.grid} ${classes.colorStripe}`}></Grid>
                    <Grid item sm={1} className={classes.grid}></Grid>
                </Grid>
            </BasicPage>
        </div>
    )
}