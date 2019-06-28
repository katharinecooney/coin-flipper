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
    let chosenSide = this.props.sides[randomIndex];
    console.log(chosenSide);
    this.setState({
      currentSide: chosenSide
    });
   
    if(chosenSide === 'heads') {
      this.setState({
        headsCounter: this.state.headsCounter + 1
      })
    } else {
      this.setState({
        tailsCounter: this.state.tailsCounter + 1
      })
    }

    this.setState({flipCounter: this.state.flipCounter + 1})
  }

  render(){
    return(
      <div className="CoinFlipper">
        <h1>Let's flip a coin!</h1>
        <Coin side={this.state.currentSide}/>
        <button onClick={this.handleFlip}>Flip</button>
        <p>Out of {this.state.flipCounter} flips, there have been {this.state.headsCounter} heads and {this.state.tailsCounter} tails.</p>
      </div>
    )
  }
}

export default CoinFlipper;