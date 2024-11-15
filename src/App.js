import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BandInfo from './BandInfo';

function App() {
  return (
    <div>
      <h1 className="app-heading">Music Band</h1>
      <BandInfo />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
