import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        // marginTop: "32px",
        "& button": {
            minWidth: "155px",
        },
        justifyContent: "center",
    },
    callToActionButton: {
        backgroundColor: theme.palette.secondary.main,
        fontWeight: "600",
        fontSize: "1rem",
    },
}));

export default function CallToActionButtons() {
    const classes = useStyles();

    return(
        <div className={classes.buttonContainer}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Link component={RouterLink} to="/contact">
                        <Button variant="contained" className={classes.callToActionButton} >
                            Send Us an Email!
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Button variant="contained" className={classes.callToActionButton} >
                        Give Us a Call!
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}