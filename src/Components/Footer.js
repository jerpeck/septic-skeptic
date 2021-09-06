import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        padding: "48px",
        backgroundColor: "#ccc",
        minHeight: "146px",
        boxSizing: "border-box",
    },
}))

export default function Footer() {
    const classes = useStyles();

    return(
        <footer className={classes.root}>
            <Typography variant="h6" gutterBottom align="center">The Septic Skeptic</Typography>
            <Typography variant="subtitle1" gutterBottom align="center">Social Media!</Typography>
            <Typography variant="body2" gutterBottom align="center">copyright © <Link href="https://www.peck-web.com" color="inherit" >Peck Web Development</Link> 2021</Typography>
        </footer>
    )
}