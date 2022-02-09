import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core'
import { useStyles } from '../views/ViewStyles'


export default function UserByOverview() {
    const classes = useStyles();
    return <Box style={{marginTop: '17px'}} >
        <Grid container spacing={2}>
            <Grid item xs={6} sm={7} >
                <Card style={{height: '271px'}}>
                    <CardContent>
                        <Typography variant="h5" component="h6">
                            User Overview
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} sm={5}>
                <Card style={{height: '271px'}}>
                    <CardContent>
                        <Typography variant="h5" component="h6">
                            User By Device
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
}