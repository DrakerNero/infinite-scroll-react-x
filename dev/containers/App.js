import React, { Component } from 'react'
import InFiniteScrollReactX from '../../src'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div 
          id="main"
          style={{
            height: '500px',
            overflowY: 'scroll',
          }}
        >
          <div style={{ height: '2100px' }}>
            f
          </div>
        </div>
        <div style={{
          height: '2100px',
        }}>
          f
        </div>
        <InFiniteScrollReactX />
      </div>
    );
  }
}

export default App
