import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleSelectionPage from './components/Admin/RoleSelection'; // Adjust path as needed
//import LoginPage from './components/LoginPage'; // Placeholder for your login page component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the role selection page */}
          <Route path="/" element={<RoleSelectionPage />} />
          
          {/* Route for the login page
          <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
