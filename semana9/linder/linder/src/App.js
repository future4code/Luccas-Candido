import React from 'react';
import {useState} from 'react'
import UsersScreen from "./components/UsersScreen"

function App() {
const [currentPage, setCurrentPage] = useState('')

  return (
    <div>
      <UsersScreen />
    </div>
  );
}

export default App;
