import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './components/context/AuthContext';
import { useLayoutContext } from './components/context/LayoutContext';
import Sidebar from './components/commoncomponents/Sidebar';
import Header from './components/commoncomponents/Header';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

const Layout = () => {
  const { auth } = useAuth();
  const { sidebarOpen } = useLayoutContext();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <CssBaseline />
      <Sidebar drawerWidth={drawerWidth} open={sidebarOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: sidebarOpen ? `${drawerWidth}px` : '60px',
          transition: 'margin-left 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Toolbar />
        <Box sx={{ flex: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
