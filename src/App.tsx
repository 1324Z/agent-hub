import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import UserManagement from './pages/UserManagement';
import OperationsConfig from './pages/OperationsConfig';
import OperationsSupport from './pages/OperationsSupport';
import SessionManagement from './pages/SessionManagement';
import DataAnalysis from './pages/DataAnalysis';

const AppContent = () => {
  const location = useLocation();
  const isAdminPage = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-surface flex">
      <Sidebar />
      <div className={`flex-1 flex flex-col min-w-0 ${isAdminPage ? 'pl-64' : ''}`}>
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<Navigate to="/admin/config" replace />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/config" element={<OperationsConfig />} />
            <Route path="/admin/support" element={<OperationsSupport />} />
            <Route path="/admin/sessions" element={<SessionManagement />} />
            <Route path="/admin/analytics" element={<DataAnalysis />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
