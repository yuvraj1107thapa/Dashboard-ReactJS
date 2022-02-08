import React, { useState } from 'react';
import { 
    Box,
    IconButton,
    Menu,
    Badge,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useStyles } from '../../LayoutStyles';

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
                    <NotificationsActiveIcon style={{ paddingTop: '6px', fontSize: 23 }} ActiveIcon/>
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
                                <ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        secondary={item.description}>
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItem>
                    ))}
                     </List>
            </Menu>
        </Box>
    )
}