import React, {useState} from 'react'
import Navbar from './navbar/Navbar.js'
import Sidebar from './sidebar/Sidebar.js'
import { Box } from '@material-ui/core'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from '../views/Dashboard'
import BlogPosts from '../views/BlogPosts'
import AddNewPosts from '../views/AddNewPost'
import UserProfileLite from '../views/UserProfileLite'
import Logout from '../views/Logout'
import { useStyles } from './LayoutStyles'

export default function LayoutComponent() {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerOpen = () => {
        setMobileOpen(!mobileOpen)
    }
    const handleDrawerClose = () => {
        setMobileOpen(false)
    }
    return (
        <div>
            <Navbar handleDrawerOpen={handleDrawerOpen} />
            <Sidebar 
                mobileOpen={mobileOpen} 
                handleDrawerOpen={handleDrawerOpen} 
                handleDrawerClose={handleDrawerClose} />
            {/* Defining routes */}
            <Box mt={8} className={classes.wrapper}>
                <Routes>
                    <Route path = '/' element= {<Dashboard />}></Route>
                    <Route path = '/blog' element= {<BlogPosts />}></Route>
                    <Route path = '/addpost' element= {<AddNewPosts />}></Route>
                    <Route path = '/profile' element= {<UserProfileLite />}></Route>
                    <Route path = '/logout' element= {<Logout />}></Route>
                    {/* <Route exact path='/' render={() => <Dashboard />}/>
                    <Route exact path='/blog' render={() => <BlogPosts />}/>
                    <Route exact path='/addpost' render={() => <AddNewPosts />}/>
                    <Route exact path='/profile' render={() => <UserProfileLite />}/>
                    <Route exact path='/logout' render={() => <Logout />}/> */}
                </Routes>
            </Box>
        </div>
    )
}