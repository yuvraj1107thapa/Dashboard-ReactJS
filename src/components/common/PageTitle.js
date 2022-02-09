import React from 'react'
import { 
    Grid,
    Typography,
    Button
} from '@material-ui/core'
import { useStyles } from '../views/ViewStyles'

export const PageTitle = (props) => {
    const { label, title } = props
    const classes = useStyles();
    return ( 
        <Grid container>
            <Grid item xs={12} sm={12}>
            <Typography 
                variant="body2"
                className={classes.pageSubtitle}>
                {label}
            </Typography>
            <Typography 
                variant="h5" 
                className={classes.pageTitle}>
                {title}
            </Typography>
            </Grid>
        </Grid>
    )
}