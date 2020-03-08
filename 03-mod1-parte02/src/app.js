'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2',
      checked: false
    }
  }

  render () {
    return (
      <div>
        <form>
          <textarea
            // defaultValue='textarea value'
            value={this.state.value}
            onChange={e => {
              this.setState({
                value: e.target.value
              })
            }}
          />
        </form>
      </div>
    )
  }
}

export default App
