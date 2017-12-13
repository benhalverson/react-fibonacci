import React from 'react';
import './App.css';

class App extends React.Component {

  setFib(e) {
    this.setState({
      currentFib: 0
    })
      //F(n) = F(n-1) + F(n-2), n>1
  if(this.state.value === 0) return 0;
  if(this.state.value === 1) return 1;
  if(this.state.value > 1) {
      return f = (this.state.value - 1) + (this.state.value -2);
  }
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
