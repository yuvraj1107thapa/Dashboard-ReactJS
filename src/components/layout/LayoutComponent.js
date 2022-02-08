import React from 'react'
import Navbar from './navbar/Navbar.js'
import Sidebar from './sidebar/Sidebar.js'

export default function LayoutComponent() {
    return (
        <div>
            <Navbar />
            <Sidebar />
        </div>
    )
}