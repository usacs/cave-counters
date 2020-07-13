import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CounterList from "./Components/CounterList.js"

class App extends React.Component {
  state= {
    showForm: false
  }
  submitFormHandler = event => {
    fetch("http://127.0.0.1:5000/add", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        counterName: this.refs.name.value,
        daysSince: this.refs.days.value
      })
    });
  }
  showForm() {
      return(
      <div>
        <form class= "add-app" onSubmit={this.submitFormHandler}>
          <label>
            Counter Name:
            <input type="text" ref ="name" />
          </label>

          <label>
            Days Since:
            <input type="text" ref = "days" />
          </label>
          <button class="submit">Create</button>
        </form>
      </div>
    );
  }
  render() {
    return(
      <div class ="hello">
        <CounterList />
        <button class="add" variant="primary" onClick={() => this.setState({showForm: true}) }>Add Counter</button>
        {this.state.showForm ? this.showForm() : null}
      </div>
    );
  }
}

export default App;
