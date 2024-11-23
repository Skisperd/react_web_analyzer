import React from 'react';

const DashboardTile = ({ title, description }) => {
  return (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <h3 style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '18px' }}>{title}</h3>
      <p style={{ color: '#ccc', fontSize: '14px' }}>{description}</p>
    </div>
  );
};

export default DashboardTile;
