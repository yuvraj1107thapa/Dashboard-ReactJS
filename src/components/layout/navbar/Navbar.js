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

export default function Navbar(props) {
    const classes = useStyles();
    const { handleDrawerOpen } = props;
    return (
        <>
           <AppBar position="fixed">
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
                    <IconButton 
                        color="inherit"
                        onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
              </Toolbar>
           </AppBar>
        </>
    )
}