import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);

  const summaryData = {
    userStories: 10,
    testCases: 25, 
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };

    const botResponse = {
      sender: 'bot',
      text: 'Você disse: "${input}". Aqui está uma resposta simulada.',
    };

    setResponses([...responses, userMessage, botResponse]);
    setInput('');
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Cards no topo */}
        <div style={{ display: 'flex', gap: '16px', padding: '16px', backgroundColor: '#121212' }}>
          <div
            style={{
              flex: 1,
              backgroundColor: '#1E1E1E',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h2 style={{ color: '#4CAF50', fontSize: '24px', marginBottom: '8px' }}>
              {summaryData.userStories}
            </h2>
            <p style={{ color: '#ccc', fontSize: '16px' }}>User Stories</p>
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: '#1E1E1E',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h2 style={{ color: '#4CAF50', fontSize: '24px', marginBottom: '8px' }}>
              {summaryData.testCases}
            </h2>
            <p style={{ color: '#ccc', fontSize: '16px' }}>Test Cases</p>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', backgroundColor: '#121212' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>Fala ai o que tu quer analisar</h1>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {responses.map((message, index) => (
              <div
                key={index}
                style={{
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: message.sender === 'user' ? '#4CAF50' : '#1E1E1E',
                  color: message.sender === 'user' ? '#fff' : '#ccc',
                  padding: '12px',
                  borderRadius: '8px',
                  maxWidth: '60%',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>

        {/* Campo de entrada */}
        <div
          style={{
            padding: '16px',
            backgroundColor: '#1E1E1E',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            borderTop: '1px solid #333',
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #333',
              backgroundColor: '#121212',
              color: '#fff',
              fontSize: '16px',
              outline: 'none',
            }}
          />
          <button
            onClick={handleSendMessage}
            style={{
              padding: '12px 16px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
