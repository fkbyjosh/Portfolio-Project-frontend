import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import { AuthProvider } from './context/AuthContext';
import Register from './components/Register';
import Login from './components/Login';
import PolicyList from './components/PolicyList';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex">
          <Sidebar />
          <div className="content flex-grow-1">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/policies" element={<PolicyList />} />
          </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
