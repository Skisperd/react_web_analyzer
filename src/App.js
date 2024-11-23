import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#121212', color: '#fff' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
