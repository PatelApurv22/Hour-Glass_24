import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import SelectView from './pages/select_view';
import ManagerDashboard from './pages/ManagerDashboard';
import ArchivePage from './pages/ArchivePage';
import BinPage from './pages/BinPage';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ProjectPage from './pages/ProjectPage';
import './variables.css';

const App = () => {
  return (
    <Router>
      <div className="app-container"> {}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/select_view" element={<SelectView />} />
          <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/bin" element={<BinPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;