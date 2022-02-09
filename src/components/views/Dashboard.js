import React, { useEffect } from 'react'
import { 
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    Button
} from '@material-ui/core'
import { PageTitle } from '../common/PageTitle';
import { useStyles } from './ViewStyles'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { randomValueGenerator } from '../../utils/StatsData';
import UserByOverview from '../blog/UserOverview';

export default function Dashboard() {
    const classes = useStyles();

    const DisplayData = [
        {
            label: "Post", 
            value: randomValueGenerator({digit: 1000}), 
            icon: <ArrowDropUpIcon />, 
            iconLable: "4.7%"
        },
        {
            label: "Pages", 
            value: randomValueGenerator({digit: 100}), 
            icon: <ArrowDropUpIcon />, 
            iconLable: "12.4%"},
        {
            label: "Comments", 
            value: randomValueGenerator({digit: 100}), 
            icon: <ArrowDropDownIcon />, 
            iconLable: "3.8"},
        {
            label: "Subscribers", 
            value: randomValueGenerator({digit: 1000}), 
            icon: <ArrowDropUpIcon />, 
            iconLable: "2.71"
        }
    ]

    return (
        <Box>
            {/* Title section */}
            <PageTitle label="Dashboard" title="Blog Overview"/>
            {/* Small-stats  section*/}
            <Grid container spacing={1}>
                {DisplayData.map( (item, index) => 
                    <Grid item xs={6} sm={3}>
                        <Card>
                            <CardContent key={index} className={classes.cardContent}>
                                <Typography variant="body2" className={classes.statsLabel}>
                                    {item.label}
                                </Typography>
                                <Typography variant="h5" component="h6" className={classes.statsTitle}>
                                    {item.value}
                                </Typography>
                                <Typography component="p" style={{textAlign: "center", marginTop: "0px"}}>
                                    <Button 
                                        size="small" 
                                        className={classes.ratioBtn} 
                                        startIcon={item.icon}>
                                        {item.iconLable}
                                    </Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
            {/* User overview section */}
            <UserByOverview />
        </Box>
    )
}