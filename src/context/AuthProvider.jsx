// context/AuthProvider.jsx
import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Set default localStorage if not already set
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage();
    }

    const { employees, admin } = getLocalStorage();
    const allUsers = [...(employees || []), ...(admin || [])]; // Combine both
    setUserData(allUsers);
  }, []);

  return (
    <AuthContext.Provider value={{ userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
