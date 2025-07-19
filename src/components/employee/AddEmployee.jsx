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






















// import React, { useState } from 'react'
// import { styled } from '@mui/material/styles';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import Paper from '@mui/material/Paper';
// import { Box, Typography, Button, Grid, TextField, MenuItem, Avatar, FormControlLabel, Checkbox } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';


// const schema = yup.object().shape({
//   fullName: yup.string()
//     .required("Full Name is required!")
//     .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces are allowed.")
//     .min(2, "Full Name must be at least 2 characters.")
//     .max(50, "Full Name must be at most 50 characters."),
//   email: yup.string()
//     .email("Invalid email format").
//     required("Email is required"),
//   phoneNumber: yup
//     .string()
//     .required("Phone number is required")
//     .matches(
//       /^\+?[0-9]{10,15}$/,
//       "Phone number must contain only digits and can optionally start with '+'"
//     ),
//   dateOfBirth: yup
//     .string()
//     .required("Date of birth is required"),
//   skills: yup
//     .string()
//     .required("Skills are required")
//     .test(
//       "valid-skills",
//       "Each skill must contain only letters, numbers, spaces, or + . #",
//       value => {
//         if (!value) return false;
//         const skillsArray = value.split(',').map(skill => skill.trim());
//         const skillRegex = /^[A-Za-z0-9+.# ]+$/;

//         return skillsArray.every(skill => skillRegex.test(skill));
//       }
//     ),
//   profilePicture: yup
//     .mixed()
//     .required("Profile picture is required")
//     .test(
//       "fileType",
//       "Only .jpg, .jpeg, or .png files are allowed",
//       value => {
//         if (!value) return false;
//         const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//         return allowedTypes.includes(value.type);
//       }
//     )



// })


// const Emp = () => {

//   const form = useForm({
//     defaultValues: {

//     },
//     resolver: yupResolver(schema)
//   });

//   const { register, handleSubmit, formState } = form;
//   const { errors } = formState

//   const navigate = useNavigate();
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);



//   const handleclick = () => {
//     navigate("/employees")
//   }

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedImage(file);
//       // Create preview URL
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setImagePreview(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

  

//   const triggerFileInput = () => {
//     document.getElementById('image-upload-input').click();
//   };

//   const handleFormSubmit = (data) => {
//     console.log("Form data : ", data);
//   }

//   return (
//     <Box p={3}>
//       <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
//         <Button
//           variant="text"
//           sx={{
//             color: 'inherit',
//             '&:hover': { backgroundColor: 'transparent', color: 'blueviolet' }
//           }}
//           onClick={handleclick}
//           startIcon={<KeyboardBackspaceIcon />}
//         >
//           Back to Employees
//         </Button>
//         <Box>
//           <Typography variant='h4' fontWeight={600}>Add New Employee</Typography>
//           <Typography variant='body1' mt={1} sx={{ opacity: 0.7 }}>
//             Fill in the details to add a new employee
//           </Typography>
//         </Box>
//       </Box>

//       <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
//         <Box sx={{ flexGrow: 1 }}>
//           <Grid container spacing={2}>
//             <Grid size={{ md: 4 }} sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
//               <Typography variant='h5' fontWeight={600} mb={2}>  Personal Information  </Typography>

//               {/* Inner Grid Container */}
//               <Grid container spacing={2}>
//                 <Grid size={{ md: 12 }}>
//                   <TextField label="Full Name" type='text' fullWidth variant="outlined" {...register("fullName")} error={!!errors.fullName} helperText={errors.fullName?.message} />
//                 </Grid>
//                 <Grid size={{ md: 12 }}>
//                   <TextField label="Email" type='email' fullWidth  variant="outlined" {...register("email")} error={!!errors.email} helperText={errors.email?.message} />
//                 </Grid>
//                 <Grid size={{ md: 6 }}>
//                   <TextField label="Phone Number" type='text' fullWidth  variant="outlined" {...register("phoneNumber")} error={!!errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
//                 </Grid>
//                 <Grid size={{ md: 6 }}>
//                   <TextField label="Date of Birth" type='date' fullWidth variant="outlined"  InputLabelProps={{ shrink: true }} {...register("dateOfBirth")} error={!!errors.dateOfBirth} helperText={errors.dateOfBirth?.message}/>
//                 </Grid>
//                 <Grid size={{ md: 12 }}>
//                   <TextField label="Skills (comma-separated)" placeholder="Javascript, Node.js, React etc" type='text' fullWidth variant='outlined' required {...register("skills")}  error={!!errors.skills} helperText={errors.skills?.message} />
//                 </Grid>

//                 {/* Image Upload Section */}
//                 <Grid size={{ md: 12 }}>
//                   <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
//                     {/* {imagePreview && (
//                       <Avatar
//                         src={imagePreview}
//                         sx={{ width: 100, height: 100 }}
//                         alt="Employee Preview"
//                       />
//                     )} */}
//                     <Button
//                       variant='outlined'
//                       onClick={triggerFileInput}
//                       sx={{ width: 'fit-content' }}
//                     >
//                       {selectedImage ? 'Change Image' : 'Upload Image'}
//                     </Button>
//                     <input
                      
//                       id="image-upload-input"
//                       type='file'
//                       hidden
//                       accept='image/*'
//                       onChange={handleImageUpload}
                      
//                     />
//                     {selectedImage && (
//                       <Typography variant="caption" color="textSecondary">
//                         Selected: {selectedImage.name}
//                       </Typography>
//                     )}
//                     {imagePreview && (
//                       <Avatar
//                         src={imagePreview}
//                         sx={{ width: 100, height: 100 }}
//                         alt="Employee Preview"
//                       />
//                     )}
//                   </Box>
//                 </Grid>


//               </Grid>
//             </Grid>

//             <Grid size={{ md: 8 }} sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }} spacing={2}>
//               <Typography variant='h5' fontWeight={600} mb={2} >  Job Information  </Typography>
//               <Grid container spacing={2}>
//                 <Grid size={{ md: 6 }}>
//                   <TextField label="Employee ID" type='text' fullWidth required variant="outlined" {...register("id")} />
//                 </Grid>
//                 <Grid size={{ md: 6 }}>
//                   <TextField label="Designation" type='text' fullWidth required variant="outlined"  {...register("designation")} />
//                 </Grid>
//                 <Grid size={{ md: 6 }}>
//                   <TextField label="Department" type='text' fullWidth required variant="outlined" {...register("department")} />
//                 </Grid>
//                 <Grid size={{ md: 6 }}>
//                   <TextField label="Joining date" type='date' fullWidth required variant="outlined" InputLabelProps={{ shrink: true }} {...register("joiningDate")} />
//                 </Grid>
//                 <Grid item size={{ md: 6 }} >
//                   <TextField label="Employee Type" select fullWidth variant="outlined" required defaultValue="" {...register("employeeType")} >
//                     <MenuItem value="">Select Employee Type</MenuItem>
//                     <MenuItem value="Full Time">Full Time</MenuItem>
//                     <MenuItem value="Part Time">Part Time</MenuItem>
//                     <MenuItem value="Intern">Intern</MenuItem>
//                   </TextField>
//                 </Grid>
//                 <Grid size={{ md: 6 }}>
//                   <TextField label="Work Location" type='text' fullWidth required variant="outlined" {...register("workLocation")} />
//                 </Grid>
//                 <Grid item size={{ md: 6 }} >
//                   <TextField label="Status" select fullWidth variant="outlined" required defaultValue="" {...register("status")} >
//                     <MenuItem value="">Select Status</MenuItem>
//                     <MenuItem value="Active">Active</MenuItem>
//                     <MenuItem value="Inactive">Inactive</MenuItem>
//                     <MenuItem value="On Leave">On Leave</MenuItem>
//                   </TextField>
//                 </Grid>
//                 <Grid size={{ md: 6 }}>
//                   <TextField label="Manager name or ID" type='text' fullWidth variant="outlined" {...register("managerId")} />
//                 </Grid>
//                 <Grid item md={6}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={isAdmin}
//                         onChange={(e) => setIsAdmin(e.target.checked)}
//                         color="primary"
//                       />
//                     }
//                     label="Is Admin"
//                     {...register("isAdmin")}
//                     required
//                   />
//                 </Grid>
//               </Grid>
//             </Grid>

//             <Grid size={{ md: 12 }} sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
//               <Typography variant='h5' fontWeight={600} mb={2}>  Emergency Contact  </Typography>
//               <Grid container spacing={2} sx={{ mt: 1 }}>
//                 <Grid size={{ md: 4 }}>
//                   <TextField label=" Contact Name" type='text' fullWidth variant="outlined" required />
//                 </Grid>
//                 <Grid size={{ md: 4 }}>
//                   <TextField label="Relationship" placeholder='e.g., Spouse, Parent' type='text' fullWidth variant="outlined" required />
//                 </Grid>
//                 <Grid size={{ md: 4 }}>
//                   <TextField label="Phone Number" type='text' fullWidth variant="outlined" required />
//                 </Grid>

//               </Grid>
//             </Grid>

//             {/* Submit Button */}
//             <Grid size={{ md: 12 }} sx={{ mt: 3 }}>
//               <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
//                 <Button variant="outlined" onClick={handleclick}>
//                   Cancel
//                 </Button>
//                 <Button variant="contained" color="primary" type='submit'>
//                   Add Employee
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </form>
//     </Box>
//   )
// }

// export default Emp;