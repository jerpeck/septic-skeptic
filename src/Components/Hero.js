import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#F9F3F1",
        width: "100%",
        boxSizing: "border-box",
        margin: "0 auto",
        padding: "64px 0 48px"
    },
    buttonContainer: {
        marginTop: "32px",
        "& button": {
            minWidth: "155px",
        },
    },
}));

export default function Hero(props) {
    
    const { title, description } = props.hero;
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Container maxWidth="sm" className={classes.root} >
            <Typography variant="h2" align="center" component="h2" gutterBottom>{title}</Typography>
            <Typography variant="h5" align="center" gutterBottom>{description}</Typography>
            <div className={classes.buttonContainer}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Button variant="contained">
                            Send Us an Email!
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">
                            Give Us a Call!
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
      </div>
    </React.Fragment>
  );
}