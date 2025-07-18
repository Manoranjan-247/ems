import React from 'react'
import { styled } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Paper from '@mui/material/Paper';
import { Box, Typography, Button, Grid, TextField , MenuItem} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const AddEmployee = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/employees")
  }

  return (
    <Box p={3}>
      <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
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
        <Box>
          <Typography variant='h4' fontWeight={600}>Add New Employee</Typography>
          <Typography variant='body1' mt={1} sx={{ opacity: 0.7 }}>
            Fill in the details to add a new employee
          </Typography>
        </Box>
      </Box>

      <form noValidate>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ md: 4 }} sx={{ border: "1px solid black", p: 3 }}>
              <Typography variant='h5' fontWeight={600} mb={2}>
                Personal Information
              </Typography>

              {/* Inner Grid Container */}
              <Grid container spacing={2}>
                <Grid size={{ md: 12 }}>
                  <TextField label="Full Name" type='text' fullWidth variant="outlined" />
                </Grid>
                <Grid size={{ md: 12 }}>
                  <TextField label="Email" type='email' fullWidth variant="outlined" />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField label="Phone Number" type='text' fullWidth variant="outlined" />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField label="Date of Birth" type='date' fullWidth variant="outlined" required InputLabelProps={{ shrink: true }} />
                </Grid>

                <Grid size={{ md: 6 }} >
                  <Button variant='outlined' >Upload Image <input type='file' hidden accept='image/' /> </Button>
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField label="skills(comma-separated)" placeholder="Javascript, Node.js, React etc" type='text' fullWidth variant='outlined' required />
                </Grid>

              </Grid>
            </Grid>

            <Grid size={{ md: 8 }} sx={{ border: "1px solid black", p: 3 }} spacing={2}>
              {/* Right side content can go here */}
              {/* <Box sx={{ border: "1px solid #ccc", p: 2, height: "fit-content" }}> */}
              <Typography variant='h6'>Additional Info</Typography>
              <Typography variant='body2' sx={{ opacity: 0.7, mb: 2 }}>
                Profile picture and other details can be added here
              </Typography>
              <Grid container spacing={2}>

                <Grid size={{ md: 6 }}>
                  <TextField label="Employee ID" type='text' fullWidth variant="outlined" />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField label="Designation" type='text' fullWidth variant="outlined" />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField label="Department" type='text' fullWidth variant="outlined" />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField label="Joining date" type='date' fullWidth variant="outlined" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item size={{md:6}} >
                  <TextField  label="Employee Type"  select  fullWidth  variant="outlined"  required  defaultValue=""  >
                    <MenuItem value="">Select Employee Type</MenuItem>
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                    <MenuItem value="Intern">Intern</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField label="Work Location" type='text' fullWidth variant="outlined" />
                </Grid>
                <Grid item size={{md:6}} >
                  <TextField  label="Status"  select  fullWidth  variant="outlined"  required   defaultValue=""  >
                    <MenuItem value="">Select Status</MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                    <MenuItem value="On Leave">On Leave</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField label="Manager name or ID" type='text' fullWidth variant="outlined" />
                </Grid>
              </Grid>

              {/* </Box> */}
            </Grid>
            <Grid size={{ md: 12 }} sx={{ border: "1px solid black", p: 3 }}>
              <Typography variant='h6'>Emergency Info</Typography>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  )
}

export default AddEmployee;




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'blue',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item >xs=6 md=8</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
