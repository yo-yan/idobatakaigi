import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Chat from './pages/Chat';

const App = () => {

  const [name, setName] = useState('');

  if (name.length === 0) {
    return <Login setName={setName} />
  } else {
    return <Chat name={name} />
  }
}

export default App
