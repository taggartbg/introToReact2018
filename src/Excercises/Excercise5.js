import React, { Component } from 'react';

/* 
  Excercise 5

  1) Write an event handler for the input
  2) Pass it to the child component
*/

class Excercise5 extends Component {
  render() {
    return (
      <div className="Excercise5">
       <div>
           The input says: {/* update me */}
        </div>
        <MyInput />
      </div>
    );
  }
}

class MyInput extends Component() {
  render() {
    <div>
        <input onChange={} />
    </div>
  }
}

export default Excercise5;
