import React, { Component } from "react";
import CoinFlipper from './CoinFlipper'
import "./App.css";
import Coin from "./Coin";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CoinFlipper />
      </div>
    );
  }
}

export default App;
