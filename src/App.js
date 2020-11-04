import React from 'react';
import Aside from './components/aside';
import Main from './components/main';
import './App.css';
const App = () => {
  return(
    <div className="container">
      <Aside />
      <Main />
    </div>
  )
}

export default App;
