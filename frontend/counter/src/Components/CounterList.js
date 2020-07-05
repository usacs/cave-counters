import React from "react"
import ReactDOM from "react-dom"
import Counter from "./Counter.js"

class CounterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [],
    }
  }

  UNSAFE_componentDidMount() {
    fetch("http://127.0.0.1:5000/")
    .then(response => response.json())
    .then(data => this.setState({ counters: data}))
  }

  render() {
    return (
      <div>
      {this.state.counters.map((counter) => {
        console.log(counter);
      })}
      </div>
    )
  }
}
export default CounterList
