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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const EmployeeDetails2 = () => {
    const { id } = useParams();
    const employee = useSelector((store) => store.employee.employees.find((emp) => emp.empId === id));
    if (!employee) return <Box sx={{ minHeight: "100%", color: "red", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "40px" }}>Employee With This ID Doesn't Exist</Box>

    // console.log(employee);
    const navigate = useNavigate();
    const handleclick = () => {
        navigate("/employees")
    }

    return (
        <Box sx={{ p: 2 }}>
            <Button
                disableRipple
                disableFocusRipple
                disableElevation
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
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    <Grid size={{ xs: 12, md: 12 }} sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px ", p: 2 }}>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", md: "row" }, alignItems: "center", gap: 2 }}>
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
                                    <Chip label={employee.status} variant='filled' color={employee.status === "On Leave" ? 'error' : 'success'} />
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
                    <Grid size={{ md: 8 }} sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px ", p: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                            <EmailOutlinedIcon fontSize='large' color='primary' />
                            <Typography variant='h4' fontWeight={500} color='primary'>Employee Information</Typography>
                        </Box>
                        <Grid container spacing={2}>

                            <Grid size={{ xs: 6, md: 6 }}>
                                <Box sx={{ pb: 3 }}>
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Email</Typography>
                                    <Box sx={{ opacity: 0.8, display: "flex", alignItems: "center", gap: 1 }}>
                                        <EmailOutlinedIcon fontSize='small' />
                                        <Typography variant='h6'  >{employee.email}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, md: 6 }}>
                                <Box sx={{ pb: 3 }}>
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Phonenumber</Typography>
                                    <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                        <LocalPhoneOutlinedIcon fontSize='small' />
                                        <Typography variant='h6'  >{employee.phoneNumber}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, md: 6 }}>
                                <Box sx={{ pb: 3 }}>
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Date of Birth</Typography>
                                    <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                        <CalendarMonthOutlinedIcon fontSize='small' />
                                        <Typography variant='h6'  >{employee.dateOfBirth}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, md: 6 }}>
                                <Box sx={{ pb: 3 }}>
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Work Location</Typography>
                                    <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                        <LocationOnOutlinedIcon fontSize='small' />
                                        <Typography variant='h6'  >{employee.workLocation}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, md: 6 }}>
                                <Box sx={{ pb: 3 }}>
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Employee Type</Typography>
                                    <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                        <AccessTimeIcon fontSize='small' />
                                        <Typography variant='h6'  >{employee.employeeType}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, md: 6 }}>
                                <Box sx={{ pb: 3 }}>
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Manager name or ID</Typography>
                                    <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                        <ManageAccountsIcon fontSize='small' />
                                        <Typography variant='h6'  >{employee.managerNameOrId}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, md: 6 }}>
                                <Box >
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Department</Typography>
                                    <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                        <CorporateFareIcon fontSize='small' />
                                        <Typography variant='h6'  >{employee.department}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid>
                                <Box size={{ xs: 6, md: 6 }}>
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Designation</Typography>
                                    <Box sx={{ opacity: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                                        <AccountBoxIcon fontSize='small' />
                                        <Typography variant='h6'  >{employee.designation}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* emergency contact */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px ", p: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                            <ContactPhoneOutlinedIcon fontSize='large' color='primary' />
                            <Typography variant='h4' fontWeight={500} color='primary'>Emergency Contact</Typography>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6, md: 12 }}>
                                <Box>
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Name</Typography>
                                    <Typography variant='h6'  >{employee.emergencyContact.fullName}</Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, md: 12 }}>
                                <Box>
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Relationship</Typography>
                                    <Typography variant='h6'  >{employee.emergencyContact.relationship}</Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, md: 12 }}>
                                <Box>
                                    <Typography variant='body1' sx={{ opacity: 0.6 }}>Phonenumber</Typography>
                                    <Typography variant='h6'  >{employee.emergencyContact.phoneNumber}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }} sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px ", p: 2 }} >
                        <Typography sx={{ mb: 2 }} variant='h4' fontWeight={500} color='primary'>Skills & Expertise</Typography>
                        <Box >
                            {
                                employee.skills.map((skill) => (<Chip variant='contained' color='success' sx={{ mr: 2, mb: 2 }} label={skill} />))
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default EmployeeDetails2