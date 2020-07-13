import React from "react"
import ReactDOM from "react-dom"
import Counter from "./Counter.js"

class CounterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({ counters: data})
     })
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counter => {
          return(
            <Counter counterName = {counter.counterName} daysSince = {counter.daysSince} />
          );
        })}
      </div>
    )
  }
}
export default CounterList
