import React, { useState,useEffect } from 'react';
import { UserContext } from './authContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData) {
      setUser(storedUserData);
    }
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
