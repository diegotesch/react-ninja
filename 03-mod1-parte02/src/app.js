'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial'
    }
  }

  render () {
    return (
      <div>
        <form>
          <input
            type='text'
            // defaultValue='Valor inicial'
            value={this.state.value}
            onChange={(e) => {
              console.log(e.target)
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
