import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Larry';
    const showHello = false;
    const showMath = true;
    const num1 = 40;
    const num2 = 23;

    let math;
    if (showMath) {
      math = (
        <h2>
          {num1} + {num2} = {num1 + num2}
        </h2>
      );
    } else {
      math = null;
    }

    return (
      <div className="App">
        <h1>The App Component</h1>
        {showHello ? <h6>HHHHHHellooooooo {name.slice(0, 2)}</h6> : null}
        <h4>Hello {name.toUpperCase()}</h4>
        <h4>1+1 = {1 + 1}</h4>
        {math}
      </div>
    );
  }
}

export default App;
