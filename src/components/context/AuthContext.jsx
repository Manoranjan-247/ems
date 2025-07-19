// import React, { createContext, useState, useContext, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     isAuthenticated: false,
//     user: null,
//   });

//   // Load auth state from localStorage when component mounts
//   useEffect(() => {
//     const storedAuth = localStorage.getItem("auth");
//     if (storedAuth) {
//       setAuth(JSON.parse(storedAuth));
//     }
//   }, []);

//   const login = (email, password) => {
//     if (email === "admin@example.com" && password === "admin123") {
//       const newAuth = { isAuthenticated: true, user: { email } };
//       setAuth(newAuth);
//       localStorage.setItem("auth", JSON.stringify(newAuth)); // Save to localStorage
//       return { success: true };
//     } else {
//       return { success: false, message: "Invalid credentials" };
//     }
//   };

//   const logout = () => {
//     setAuth({ isAuthenticated: false, user: null });
//     localStorage.removeItem("auth"); // Clear from localStorage
//   };

//   return (
//     <AuthContext.Provider value={{ auth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);





// AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({

    isAuthenticated: false,

    user: null,

  });

  const [loading, setLoading] = useState(true); // 👈 add this

  useEffect(() => {

    const storedAuth = localStorage.getItem("auth");

    if (storedAuth) {

      setAuth(JSON.parse(storedAuth));

    }

    setLoading(false); // ✅ mark as loaded

  }, []);

  const login = (email, password) => {

    if (email === "admin@example.com" && password === "admin123") {

      const newAuth = { isAuthenticated: true, user: { email } };

      setAuth(newAuth);

      localStorage.setItem("auth", JSON.stringify(newAuth));

      return { success: true };

    } else {

      return { success: false, message: "Invalid credentials" };

    }

  };

  const logout = () => {

    setAuth({ isAuthenticated: false, user: null });

    localStorage.removeItem("auth");

  };

  return (
<AuthContext.Provider value={{ auth, login, logout, loading }}>

      {children}
</AuthContext.Provider>

  );

};

export const useAuth = () => useContext(AuthContext);
 