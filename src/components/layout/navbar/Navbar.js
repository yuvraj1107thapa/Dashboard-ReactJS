import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Box,
    IconButton,
    Hidden
} from "@material-ui/core";
import Profile from './navtabs/Profile';
import Notification from './navtabs/Notification';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../LayoutStyles';

export default function Navbar() {
    const classes = useStyles();
    return (
        <>
           <AppBar position="static">
              <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>
                    Admin Panel
                </Typography>
                <Hidden smDown>
                    <Box style={ {display: "flex"}}>
                        <Notification />
                        <Profile />
                    </Box>
                </Hidden>
                <Hidden mdUp>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                </Hidden>
              </Toolbar>
           </AppBar>
        </>
    )
}