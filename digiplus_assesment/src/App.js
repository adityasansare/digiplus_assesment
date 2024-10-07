import React from 'react';
import InsertSimCard from './components/insertsim';
import SimDetails from './components/simdetails';
import ActivateSimCard from './components/activatesim';
import DeactivateSimCard from './components/deactivatesim';

function App() {
  return (
    <div className="App">
      <h1>SIM Card Management</h1>
      <InsertSimCard />
      <ActivateSimCard />
      <DeactivateSimCard />
      <SimDetails />
    </div>
  );
}

export default App;
