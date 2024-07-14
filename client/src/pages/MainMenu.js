import React from 'react';

const MainMenu = () => {
  const username = localStorage.getItem('username');

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <ul>
        <li>World Chat</li>
        <li>Rooms</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default MainMenu;
