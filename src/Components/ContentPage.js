import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import OnePage from './OnePage';

const useStyles = makeStyles(() => ({
    contentPaper: {
        margin: "0 256px",
        padding: "32px 64px",
        color: "white",
        background: "linear-gradient(158deg, rgba(119,113,109,.85) 57%, rgba(223,216,202,.85) 100%)",
    },
}))

export default function ContentPage(props) {
    const { works, socialMedia } = props.data;
    const { title, description } = works.filter(o => o.id === props.match.params.id)[0];
    const classes = useStyles();

    return(
        <OnePage contentPage socialMedia={socialMedia}>
            <Paper className={classes.contentPaper}>
                <Typography variant="h2" >{title}</Typography>
                <Typography variant="subtitle2" >{description}</Typography>
            </Paper>
        </OnePage >
    )
}