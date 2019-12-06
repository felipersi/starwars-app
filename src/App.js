import React, { useContext } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Search from './components/Search/Search';


const App = () => {
  
  const { 
    state: { films }} = useContext(SwapiContext)

  return (
      <div className="App">
         <Header />
         <Search />
         { (films.length) ? <Result/> : "" }
      </div> 
  )
}

export default App
