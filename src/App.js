// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import LampBoard from './LampBoard'
import PlugBoard from './PlugBoard'
import SettingsBoard from './SettingsBoard'
import OutputBoard from './OutputBoard'

class App extends Component{

  state={
    alphabet:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    message:"",
    rotorIV:[
      4,
    18,
    14,

  21,
  15,
  25,
  
  9,
  0,
  24,

  16,
  20,
  8,

  17,
  7,
  23,

  11,
  13,
  5,

  19,
  6,
  10,

  3,
  2,
  12,
  
  22,
  1
]
  }

  show = (e) =>{
    console.log(e.key)
    this.setState({
      message: this.state.message+this.state.alphabet[this.state.rotorIV[this.state.alphabet.indexOf(e.key.toUpperCase())]]
    })
}
//this.state.rotorIV[this.state.alphabet.indexOf(e.key)]

  render(){
    return(
      <div  >
     
         
        <LampBoard/>
        <PlugBoard/>
        <SettingsBoard/>
        <OutputBoard show={this.show} c={this.state.message}/>
      </div>
    )


    
  }

}

export default App;
