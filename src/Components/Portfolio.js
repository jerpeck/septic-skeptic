import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import PortfolioCard from './PortfolioCard';

const data = {
    works: [
        {
            image: {
                image: "/public/images/lizard.jpg",
                title: "Contemplative Reptile"
            },
            title: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            link: "#"
        },
        {
            image: {
                image: "/public/images/lizard.jpg",
                title: "Contemplative Reptile"
            },
            title: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            link: "#"
        },
        {
            image: {
                image: "/public/images/lizard.jpg",
                title: "Contemplative Reptile"
            },
            title: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            link: "#"
        },
        {
            image: {
                image: "/public/images/lizard.jpg",
                title: "Contemplative Reptile"
            },
            title: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            link: "#"
        },
        {
            image: {
                image: "/public/images/lizard.jpg",
                title: "Contemplative Reptile"
            },
            title: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            link: "#"
        },
        {
            image: {
                image: "/public/images/lizard.jpg",
                title: "Contemplative Reptile"
            },
            title: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            link: "#"
        },
        {
            image: {
                image: "/public/images/lizard.jpg",
                title: "Contemplative Reptile"
            },
            title: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            link: "#"
        },
        {
            image: {
                image: "/public/images/lizard.jpg",
                title: "Contemplative Reptile"
            },
            title: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            link: "#"
        },
        {
            image: {
                image: "/public/images/lizard.jpg",
                title: "Contemplative Reptile"
            },
            title: "Lizard",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            link: "#"
        },
    ]
}

const useStyles = makeStyles(() => ({
        root: {
            padding: "64px 0",
            width: "100%",
        },
}));

export default function Portfolio() {
    const classes = useStyles();

    const worksCards = data.works.map((obj) => 
        <Grid item xs={12} sm={6} md={4}>
            <PortfolioCard data={obj}/>
        </Grid>)

    return(
        <Container maxWidth="md" className={classes.root}>
            <Grid container spacing={4} >
                {worksCards}
            </Grid>
        </Container>
    )
}