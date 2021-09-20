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