'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastname: {
        first: 'Sem',
        second: 'Sobrenome'
      }
    }
  },
  render: function () {
    return (
      <h1>Olá {this.props.name + ' ' + this.props.lastname.first + this.props.lastname.second}</h1>
    )
  }
})

export default Title
