'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial',
      checked: false
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
              this.setState({
                value: e.target.value
              })
            }}
          />

          <label>
            <input
              type='checkbox'
              value='meu-checkbox'
              // defaultChecked={false}
              checked={this.state.checked}
              onChange={e => {
                this.setState({
                  checked: e.target.checked
                })
              }}
            />
            Checkbox
          </label>

          <input
            type='radio'
            name='rd'
            defaultChecked={true}
          /> Radio 1
          <input
            type='radio'
            name='rd'
          /> Radio 2
        </form>
      </div>
    )
  }
}

export default App
