import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import Sidebar from './Sidebar';
import Search from './Search';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-grow ${isSidebarOpen ? 'ml-64' : ''}`}>
          <Search toggleSidebar={toggleSidebar} onSignOut={handleSignOut} />
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<Navigate to="/main" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
