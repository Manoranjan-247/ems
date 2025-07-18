import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import Sidebar3 from './Sidebar3';
import { useLayoutContext } from '../context/LayoutContext';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import Header3 from './Header3';

const drawerWidthOpen = 240;
const drawerWidthClosed = 64;

const Layout3 = () => {
    const { auth } = useAuth()
    const { sidebarOpen } = useLayoutContext();


    if (!auth.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Sidebar3 />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Header3 />
                {/* <Box sx={{ flexGrow: 1, overflow: 'auto', p: 3 }}>
                    <Outlet />
                </Box> */}
                <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>


    );
};

export default Layout3;
