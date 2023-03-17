import React, { useState } from 'react';
import DsisplayEntries from "./Components/DisplayEntries"

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: "11/23/2021"}, {weight: 171, date: "1/21/2022"}])

  return (
    <div>
      <DsisplayEntries parentEntries = {entries}/>

    </div>
  );
}

export default App;
