import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div>
      <button style={{backgroundColor:"brown"}} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
