import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(() => ({
    root: {
        padding: "48px",
        backgroundColor: "#ccc",
        background: "linear-gradient(90deg, #f59342 4%, #fff 12%, #fff 16%, #ff1616 24%, #ff1616 28%, #fff 36%, #fff 40%, #ffe500 48%, #ffe500 52%, #fff 60%, #fff 64%, #36f55c 72%, #36f55c 76%, #fff 84%, #fff 88%, #42a5f5 96%)",
        minHeight: "146px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
    },
    socialMediaGrid: {
    },
    copyright: {
        fontSize: ".675rem",
    }
}))

export default function Footer(props) {
    const classes = useStyles();
    const { socialMedia } = props;
    console.log('from footer: ', socialMedia);

    return(
        <footer className={classes.root}>
            <Typography variant="h6" gutterBottom align="center">The Septic Skeptic</Typography>
            <Grid container className={classes.socialMediaGrid} justifyContent="center" >
                {socialMedia.map(o =>
                    <Grid item >
                        <Link href={o.link} >
                            <IconButton aria-label={o.ariaLabel}>
                                {
                                    o.site === "Facebook" ? <FacebookIcon />  :
                                    o.site === "Twitter" ? <TwitterIcon /> :
                                    o.site === "GitHub" ? <GitHubIcon /> :
                                    o.site === "LinkedIn" ? <LinkedInIcon /> :
                                    o.site ==="Pinterest" ? <PinterestIcon /> :
                                    o.site === "YouTube" ? <YouTubeIcon /> : ""
                                }
                            </IconButton>
                        </Link>
                    </Grid>
                )}
            </Grid>
            <Typography variant="body2" gutterBottom align="center" className={classes.copyright}>copyright © <Link href="https://www.peck-web.com" color="inherit" >Peck Web Development</Link> 2021</Typography>
        </footer>
    )
}