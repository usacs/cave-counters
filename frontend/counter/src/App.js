import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import CounterList from "./Components/CounterList.js"

class App extends React.Component {
  render() {
    return(
      <CounterList />
    );
  }
}

export default App;
/*
<div className = "counters">
  <Counter
    CounterName="Something Happened"
    daysSince = "4"
  />
  <Counter
    CounterName="Something Happened"
    daysSince = "4"
  />
</div>
*/
