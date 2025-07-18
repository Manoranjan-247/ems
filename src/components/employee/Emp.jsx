import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Paper from '@mui/material/Paper';
import { Box, Typography, Button, Grid, TextField, MenuItem, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Emp = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  // const [imagePreview, setImagePreview] = useState(null);

  const handleclick = () => {
    navigate("/employees")
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        // setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('image-upload-input').click();
  };

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
            <Grid size={{ md: 4 }} sx={{  p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
              <Typography variant='h5' fontWeight={600} mb={2}>  Personal Information  </Typography>

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
                <Grid size={{ md: 12 }}>
                  <TextField label="Skills (comma-separated)" placeholder="Javascript, Node.js, React etc" type='text' fullWidth variant='outlined' required />
                </Grid>

                {/* Image Upload Section */}
                <Grid size={{ md: 12 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    {/* {imagePreview && (
                      <Avatar
                        src={imagePreview}
                        sx={{ width: 100, height: 100 }}
                        alt="Employee Preview"
                      />
                    )} */}
                    <Button 
                      variant='outlined' 
                      onClick={triggerFileInput}
                      sx={{ width: 'fit-content' }}
                    >
                      {selectedImage ? 'Change Image' : 'Upload Image'}
                    </Button>
                    <input 
                      id="image-upload-input"
                      type='file' 
                      hidden 
                      accept='image/*' 
                      onChange={handleImageUpload}
                    />
                    {selectedImage && (
                      <Typography variant="caption" color="textSecondary">
                        Selected: {selectedImage.name}
                      </Typography>
                    )}
                  </Box>
                </Grid>

                
              </Grid>
            </Grid>

            <Grid size={{ md: 8 }} sx={{  p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} spacing={2}>
            <Typography variant='h5' fontWeight={600} mb={2}>  Job Information  </Typography>
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
            </Grid>
            
            <Grid size={{ md: 12 }} sx={{  p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <Typography variant='h5' fontWeight={600} mb={2}>  Emergency Contact  </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid size={{ md: 4 }}>
                  <TextField label=" Contact Name" type='text' fullWidth variant="outlined" required/>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <TextField label="Relationship" placeholder='e.g., Spouse, Parent' type='text' fullWidth variant="outlined" required/>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <TextField label="Phone Number" type='text' fullWidth variant="outlined" required/>
                </Grid>
                
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Grid size={{ md: 12 }} sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button variant="outlined" onClick={handleclick}>
                  Cancel
                </Button>
                <Button variant="contained" color="primary">
                  Add Employee
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  )
}

export default Emp;