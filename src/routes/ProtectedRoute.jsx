// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../components/context/AuthContext";


// const ProtectedRoute = ({children}) => {
//     const {auth} = useAuth();

//     return auth.isAuthenticated ? children : <Navigate to="/login" replace />;
// }

// export default ProtectedRoute


import React from "react";

import { Navigate } from "react-router-dom";
import EmployeeListShimmer from "../components/employee/EmployeeListShimmer";
import { useAuth } from "../components/context/AuthContext";
import { Box } from "@mui/material";

const ProtectedRoute = ({ children }) => {

    const { auth, loading } = useAuth();

    if (loading) {

        return <Box display="flex" justifyContent="center" alignItems="center">Loading</Box> 

    }

    return auth.isAuthenticated ? children : <Navigate to="/login" replace />;

};

export default ProtectedRoute;
