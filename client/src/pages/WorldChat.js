import React, { useState, useEffect } from 'react';
import socket from '../socket';

const WorldChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => socket.off('message');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default WorldChat;
