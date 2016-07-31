import React, { Component } from 'react';
import './App.css';
import Fortunes from './Fortunes'

const FAKE_FORTUNES = [
  "Not to break is better than to mend.",
  "Everyone has a photographic memory, some just don't have film.",
  "Bread never falls but on its buttered side.",
  "An elephant never forgets.",
  "Pentium wise, pen and paper foolish."
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Fortune Cookies</h2>
        </div>

        <div className="fortunes">
          {/* FIXME1: Replace FAKE_FORTUNES with real data using api */}
          <Fortunes
            fortunes={FAKE_FORTUNES}
          />
        </div>
      </div>
    );
  }
}

export default App;
