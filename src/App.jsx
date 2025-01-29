import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
