
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLayoutContext } from '../context/LayoutContext';
import { useAuth } from '../context/AuthContext';
import {
    Avatar,
    Menu,
    MenuItem,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';
import { Box } from '@mui/material';

const Header3 = () => {
    const { sidebarOpen, toggleSidebar } = useLayoutContext();
    const { logout } = useAuth()
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 4, py:0.8, borderBottom: '1px solid #e0e0e0' }}>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }} >
                <MenuIcon  sx={{cursor:'pointer'}} onClick={toggleSidebar}/>
                <Typography variant='h5'>Employee Management System</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Typography variant='h5'>Admin</Typography>
                <ProfileDropdown  logout = {logout} />
            </Box >

        </Box>
    )
}

export default Header3;


function ProfileDropdown({logout}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <Avatar
                        sx={{ width: 40, height: 40 }}
                        src="https://i.pravatar.cc/300"
                        alt="Profile"
                    />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 4,
                    sx: {
                        minWidth: 180,
                        borderRadius: 2,
                        overflow: 'visible',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => alert('Go to profile')}>
                    <Typography variant="inherit">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={() => alert('Go to settings')}>
                    <Typography variant="inherit">Settings</Typography>
                </MenuItem>
                <MenuItem onClick={logout}>
                    <Typography variant="inherit">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}