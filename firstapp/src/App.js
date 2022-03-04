import React from 'react';
import Message from './Message';
import './App.css'


function App() {
  const name = '"СДЕЛАНО"';
  return (
    <div className="App">
      <h1 className="App_h1">Первое задание</h1>
      <Message text={name} />
    </div>
  );
}

export default App;
