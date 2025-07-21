import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, Box, Button, Chip, Grid, Typography } from '@mui/material';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const EmployeeDetails = () => {
    const { id } = useParams();
    const employee = useSelector((store) => store.employee.employees.find((emp) => emp.empId === id));

    if (!employee) return <Box sx={{minHeight:"100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "40px", color:"red" }}>Employee with these id not found</Box>

    // console.log(employee);
    const navigate = useNavigate();
    const handleclick = () => {
        navigate("/employees")
    }
    return (
        <Box className="emp-details" sx={{ p: 3 }}>
            <Button
                variant="text"
                sx={{
                    color: 'inherit',
                    '&:hover': { backgroundColor: 'transparent', color: 'blueviolet' }
                }}
                onClick={handleclick}
                startIcon={<KeyboardBackspaceIcon />}
            >
                Back to Employees
            </Button>
            <Grid container spacing={4}>
                <Grid size={{ md: 12 }}>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box>
                            <Avatar
                                src={employee.profilePicture}
                                sx={{ width: 100, height: 100, borderRadius: "50%" }}
                                alt='profile'
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                                <Typography variant='h4' fontWeight={600}>{employee.fullName}</Typography>
                                <Chip label={employee.status} variant='contained' color='success' />
                                {employee.isAdmin && <Chip label='Admin' variant='outlined' color='primary' />}
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ opacity: 0.6 }}>{employee.designation} • {employee.department}</Typography>
                            </Box>
                            <Box>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: 'inherit',
                                        '&:hover': { backgroundColor: 'transparent', color: 'blueviolet' }
                                    }}
                                    startIcon={<Person2OutlinedIcon />} >
                                    {employee.empId}
                                </Button>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: 'inherit',
                                        '&:hover': { backgroundColor: 'transparent', color: 'blueviolet' }
                                    }}
                                    startIcon={<LocationOnOutlinedIcon />}>
                                    {employee.workLocation}
                                </Button>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: 'inherit',
                                        '&:hover': { backgroundColor: 'transparent', color: 'blueviolet' }
                                    }}
                                    startIcon={<CalendarMonthOutlinedIcon />}>
                                    {employee.joiningDate}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item size={{ md: 8 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 3, boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px " }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <EmailOutlinedIcon fontSize='large' color='primary' />
                            <Typography variant='h4' fontWeight={500} color='primary'>Employee Information</Typography>
                        </Box>
                        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                            <Box sx={{ pb: 3 }}>
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Email</Typography>
                                <Box sx={{ opacity: 0.8, display: "flex", alignItems: "center", gap: 1 }}>
                                    <EmailOutlinedIcon fontSize='small' />
                                    <Typography variant='h6'  >{employee.email}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ pb: 3 }}>
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Phonenumber</Typography>
                                <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                    <LocalPhoneOutlinedIcon fontSize='small' />
                                    <Typography variant='h6'  >{employee.phoneNumber}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ pb: 3 }}>
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Date of Birth</Typography>
                                <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                    <CalendarMonthOutlinedIcon fontSize='small' />
                                    <Typography variant='h6'  >{employee.dateOfBirth}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ pb: 3 }}>
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Work Location</Typography>
                                <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                    <LocationOnOutlinedIcon fontSize='small' />
                                    <Typography variant='h6'  >{employee.workLocation}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ pb: 3 }}>
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Employee Type</Typography>
                                <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                    <Person2OutlinedIcon fontSize='small' />
                                    <Typography variant='h6'  >{employee.employeeType}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ pb: 3 }}>
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Manager name or ID</Typography>
                                <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                    <LocationOnOutlinedIcon fontSize='small' />
                                    <Typography variant='h6'  >{employee.managerNameOrId}</Typography>
                                </Box>
                            </Box>
                            <Box >
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Department</Typography>
                                <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                    <LocationOnOutlinedIcon fontSize='small' />
                                    <Typography variant='h6'  >{employee.department}</Typography>
                                </Box>
                            </Box>
                            <Box >
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Designation</Typography>
                                <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                    <LocationOnOutlinedIcon fontSize='small' />
                                    <Typography variant='h6'  >{employee.designation}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Grid>

                <Grid item size={{ md: 4 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 7, boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px " }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <ContactPhoneOutlinedIcon fontSize='large' color='primary' />
                            <Typography variant='h4' fontWeight={500} color='primary'>Emergency Contact</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            <Box>
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Name</Typography>
                                <Typography variant='h6'  >{employee.emergencyContact.fullName}</Typography>
                            </Box>
                            <Box>
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Relationship</Typography>
                                <Typography variant='h6'  >{employee.emergencyContact.relationship}</Typography>
                            </Box>

                            <Box>
                                <Typography variant='body1' sx={{ opacity: 0.6 }}>Phonenumber</Typography>
                                <Typography variant='h6'  >{employee.emergencyContact.phoneNumber}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item size={{ md: 12 }} >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px ", padding: 3 }}>
                        <Typography variant='h4' fontWeight={500} color='primary'>Skills & Expertise</Typography>
                        <Box >
                            {
                                employee.skills.map((skill) => (<Chip variant='contained' color='success' sx={{ mr: 2, }} label={skill} />))
                            }
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EmployeeDetails