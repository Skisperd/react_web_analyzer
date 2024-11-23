import React from 'react';

const Sidebar = () => {
  return (
    <div
      style={{
        width: '250px',
        height: '100%',
        backgroundColor: '#1E1E1E',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.5)',
      }}
    >
      <h2 style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '20px' }}>Dashboard</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button style={navButtonStyle}>🏠 Home</button>
        <button style={navButtonStyle}>⚙️ Settings</button>
        <button style={navButtonStyle}>🔒 Logout</button>
      </div>
    </div>
  );
};

const navButtonStyle = {
  backgroundColor: 'transparent',
  color: '#fff',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  textAlign: 'left',
  padding: '8px',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
};

export default Sidebar;
