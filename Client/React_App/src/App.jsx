import React from 'react';
import './App.css';
function App() {
  return (
    <div classnName="main">
      <nav className="navbar">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="options">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </nav>

      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
