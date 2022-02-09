import { Hidden, Drawer } from '@material-ui/core';
import React, {useState} from 'react';
import { useStyles } from '../LayoutStyles';
import SidebarNavItems from './SidebarNavItems';

export default function Sidebar(props) {
    const classes = useStyles();
    const { mobileOpen, handleDrawerOpen, handleDrawerClose } = props;
    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={'left'}
                    open={mobileOpen}
                    onClose={handleDrawerOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, 
                    }}>
                    <SidebarNavItems handleDrawerClose={handleDrawerClose} />
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                paper: classes.drawerPaper,
                }}
                variant="permanent"
                open>
                <SidebarNavItems handleDrawerClose={handleDrawerClose} />
            </Drawer>
            </Hidden>
        </nav>
    )
}