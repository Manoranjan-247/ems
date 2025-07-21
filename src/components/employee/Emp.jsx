import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Paper from '@mui/material/Paper';
import { Box, Typography, Button, Grid, TextField, MenuItem, Avatar, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, updateEmployee } from '../../app/employeeSlice'
import { useParams } from 'react-router-dom';

const schema = yup.object().shape({
  fullName: yup.string()
    .required("Full Name is required!")
    .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces are allowed.")
    .min(2, "Full Name must be at least 2 characters.")
    .max(50, "Full Name must be at most 50 characters."),
  email: yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^\+?[0-9]{10,15}$/,
      "Phone number must contain only digits "
    ),
  dateOfBirth: yup
    .string()
    .required("Date of birth is required"),
  skills: yup
    .string()
    .required("Skills are required")
    .test(
      "valid-skills",
      "Each skill must contain only letters, numbers, spaces, or + . #",
      value => {
        if (!value) return false;
        const skillsArray = value.split(',').map(skill => skill.trim());
        const skillRegex = /^[A-Za-z0-9+.# ]+$/;

        return skillsArray.every(skill => skillRegex.test(skill));
      }
    ),
  profilePicture: yup
    .string()
    .required("Profile picture is required")
    .matches(
      /^data:image\/(png|jpe?g|webp);base64,/i,
      "Only PNG, JPG, JPEG, or WEBP base64 images are allowed"
    ),

  empId: yup.
    string()
    .required("Employee ID is required")
    .matches(
      /^[A-Za-z0-9]+$/,
      "Only letters and numbers are allowed"
    ),
  department: yup.string()
    .required("Department ID is required")
    .matches(/^[A-Za-z ]+$/, "Only alphabets  are allowed."
    ),
  designation: yup.string()
    .required("Designation is required")
    .matches(
      /^[A-Za-z0-9 ]+$/,
      "Only alphabets, numbers and spaces are allowed."
    ),
  joiningDate: yup.string()
    .required("JoiningDate is required!"),
  employeeType: yup.string().required("Employee Type is required"),
  workLocation: yup.string().required("Worklocation Type is required"),
  status: yup.string().required("Status is required"),
  managerNameOrId: yup.string().required("Manager name or Id is required"),
  isAdmin: yup.boolean().required("Is Admin is required!"),
  emergencyContact: yup.object({
    fullName: yup.string()
      .required("Fullname is required")
      .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces are allowed")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be at most 50 characters"),
    relationship: yup.string()
      .required("Relationship is required")
      .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces are allowed"),
    phoneNumber: yup.string()
      .required("Phone Number is required")
      .matches(
        /^\+?[0-9]{10,15}$/,
        "Phone number must contain only digits "
      )
  })





})


const Emp = () => {


  const form = useForm({
    defaultValues: {
      isAdmin: false
    },
    resolver: yupResolver(schema)
  });

  const { register, handleSubmit, formState, setValue, reset } = form;
  const { errors } = formState


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  //code for edit 
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const employee = useSelector((store) => store.employee.employees.find((emp) => emp.empId === id));

  useEffect(() => {
    if (isEditMode) {
      if (employee) {
        const formValues = {
          ...employee,
          skills: Array.isArray(employee.skills) ? employee.skills.join(', ') : employee.skills,
        }
        reset(formValues);
        setImagePreview(employee.profilePicture);
        setSelectedImage(employee.profilePicture);
        setIsAdmin(employee.isAdmin)
      }
    }
  }, [id, employee, isEditMode, reset])


  const handleclick = () => {
    navigate("/employees")
  }

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setSelectedImage(file);
  //     setValue('profilePicture', file, { shouldValidate: true }); // Register file with RHF

  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setImagePreview(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        setImagePreview(base64String); // For preview
        setSelectedImage(base64String); // Optional: update selected image state
        setValue('profilePicture', base64String, { shouldValidate: true }); // Save to React Hook Form
      };

      reader.readAsDataURL(file); // Converts to base64
    }
  };


  const triggerFileInput = () => {
    document.getElementById('image-upload-input').click();
  };

  const handleFormSubmit = (data) => {
    console.log("Form data : ", data);
    // console.log("photo url : ", data.profilePicture);

    const skillArray = data.skills.split(', ').map(skill => skill.trim()).filter(skill => skill !== "");
    const formatedData = { ...data, skills: skillArray }
    if (isEditMode) {
      dispatch(updateEmployee({ empId: id, ...formatedData }))
    } else {
      dispatch(addEmployee(formatedData));
    }

    navigate('/employees')
  }

  return (
    <Box p={2}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "column" }, gap: { xs: 1, md: 4 }, mb: { xs: 1, md: 3 }, pl: 2 }}>
        <Button
          // fullWidth
          variant="text"
          disableRipple
          disableFocusRipple
          disableElevation
          sx={{
            color: 'inherit',
            '&:hover': { backgroundColor: 'transparent', color: 'blueviolet' },
            alignSelf: "flex-start",
            justifyContent: "flex-start",
            textAlign: "left",
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

      <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ md: 4 }} sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
              <Typography variant='h5' fontWeight={600} mb={2}>  Personal Information  </Typography>

              {/* Inner Grid Container */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                  <TextField label="Full Name" type='text' fullWidth variant="outlined" {...register("fullName")} error={!!errors.fullName} helperText={errors.fullName?.message} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                  <TextField label="Email" type='email' fullWidth variant="outlined" {...register("email")} error={!!errors.email} helperText={errors.email?.message} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <TextField label="Phone Number" type='text' fullWidth variant="outlined" {...register("phoneNumber")} error={!!errors.phoneNumber} helperText={errors.phoneNumber?.message} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <TextField label="Date of Birth" type='date' fullWidth variant="outlined" InputLabelProps={{ shrink: true }} {...register("dateOfBirth")} error={!!errors.dateOfBirth} helperText={errors.dateOfBirth?.message} />
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                  <TextField label="Skills (comma-separated)" placeholder="Javascript, Node.js, React etc" type='text' fullWidth variant='outlined' required {...register("skills")} error={!!errors.skills} helperText={errors.skills?.message} />
                </Grid>

                {/* Image Upload Section */}
                <Grid size={{ md: 12 }}>
                  <Typography variant="h6" >Profile Picture</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
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

                    {/* Register the file manually with RHF for validation */}
                    <input
                      type="hidden"
                      {...register('profilePicture')}
                    />
                    {selectedImage && (
                      <Typography variant="caption" color="textSecondary">
                        Selected: {selectedImage.name}
                      </Typography>
                    )}
                    {imagePreview && (
                      <Avatar
                        src={imagePreview}
                        sx={{ width: 100, height: 100 }}
                        alt="Employee Preview"
                      />
                    )}
                  </Box>
                  {errors.profilePicture && (
                    <Typography color="error" variant="caption">
                      {errors.profilePicture.message}
                    </Typography>
                  )}
                </Grid>


              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }} sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }} spacing={2}>
              <Typography variant='h5' fontWeight={600} mb={2} >  Job Information  </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <TextField label="Employee ID" type='text' fullWidth required variant="outlined" {...register("empId")} error={!!errors.empId} helperText={errors.empId?.message} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <TextField label="Designation" type='text' fullWidth required variant="outlined"  {...register("designation")} error={!!errors.designation} helperText={errors.designation?.message} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <TextField label="Department" type='text' fullWidth required variant="outlined" {...register("department")} error={!!errors.department} helperText={errors.department?.message} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <TextField label="Joining date" type='date' fullWidth required variant="outlined" InputLabelProps={{ shrink: true }} {...register("joiningDate")} error={!!errors.joiningDate} helperText={errors.joiningDate?.message} />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 6 }} >
                  <TextField label="Employee Type" select fullWidth variant="outlined" required defaultValue="" {...register("employeeType")} error={!!errors.employeeType} helperText={errors.employeeType?.message}>
                    <MenuItem value="">Select Employee Type</MenuItem>
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                    <MenuItem value="Intern">Intern</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <TextField label="Work Location" type='text' fullWidth required variant="outlined" {...register("workLocation")} error={!!errors.workLocation} helperText={errors.workLocation?.message} />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 6 }} >
                  <TextField label="Status" select fullWidth variant="outlined" required defaultValue="" {...register("status")} error={!!errors.status} helperText={errors.status?.message}>
                    <MenuItem value="">Select Status</MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                    {/* <MenuItem value="Inactive">Inactive</MenuItem> */}
                    <MenuItem value="On Leave">On Leave</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                  <TextField label="Manager name or ID" type='text' fullWidth variant="outlined" {...register("managerNameOrId")} error={!!errors.managerNameOrId} helperText={errors.managerNameOrId?.message} />
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isAdmin}
                        onChange={(e) => {
                          setIsAdmin(e.target.checked);
                          setValue("isAdmin", e.target.checked, { shouldValidate: true });
                        }}
                        color="primary"
                      />
                    }
                    label="Is Admin"
                  />
                  {errors.isAdmin && (
                    <Typography color="error" variant="caption">
                      {errors.isAdmin.message}
                    </Typography>
                  )}

                </Grid>
              </Grid>
            </Grid>

            <Grid size={{ md: 12 }} sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
              <Typography variant='h5' fontWeight={600} mb={2}>  Emergency Contact  </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField label=" Contact Name" type='text' fullWidth variant="outlined"  {...register("emergencyContact.fullName")} error={!!errors.emergencyContact?.fullName} helperText={errors.emergencyContact?.fullName?.message} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField label="Relationship" placeholder='e.g., Spouse, Parent' type='text' fullWidth variant="outlined" {...register("emergencyContact.relationship")} error={!!errors.emergencyContact?.relationship} helperText={errors.emergencyContact?.relationship?.message} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField label="Phone Number" type='text' fullWidth variant="outlined" {...register("emergencyContact.phoneNumber")} error={!!errors.emergencyContact?.phoneNumber} helperText={errors.emergencyContact?.phoneNumber?.message} />
                </Grid>

              </Grid>
            </Grid>

            {/* Submit Button */}
            <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button variant="outlined" onClick={handleclick}>
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type='submit'>
                  {isEditMode ? "Update Employee" : "Add Employee"}
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