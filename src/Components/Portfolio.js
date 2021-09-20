import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import PortfolioCard from './PortfolioCard';

const useStyles = makeStyles(() => ({
        root: {
            width: "100%",
            background: "#555"
        },
        container: {
            padding: "64px 0",
            width: "100%",
        },
        portfolioCardContainer: {
            // minWidth: "346px",
        },
}));

export default function Portfolio(props) {
    const classes = useStyles();
    const { works } = props;

    const worksCards = works.map((obj) => 
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.portfolioCardContainer}>
            <PortfolioCard data={obj}/>
        </Grid>)

    return(
        <div className={classes.root} >
            <Container maxWidth="lg" className={classes.container} >
                <Grid container spacing={4} >
                    {worksCards}
                </Grid>
            </Container>
        </div>
    )
}