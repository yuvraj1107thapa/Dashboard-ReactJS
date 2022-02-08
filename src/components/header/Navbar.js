import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography, Box} from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({
    logo: {
        color: ""
    }
}))

export default function Navbar() {
    const classes = useStyles()
    return (
        <>
           <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Admin Panel
                </Typography>
                <Box></Box>
              </Toolbar>
           </AppBar>
        </>
    )
}