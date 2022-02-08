import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Box
} from "@material-ui/core";
import Profile from './navtabs/Profile';
import Notification from './navtabs/Notification';
import { useStyles } from './Styles'

export default function Navbar() {
    const classes = useStyles();
    return (
        <>
           <AppBar position="static">
              <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.title}>
                    Admin Panel
                </Typography>
                <Box style={ {display: "flex"}}>
                    <Notification />
                    <Profile />
                </Box>
              </Toolbar>
           </AppBar>
        </>
    )
}