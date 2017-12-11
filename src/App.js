import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {

  setFib(e) {
    this.setState({
      currentFib: e.target.value
    })
  }
  render() {
    const list = [0, 1, 3, 5, 7];
    const fib = "0";
    const fibList = list.map((list, index) => {
      return <li key={index}> {list}</li>
    });
    return (
      <div className="App">

        <input type="text" onChange={ this.setFib } value={this.state.setFib.currentFib} /><button type="submit">Submit</button>
        <ul>
          {fibList}
        </ul>
      </div>
    );
  }
}

export default App;
