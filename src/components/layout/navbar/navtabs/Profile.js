import React, { useState } from 'react';
import { 
    Box,
    IconButton,
    Menu,
    MenuItem,
    Badge,
    ListItemIcon
} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Profile() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dropDownData = [
        {label: "settings", icon: <SettingsIcon />},
        {label: "logout", icon: <ExitToAppIcon />}
    ]

    return (
        <Box>
            <IconButton 
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
                color="inherit">
                <Badge badgeContent={0} color="secondary">
                    <AccountCircleIcon  style={{ fontSize: 33 }}/>
                </Badge>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    {dropDownData.map((item, index) => (
                        <MenuItem key={index} onClick={handleClose}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemIcon>{item.label}</ListItemIcon>
                        </MenuItem>
                    ))}
            </Menu>
        </Box>
    )
}