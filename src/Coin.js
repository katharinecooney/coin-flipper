import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {
  render() {
    return(
      <img className="Coin" alt={`${this.props.side} coin`} src={`https://tinyurl.com/react-coin-${this.props.side}-jpg`}/>
      
    )
  }
}

export default Coin;