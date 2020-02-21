'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Diego Tesch' />
        <label htmlFor='input'>Input</label>
        <input type='text' id='input' />
      </div>
    )
  }
})

export default App