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
        <form
          onSubmit={e => {
            e.preventDefault()
            console.log('event', e)
          }}
          onChange={e => {
            console.log(`${e.target.name} = ${e.target.value}`)
          }}
        >
          <input
            type='text'
            name='nome'
          />
          <input
            type='email'
            name='email'
          />
          <input
            type='checkbox'
            onClick={e => {
              console.log(e.target.value)
            }}
          />

          <button type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
}

export default App
