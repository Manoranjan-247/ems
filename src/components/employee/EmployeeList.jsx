import { Avatar, Box, Button, Chip, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { IdCard } from 'lucide-react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
const EmployeeList = () => {
  const employees = useSelector((store) => store.employee.employees)
  console.log("Employee data: ", employees);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/employees/new')
  }

  if (employees.length === 0) {
    return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2, mt: 3 }}>
      <Typography variant='h6' >No employees found</Typography>
      <Typography variant='body1' mt={1} sx={{ opacity: 0.6 }}>  Overview of your employee management system </Typography>
      <Button variant='contained' onClick={handleClick}>Add First Employee</Button>
    </Box>
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


        <TableContainer >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'><strong>Sl no</strong></TableCell>
                <TableCell align='center'>Fullname</TableCell>
                <TableCell align='center'>Profile photo</TableCell>
                <TableCell align='center'>Emp phone</TableCell>
                <TableCell align='center'>Emp Id</TableCell>
                <TableCell align='center'>Designation</TableCell>
                <TableCell align='center'>Department</TableCell>
                <TableCell align='center'>Status</TableCell>
                <TableCell align='center'>isAdmin</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                employees.map((emp, idx) => (
                  <TableRow key={emp.empId}>
                    <TableCell align='center'>{idx + 1}</TableCell>
                    <TableCell align='center'>{emp.fullName}</TableCell>


                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <Avatar
                          src={emp.profilePicture}
                          sx={{ width: 40, height: 40, borderRadius: "50%" }}
                          alt="Profile"
                        />
                      </Box>
                    </TableCell>

                    <TableCell align='center'>{emp.phoneNumber}</TableCell>
                    <TableCell align='center'>{emp.empId}</TableCell>
                    <TableCell align='center'>{emp.designation}</TableCell>
                    <TableCell align='center'>{emp.department}</TableCell>
                    <TableCell align='center'>
                      <Chip label={emp.status} color={emp.status === "Active" ? "success" : emp.status === "On Leave" ? "error" : "default"} variant="outlined"
                      />
                    </TableCell>
                    <TableCell align='center'>
                      {emp.isAdmin === true ? <ToggleOnIcon color='success' fontSize='large' /> : <ToggleOffIcon color='error' fontSize='large' />}
                    </TableCell>
                    <TableCell align='center' sx={{ display: "flex", gap: 2, justifyContent: "space-evenly" }}>
                      <Tooltip title="edit details" >
                        <EditIcon sx={{ cursor: "pointer" }} onClick={() => navigate(`/employee-edit/${emp.empId}`)} />
                      </Tooltip>
                      <Tooltip title="generate ID card">
                        <CreditCardOutlinedIcon sx={{ cursor: "pointer" }} />
                      </Tooltip>

                      <Tooltip title="view details">
                        <ArrowRightAltIcon sx={{ cursor: "pointer" }} onClick={() => navigate(`/employee-details/${emp.empId}`)} />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </Box>
  )
}

export default EmployeeList