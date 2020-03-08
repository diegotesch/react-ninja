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
          <select
            // defaultValue='2'
            multiple
            value={['1', '3']}
            // value={this.state.value}
            onChange={e => {
              this.setState({
                value: e.target.value
              })
            }}
          >
            <option value='1'>Opt 1</option>
            <option value='2'>Opt 2</option>
            <option value='3'>Opt 3</option>
          </select>
        </form>
      </div>
    )
  }
}

export default App
