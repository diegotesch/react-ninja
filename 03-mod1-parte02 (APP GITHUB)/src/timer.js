'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    console.log('constructor timer')
    super()
    this.state = {
      time: 0
    }
    this.timer = null
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('shouldComponentUpdate', this.state, nextState)
    // console.log('shouldComponentUpdate timer', this.props, nextProps)
    // return this.state.time !== nextState.time
    return this.props.time !== nextProps.time
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer', this.props, nextProps)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate timer', this.props, prevProps)
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount timer')
    clearInterval(this.timer)
  }

  render () {
    console.log('render timer')
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
