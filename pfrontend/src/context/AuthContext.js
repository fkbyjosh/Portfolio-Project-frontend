import React, { createContext, useState, useEffect } from 'react';
import API from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      // Optionally, fetch user data from an endpoint like /api/user/ to verify the token
      setUser({ token }); // For now, just set the token
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await API.post('/api/login/', { username, password });
      const { access, refresh } = response.data;
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      setUser({ token: access });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  const register = async (username, email, password) => {
    try {
      const response = await API.post('/api/register/', { username, email, password });
      const { access, refresh } = response.data;
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      setUser({ token: access });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      await API.post('/api/logout/', { refresh: refreshToken });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};