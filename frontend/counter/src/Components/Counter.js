import React from "react"
import "./Counter.css"


function Counter(props) {
  console.log(props)
  return(
    <div class="counter">
      <h3>Days since, {props.CounterName} </h3>
      <h1>{props.daysSince}</h1>
      <button class="reset" variant="primary" onclick="resetCounter()">Reset</button>
      <button class="delete" variant="primary" onclick="deleteCounter()">Delete</button>
    </div>
  )
}

function resetCounter() {
  fetch("http://127.0.0.1:5000/reset")
}

function deleteCounter() {
  fetch("http://127.0.0.1:5000/delete")
}

export default Counter
