import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import DashboardIcon from "@material-ui/icons/Dashboard"
import BookIcon from "@material-ui/icons/Book"
import PostAddIcon from "@material-ui/icons/PostAdd"
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

export default function SidebarNavItems() {
    const listItemData = [
        {label:"Dashboard", icon: <DashboardIcon />},
        {label:"Blog Posts", icon: <BookIcon />},
        {label:"Add New Post", icon: <PostAddIcon />},
        {label:"User Profile", icon: <AccountBoxIcon />},
        {label:"Logout", icon: <ExitToAppIcon />}  
    ]
    return (
        <List>
            {listItemData.map( (item, index) => (
                <ListItem key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
}