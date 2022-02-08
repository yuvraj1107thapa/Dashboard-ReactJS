import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core'
import DashboardIcon from "@material-ui/icons/Dashboard"
import BookIcon from "@material-ui/icons/Book"
import PostAddIcon from "@material-ui/icons/PostAdd"
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { NavLink } from 'react-router-dom'
import { useStyles } from '../LayoutStyles'

export default function SidebarNavItems(props) {
    const classes = useStyles();
    const { handleDrawerClose } = props
    const listItemData = [
        {label:"Dashboard", link: "/", icon: <DashboardIcon />},
        {label:"Blog Posts", link: "/blog", icon: <BookIcon />},
        {label:"Add New Post", link: "/addpost", icon: <PostAddIcon />},
        {label:"User Profile", link: "/profile", icon: <AccountBoxIcon />},
        {label:"Logout", link: "/logout", icon: <ExitToAppIcon />}  
    ]
    return (
        <List>
            {listItemData.map( (item, index) => (
                <Button 
                    size="small" 
                    className={classes.navButton}
                    onClick={ () => handleDrawerClose()}
                    >
                    <ListItem 
                        exact
                        component={NavLink} 
                        to={item.link} 
                        className={classes.navlinks} 
                        activeClassName={classes.activeNavlinks}
                        key={index}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.label}</ListItemText>
                    </ListItem>
            </Button>
            ))}
        </List>
    )
}