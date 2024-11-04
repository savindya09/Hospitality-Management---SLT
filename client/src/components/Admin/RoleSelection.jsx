import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/RoleSelection.css'; // Add custom CSS for styling if needed

const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const roles = [
    { id: 1, name: 'Front Desk' },
    { id: 2, name: 'Hotel Admin' },
    { id: 3, name: 'Hotel Staff' },
    { id: 4, name: 'SLT Admin' },
  ];

  const handleRoleSelect = (role) => {
    // Redirect to the login page with the selected role
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="role-selection-page">
      <h2>Select Your Role</h2>
      <div className="role-cards">
        {roles.map((role) => (
          <div
            key={role.id}
            className="role-card"
            onClick={() => handleRoleSelect(role.name)}
          >
            {role.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleSelectionPage;
