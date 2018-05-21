import React, { Component } from 'react';

/* 
  Excercise 2

  1) Set an initial state
  2) Update the state with a new time every second
*/

class Excercise2 extends Component {
  constructor() {
    super()

    this.state = {}

    setInterval(function() {
      // This function will fire every second
    }, 1000)
  }

  render() {

    return (
      <div className="Excercise2">
        It is {this.state.timeString}
      </div>
    );
  }
}

export default Excercise2;
