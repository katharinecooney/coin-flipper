import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlipper.css'

class CoinFlipper extends Component {
  static defaultProps = {
    sides: ['heads', 'tails']
  }

  constructor(props){
    super(props);
    this.state = {
      flipCounter: 0,
      headsCounter: 0,
      tailsCounter: 0,
      currentSide: 'heads'
    }
  }

  handleFlip = () => {
    let randomIndex = Math.floor(Math.random() * this.props.sides.length);
    this.setState({currentSide: this.props.sides[randomIndex]});
  }

  render(){
    return(
      <div className="CoinFlipper">
        <Coin side={this.state.currentSide}/>
        <button onClick={this.handleFlip}>Flip</button>
      </div>
      
    )
  }
}

export default CoinFlipper;