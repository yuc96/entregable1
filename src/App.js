import React from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import citas from './components/archivosjson/citas.json'
function App() {

  console.log(citas);


  return (
    <div className="App">
      <QuoteBox citasjson={citas}/> 
    </div>
  );
}

export default App;
