import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '../actions'


class Counter extends Component {
  incrementIfOdd = () => {
    if (this.props.count % 2 !== 0) {
      this.props.increment()
    }
  }

  incrementAsync = () => {
    setTimeout(() => this.props.increment(), 1000)
  }

  render() {
    return (
      <p>
        Clicked: {this.props.count} times
        <button type='button' onClick={() => this.props.increment()}>
          +
        </button>
        <button type='button' onClick={() => this.props.decrement()}>
          -
        </button>
        <button type='button' onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        <button type='button' onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

const mapStateToProps = state => ({
  count: state,
})

export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter)
