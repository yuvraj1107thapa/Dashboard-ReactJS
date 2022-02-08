import React, { useState } from 'react';
import { 
    Box,
    IconButton,
    Menu,
    Badge,
    List,
    ListItem,
    ListItemIcon
} from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStyles } from '../Styles';

export default function Notification() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dropDownData = [
        {label: "Yuvraj", description: "likes your feed..."},
        {label: "Yuvraj", description: "likes your feed..."},
        {label: "Yuvraj", description: "likes your feed..."},
        {label: "Yuvraj", description: "likes your feed..."},
    ]

    return (
        <Box>
            <IconButton 
                aria-controls="Notification" 
                aria-haspopup="true" 
                onClick={handleClick}
                color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon style={{paddingTop: '5px'}} />
                </Badge>
            </IconButton>
            <Menu
                id="Notification"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    <List className={classes.navlist}>
                        {dropDownData.map((item, index) => (
                            <ListItem key={index} onClick={handleClose}>
                            {/* <ListItemIcon>{item.label[0].toUpperCase()}</ListItemIcon> */}
                            <ListItemIcon>{item.label}</ListItemIcon>
                            <ListItemIcon>{item.description}</ListItemIcon>
                            </ListItem>
                    ))}
                     </List>
            </Menu>
        </Box>
    )
}