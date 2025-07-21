import { createSlice } from "@reduxjs/toolkit";


const employeeSlice = createSlice({
    name: 'employee',
    initialState:{
        employees: [
          {
            empId: "EMP123",
            fullName: "Ravi Kumar",
            email: "ravi@example.com",
            phoneNumber: "9876543210",
            designation: "Software Engineer",
            department: "Engineering",
            joiningDate: "2023-01-15",
            employeeType: "Full-time",         // Full-time / Part-time / Intern
            workLocation: "Bangalore",
            profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg",
            status: "Active",                 // Active / Inactive
            isAdmin: true,
            managerNameOrId: "EMP101",
            skills: ["React", "Node", "MongoDB", "Java", "Typescript", "SQL", ],
            dateOfBirth: "1995-06-12",
            emergencyContact: {
              fullName: "Suresh Kumar",
              relationship:"Brother",
              phoneNumber: "9123456789"
            }
          },
          {
            empId: "EMP124",
            fullName: "Rakesh Kumar",
            email: "ravi@example.com",
            phoneNumber: "9876543210",
            designation: "Software Engineer",
            department: "Engineering",
            joiningDate: "2023-01-15",
            employeeType: "Full-time",         // Full-time / Part-time / Intern
            workLocation: "Bangalore",
            profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/2560px-Cute_dog.jpg",
            status: "Active",                 // Active / Inactive
            isAdmin: false,
            managerNameOrId: "EMP101",
            skills: ["React", "Node", "MongoDB"],
            dateOfBirth: "1995-06-12",
            emergencyContact: {
              fullName: "Suresh Kumar",
              relationship:"Brother",
              phoneNumber: "9123456789"
            }
          },
          {
            empId: "EMP125",
            fullName: "Sumeya bano",
            email: "ravi@example.com",
            phoneNumber: "9876543210",
            designation: "Software Engineer",
            department: "Engineering",
            joiningDate: "2023-01-15",
            employeeType: "Full-time",         // Full-time / Part-time / Intern
            workLocation: "Bangalore",
            profilePicture: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
            status: "On Leave",                 // Active / Inactive / On Leave
            isAdmin: true,
            managerNameOrId: "EMP101",
            skills: ["React", "Node", "MongoDB"],
            dateOfBirth: "1995-06-12",
            emergencyContact: {
              fullName: "Suresh Kumar",
              relationship:"Brother",
              phoneNumber: "9123456789"
            }
          },
          {
            empId: "EMP126",
            fullName: "Sarat Nayak",
            email: "sarat@example.com",
            phoneNumber: "98765432126",
            designation: "Software Engineer",
            department: "Engineering",
            joiningDate: "2023-01-15",
            employeeType: "Full-time",         // Full-time / Part-time / Intern
            workLocation: "Bhubaneswar",
            profilePicture: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
            status: "On Leave",                 // Active / Inactive / On Leave
            isAdmin: true,
            managerNameOrId: "EMP101",
            skills: ["React", "Node", "MongoDB"],
            dateOfBirth: "1995-06-12",
            emergencyContact: {
              fullName: "Suresh Kumar",
              relationship:"Brother",
              phoneNumber: "9123456789"
            }
          },
          {
            empId: "EMP127",
            fullName: "Satya panda",
            email: "satya@example.com",
            phoneNumber: "9876543210",
            designation: "Software Engineer",
            department: "Engineering",
            joiningDate: "2023-01-15",
            employeeType: "Full-time",         // Full-time / Part-time / Intern
            workLocation: "Pune",
            profilePicture: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
            status: "On Leave",                 // Active / Inactive / On Leave
            isAdmin: true,
            managerNameOrId: "EMP101",
            skills: ["React", "Node", "MongoDB", "Java"],
            dateOfBirth: "1995-06-12",
            emergencyContact: {
              fullName: "Suresh Kumar",
              relationship:"Brother",
              phoneNumber: "9123456789"
            }
          },
          {
            empId: "EMP128",
            fullName: "Shubhakant pradhan",
            email: "Shubhakant@example.com",
            phoneNumber: "9876543210",
            designation: "Software Engineer",
            department: "Engineering",
            joiningDate: "2023-01-15",
            employeeType: "Full-time",         // Full-time / Part-time / Intern
            workLocation: "Pune",
            profilePicture: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
            status: "On Leave",                 // Active / Inactive / On Leave
            isAdmin: true,
            managerNameOrId: "EMP101",
            skills: ["React", "Node", "MongoDB", "Java", "Typescript"],
            dateOfBirth: "1995-06-12",
            emergencyContact: {
              fullName: "Suresh Kumar",
              relationship:"Brother",
              phoneNumber: "9123456789"
            }
          },
          {
            empId: "EMP127",
            fullName: "Khitish padhihary",
            email: "khitish@example.com",
            phoneNumber: "9876543210",
            designation: "Software Engineer",
            department: "Engineering",
            joiningDate: "2023-01-15",
            employeeType: "Full-time",         // Full-time / Part-time / Intern
            workLocation: "Pune",
            profilePicture: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
            status: "On Leave",                 // Active / Inactive / On Leave
            isAdmin: true,
            managerNameOrId: "EMP101",
            skills: ["React", "Node", "MongoDB", "Java"],
            dateOfBirth: "1995-06-12",
            emergencyContact: {
              fullName: "Suresh Kumar",
              relationship:"Brother",
              phoneNumber: "9123456789"
            }
          }
        ],
    },
    reducers:{
        addEmployee: (state, action) => {
          console.log("Add employee is called");
            state.employees.push(action.payload);
        },

        updateEmployee: (state, action) => {
            const index = state.employees.findIndex((emp) => emp.empId === action.payload.empId);

            if(index !== -1){
                state.employees[index] = action.payload
            }
        },
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter((emp)=> emp.id !== action.payload)
        }
    }
})

export const {addEmployee, updateEmployee, deleteEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;

export const selectEmployeeById = (state, id) =>  {
    return state.employee.employees.find((emp) => emp.id === id);
}


const x = [
 ]