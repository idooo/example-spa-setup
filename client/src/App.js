import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {}

  constructor(props) {
    super(props)

    fetch('/api/hello')
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.msg })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Test response "{this.state.data}"
          </p>
        </header>
      </div>
    );
  }
}

export default App;
