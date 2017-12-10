import React, { Component } from 'react';
import './App.css';

class App extends Component {

  onClick() {
    this.fibonacci(5);
    console.log('button clicked');
  }
  onSubmit() {
    console.log('submitted');
  }
  render() {
    const list = [0, 1, 3, 5, 7];
    const fib = "0";
    const fibList = list.map((list, index) => {
      return <li key={index}> {list}</li>
    });
    return (
      <div className="App">

        <input type="text" /><button type="submit">Submit</button>
        <ul>
          {fibList}
        </ul>
      </div>
    );
  }
}

export default App;
