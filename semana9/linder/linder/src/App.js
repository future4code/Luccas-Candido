import React from 'react';
import {useState} from 'react'
import UsersScreen from "./components/UsersScreen"
import MatchScreen from "./components/MatchScreen"

function App() {
const [currentPage, setCurrentPage] = useState('home')

const onClickMatches = () => {
  setCurrentPage('matches')
}

const onClickBack = () => {
  setCurrentPage('home')
}

const renderize = () => {
  if(currentPage === 'home') {
    return (<UsersScreen onClickMatches={onClickMatches} />)
  } else if(currentPage === 'matches') {
    return(<MatchScreen onClickBack={onClickBack} />)
  }
}

  return (
    <div>
      {renderize()}
    </div>
  );
}

export default App;
