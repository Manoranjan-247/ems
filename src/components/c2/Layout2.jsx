import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header2 from './Header2';
import Sidebar2 from './Sidebar2';
import Content from './Content';
import EmployeeList from '../employee/EmployeeList';

export default function Layout2() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header2 open={open} handleDrawerOpen={handleDrawerOpen} />
        <Sidebar2 open={open} handleDrawerClose={handleDrawerClose} />
        {/* <Content /> */}
        <EmployeeList />
      </Box>
    </ThemeProvider>
  );
}
