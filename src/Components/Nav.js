import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import { Link as RouterLink } from 'react-router-dom';
import MenuButton from './MenuButton';

import CallToActionButtons from './CallToActionButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  iconContainer: {
    display: "flex",
  },
  navBar: {
    background: 'linear-gradient(90deg, rgba(54,245,92,1) 10%, rgba(66,165,245,1) 25%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav(props) {
  const classes = useStyles();
  const { contentPage } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.iconContainer}>
            <Link variant="h6" component={RouterLink} to="/" >
              <IconButton >
                <HomeIcon />
              </IconButton>
            </Link>
            <MenuButton />
          </div>
          {contentPage === true && <CallToActionButtons />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
