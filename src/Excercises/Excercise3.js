import React, { Component } from 'react';

/* 
  Excercise 3

  Update the time when it is clicked
*/

class Excercise3 extends Component {
  constructor() {
    super()

    const now = new Date();
    this.state = {timeString: now.toString()}
  }

  handleClick() {
    // Update me
  }

  render() {
    return (
      <div className="Excercise3">
        It is {this.state.timeString}
      </div>
    );
  }
}

export default Excercise3;
