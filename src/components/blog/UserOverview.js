import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core'
import { useStyles } from '../views/ViewStyles'


export default function UserByOverview() {
    const classes = useStyles();
    return <Box className={classes.section}>
        <Grid container>
            <Grid item xs={12} sm={7}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h6">
                            User Overview
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={5}></Grid>
        </Grid>
    </Box>
}