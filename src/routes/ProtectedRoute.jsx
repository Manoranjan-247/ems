import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";


const ProtectedRoute = ({children}) => {
    const {auth} = useAuth();

    return auth.isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute