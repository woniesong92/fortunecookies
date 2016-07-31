import React, { Component } from 'react';
import './Fortunes.css';

class Fortunes extends Component {
  render() {
    return (
      <div className="Fortunes">
        <h4>Today's Fortunes</h4>

        <div className="Fortune-items">
          {/* FIXME2: Transform a Fortune-item div into separate React component: FortuneItem */}
          {this.props.fortunes.map((fortune, idx) => (
            <div className="Fortune-item" key={idx}>
              <div className="Fortune-item__msg">
                {fortune}
              </div>
              <div className="Fortune-item__btns">
                {/* FIXME3: Make Renew button functional */}
                <button className="btn">Renew</button>

                {/* FIXME4: Make Highlight button functional */}
                <button className="btn">Highlight</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Fortunes;
