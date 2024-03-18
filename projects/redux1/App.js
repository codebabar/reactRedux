import React from 'react';
import { useSelector } from 'react-redux';

function App() {

const name = useSelector(state =>state.name)


  return (
    <div>
       <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
