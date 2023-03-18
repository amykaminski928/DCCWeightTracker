import React, { useState } from 'react';
import DsisplayEntries from "./Components/DisplayEntries"
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: "11/23/2021"}, {weight: 171, date: "1/21/2022"}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <DsisplayEntries parentEntries = {entries}/>
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      <EntriesChartTracker parentEntries = {entries}/>

    </div>
  );
}

export default App;
