import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import Nav from './Nav';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
        height: "100vh",
    },
    main: {
        height: "calc(100vh - 258px)",
        minHeight: "688px"
    },
    colorStripe: {
        backgroundColor: "yellow",
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

    return(
        <div className={classes.root}>
            <Nav />
                    <Grid container className={classes.main}>
                        <Grid item sm={8} className={`${classes.grid} ${classes.content}`}>
                            {props.children}
                        </Grid>
                        <Grid item sm={3} className={`${classes.grid} ${classes.colorStripe}`}></Grid>
                        <Grid item sm={1} className={classes.grid}></Grid>
                    </Grid>
            <Footer />
        </div>
    )
}