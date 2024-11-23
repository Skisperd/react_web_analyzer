import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '16px' }}>
      <h1>Detalhes da User Story</h1>
      <p>Exibindo detalhes da User Story com ID: {id}</p>
    </div>
  );
};

export default DetailsPage;
