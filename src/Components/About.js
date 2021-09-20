import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import OnePage from './OnePage';

const useStyles = makeStyles(() => ({
    contentPaper: {
        margin: "0 256px",
        padding: "32px"
    },
}))

export default function About(props) {
    const { title } = props;
    const { description, socialMedia } = props.data;
    const classes = useStyles();
    console.log('from About: ', props);

    return(
        <OnePage contentPage socialMedia={socialMedia}>
            <Paper className={classes.contentPaper}>
                <Typography variant="h2" >{title}</Typography>
                <Typography variant="subtitle2" >{description}</Typography>
            </Paper>
        </OnePage >
    )
}