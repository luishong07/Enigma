// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import LampBoard from './LampBoard'
import PlugBoard from './PlugBoard'
import SettingsBoard from './SettingsBoard'
import OutputBoard from './OutputBoard'
import {rotorII} from './Rotors'
import {rotorIII} from './Rotors'
import {rotorIV} from './Rotors'
import {reflector} from './Rotors'
import {rerverseIV} from './Rotors'
import {reverseIII} from './Rotors'
import {reverseII} from './Rotors'






class App extends Component{

  state={
    r:0,//angular position of right rotor...no, not that angular
    m:0,//angular position of middle rotor
    l:0,//angular position of left rotor
    test:[],
    alphabet:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    pressedLetter:"",
    cipher:""
    


  }//end of state


  glow = (e) =>{
    // console.log(e.key,"down",typeof e.key) 
    if(this.state.alphabet.includes(e.key.toUpperCase()) ){
    console.log(e.key.toUpperCase())

    this.setState({
      cipher:this.state.cipher+e.key.toUpperCase()
    })
    let test = document.getElementById(e.key.toUpperCase())
    test.setAttribute("class", "key letter hover");
    // setTimeout(()=>test.setAttribute("class", "key letter"), 1000)
    // console.log(test)
    // 
    }
  }

  dim = (e) => {
    // console.log(e.key,"up")

    let test = document.getElementById(e.key.toUpperCase())
    test.setAttribute("class", "key letter")

  }

  clock = (e)=>{///function to rotate element in an array remove first and push at end of array ||WORKS!!!!
    //just test using alphabet array //use rotors arrays in practice
    // // console.log(this.state.alphabet)

    // let f = this.state.alphabet.shift()
    // // console.log(f)
    // // console.log(this.state.alphabet)
    // let na = this.state.alphabet
    // na.push(f)
    // this.setState({
    //   alphabet:na
    // })
    // // console.log(this.state.alphabet)

    ///////////////////////////////////////////////
    // console.log(this.state.i)

    // if(this.state.r===25){this.state.r=0}
    

    if(this.state.r===25){//if right rotor makes full cycle 
      this.setState({
        m:this.state.m+1///make middle rotor take one step
        // r:this.state.r=0
      })
      // console.log(this.state.r)
      if(this.state.m===25){//if that step of middle rotor is the final step of a cycle
        this.setState({
          l:this.state.l+1//make the left rotor take one step
          // m:this.state.m=0
        })
      }
     }

    else{
      if(this.state.m===25){
        this.setState({
          m:this.state.m+1,
          l:this.state.l+1
        })
      }
    }

    this.setState({///this always happens when function is called. Right rotor always moves with every keypress
      r:this.state.r+1
    })
    if(this.state.r===25){this.setState({r:0})}

    if(this.state.m===25){this.setState({m:0})}
    if(this.state.l===25){this.setState({l:0})}


    

  }

  

  // show = (e) =>{
  //   console.log(e.key)
  //   this.setState({
  //     message: this.state.message+this.state.alphabet[this.state.rotorIV[this.state.alphabet.indexOf(e.key.toUpperCase())]]
  //   })
  // }
//this.state.rotorIV[this.state.alphabet.indexOf(e.key)]

plug =(e) =>{
  // console.log(e.target.previousSibling.innerText)
  let p1 = e.target.value
  let p2 = e.target.previousSibling.innerText

  // console.log(p1,"INPUT")
 let t = document.getElementsByClassName(p1)[0].nextSibling
 t.value = p2
  // console.log(t)
}

  render(){
    // console.log(rotorII)
    console.log(this.state.l,this.state.m, this.state.r)
    // console.log(this.state.alphabet)
    // show={this.show} c={this.state.message}
    return(
      <div  >
     
        <SettingsBoard/>

        <LampBoard letter={this.state.pressedLetter} alphabet={this.state.alphabet} />

        <PlugBoard plug={this.plug}/>       

        <OutputBoard glow={this.glow} dim={this.dim} cipher={this.state.cipher} clock={this.clock}/>

      </div>
    )


    
  }

}

export default App;
