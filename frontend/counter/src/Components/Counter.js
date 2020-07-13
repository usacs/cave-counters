import React from "react"
import "./Counter.css"


class Counter extends React.Component {
  resetCounter(props) {
    fetch("http://127.0.0.1:5000/reset", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        counterName: props.counterName,
        daysSince: props.daysSince
      })
    });
  }
  deleteCounter(props) {
    fetch("http://127.0.0.1:5000/delete", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        counterName: props.counterName,
        daysSince: props.daysSince
      })
    });
  }
  render() {
    return(
      <div class="counter">
        <h3>Days since, {this.props.counterName} </h3>
        <h1>{this.props.daysSince}</h1>
        <button class="reset" variant="primary" onClick={() => this.resetCounter(this.props)}>Reset</button>
        <button class="delete" variant="primary" onClick={() => this.deleteCounter(this.props)}>Delete</button>
      </div>
    )
  }
}


export default Counter
