import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import CallToActionButtons from './CallToActionButtons';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'no-repeat center/cover url("/images/bg.jpg")',
        width: "100%",
    },
    container: {
        boxSizing: "border-box",
        margin: "0 auto",
        padding: "64px 0 48px",
        width: "60%",
    },
    heroPaper: {
        padding: "32px 64px",
        color: "white",
        background: "linear-gradient(158deg, rgba(119,113,109,.85) 57%, rgba(223,216,202,.85) 100%)",
        // width: "100%",
    },
    heroTitle: {
        fontWeight: "700",
        fontSize: "75px",
        color: theme.palette.warning.main,
    },
    heroButtonContainer: {
        marginTop: "32px",
    },
    divider: {
        border: "1px solid #ccc",
        height: "1px",
        width: "100%",
        margin: "32px 0",
    },
}));

export default function Hero(props) {
    
    const { title, description } = props.hero;
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Container maxWidth="md" className={classes.container} >
            <Paper className={classes.heroPaper}>
                <Typography variant="h2" align="center" component="h2" gutterBottom className={classes.heroTitle} >{title}</Typography>
                <Typography variant="h5" align="center" gutterBottom>{description}</Typography>
                <div className={classes.divider} />
                <CallToActionButtons className={classes.heroButtonContainer} />
            </Paper>
        </Container>
      </div>
    </React.Fragment>
  );
}