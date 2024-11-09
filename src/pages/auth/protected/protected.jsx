import { Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import api from '@/common/api';

const Protected = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  // To handle the loading state

  const checkAuthentication = async () => {
    try {
      const response = await api.checkAuth();
      console.log(response);

      if (response === 'OK') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false); // Once the check is complete, stop loading
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state while checking auth
  }

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default Protected;
