import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';


const EmployeeList = () => {
  const employees = useSelector((store) => store.employee.employees)
 console.log("Employee data: ", employees);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/employees/new')
  }
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant='h4' fontWeight={600}>Employees</Typography>
          <Typography variant='body1' mt={1} sx={{ opacity: 0.6 }}>  Manage your organization's employees</Typography>
        </Box>
        <Box >
          <Button variant="outlined" sx={{
            color: 'inherit',
            mr: 2,
            '&:hover': { backgroundColor: '#e4eded', color: 'blueviolet' }
          }} startIcon={<FileDownloadOutlinedIcon />}>Export</Button>
          <Button variant='contained' onClick={handleClick} startIcon={<AddOutlinedIcon />}>Add Employee</Button>
        </Box>
      </Box>
      <Box sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", mt: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='h6' fontWeight={600} >Employees Directory</Typography>
          <TextField
            placeholder="Search employees"
            variant="outlined"
            size="small"
            sx={{
              width: 300,
              '& .MuiOutlinedInput-root': {
                height: 36, // Keeps it compact
              },
            }}
            slots={{
              startAdornment: () => (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", gap:2, mt:3}}>
          <Typography variant='h6' >No employees found</Typography>
          <Typography variant='body1' mt={1} sx={{ opacity: 0.6 }}>  Overview of your employee management system </Typography>
          <Button variant='contained' onClick={handleClick}>Add First Employee</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default EmployeeList