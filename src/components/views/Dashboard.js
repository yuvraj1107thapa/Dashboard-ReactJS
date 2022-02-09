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

export default function Dashboard() {
    const classes = useStyles();

    const DisplayData = [
        {label: "Post", value: "", icon: "", iconLable: ""},
        {label: "Pages", value: "", icon: "", iconLable: ""},
        {label: "Comments", value: "", icon: "", iconLable: ""},
        {label: "Subscribers", value: "", icon: "", iconLable: ""}
    ]

    return (
        <Box>
            {/* Title section */}
            <PageTitle label="Dashboard" title="Blog Overview"/>
            {/* Small-stats  section*/}
            <Grid container>
                <Grid item xs={6} sm={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="body2" className={classes.statsLabel}>
                                Pages
                            </Typography>
                            <Typography variant="h5" component="h6" className={classes.statsTitle}>
                                325
                            </Typography>
                            <Typography component="p" style={{textAlign: "center", marginTop: "0px"}}>
                                <Button 
                                    size="small" 
                                    className={classes.ratioBtn} 
                                    startIcon={<ArrowDropDownIcon />}>
                                    10%
                                </Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}