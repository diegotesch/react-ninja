'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={e => {
              this.setState({
                checked: !this.state.checked
              }, () => {
                // função de callback executada após a mudança de estado
                this.setState({
                  showContent: this.state.checked
                })
              })
            }}
          /> Mostrar Conteúdo
        </label>

        {this.state.showContent &&
          <div>
            Conteúdo
          </div>}
      </div>
    )
  }
}

export default App
