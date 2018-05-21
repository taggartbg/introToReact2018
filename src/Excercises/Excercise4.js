import React, { Component } from 'react';

/* 
  Excercise 4

  Pass the updated time to the child component
*/

class Excercise4 extends Component {
  constructor() {
    super()

    const now = new Date();
    this.state = {timeObject: now}
  }

  handleClick() {
    const now = new Date();
    this.setState({
      timeObject: now
    })
  }

  render() {
    return (
      <div className="Excercise4" onClick={this.handleClick}>
        It is {/* Update me! */}
      </div>
    );
  }
}

class TimeDisplay extends Component() {
  render() {
    <span>{this.props.timeObject.toString()}</span>
  }
}

export default Excercise4;
