import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Navigation/Sidebar';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <Navigation />
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
