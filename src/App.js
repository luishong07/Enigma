// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import LampBoard from './LampBoard'
import PlugBoard from './PlugBoard'
import SettingsBoard from './SettingsBoard'
import OutputBoard from './OutputBoard'
// import {rotorI} from './Rotors'

// import {rotorII} from './Rotors'
// import {rotorIII} from './Rotors'
// import {rotorIV} from './Rotors'
// import {reflector} from './Rotors'
// import {reverseIV} from './Rotors'
// import {reverseIII} from './Rotors'
// import {reverseII} from './Rotors'
// import {reverseI} from './Rotors'
// import {testR} from './Rotors'
import {Rotors} from './Rotors'


import MessageBoard from './MessageBoard';






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



  // enigma =(e)=>{
  //   //this.state.alphabet[this.state.rotorIV[this.state.alphabet.indexOf(e.key.toUpperCase())]]
  //   let input = this.state.alphabet.indexOf(e.key.toUpperCase())
  //   // console.log(input,e.key.toUpperCase())
  //   let put1 = rotorIV[input]
  //   // console.log(this.state.alphabet[put1])

  // }

  glow = (e) =>{
    // console.log(e)
    if(this.state.alphabet.includes(e.key.toUpperCase()) ){
   
    let test = document.getElementById(e.key.toUpperCase())
    test.setAttribute("class", "key letter hover");
    // setTimeout(()=>test.setAttribute("class", "key letter"), 1000)
    
    }
  }

  dim = (e) => {
   
    let test = document.getElementById(e.key.toUpperCase())
    test.setAttribute("class", "key letter")

  }

  test = () =>{

  }

  // if(this.state.r>25){await this.setState({r:0})}
  //   if(this.state.m>25){ await this.setState({m:0})}
  //   if(this.state.l>25){ await this.setState({l:0})}


  seconds =  async () =>{
     await this.setState({///this always happens when function is called. Right rotor always moves with every keypress
      r:this.state.r+1
    })
      if(this.state.r>25){await this.setState({r:0})}

    // console.log(this.state.r+1)

  }

  minutes = async ()=>{
     await this.setState({///this always happens when function is called. Right rotor always moves with every keypress
      m:this.state.m+1
    })
        if(this.state.m>25){ await this.setState({m:0})}

  }

  hours = async () =>{
    await this.setState({///this always happens when function is called. Right rotor always moves with every keypress
      l:this.state.l+1
    })
        if(this.state.l>25){ await this.setState({l:0})}

  }


  // test = ()=>{
  //   let p1 = document.getElementById('p1').value//returns "III"
  //   console.log(p1)/// logs "III"
  //   // console.log(rotorIII) ///logs [....] some array
  //   console.log(Rotors[`rotor${p1}`])
  //   console.log(Rotors[`reverse${p1}`])

  //   // let meh = rotors[`rotor${p1}`] //trying to set meh to that array with interpolation
  //   // console.log(meh)///trying to log that array
  // }



  // test = async () =>{
  //   console.log(this.state.l+1,this.state.m+1,this.state.r+1,"before conditionals")

  //   if(this.state.r===25){//if right rotor makes full cycle 
  //     await this.setState({
  //       m:this.state.m+1///make middle rotor take one step
  //     })
  //     // console.log(this.state.r)
  //     if(this.state.m===25){//if that step of middle rotor is the final step of a cycle
  //       await this.setState({
  //         l:this.state.l+1,//make the left rotor take one step
  //         m:this.state.m=0
  //       })
  //     }
  //    }

  //   else{
  //     if(this.state.m===25){
  //       await this.setState({
  //         m:this.state.m+1,
  //         l:this.state.l+1
  //       })
  //     }
  //   }

  //   await this.setState({///this always happens when function is called. Right rotor always moves with every keypress
  //     r:this.state.r+1
  //   })
  //   // console.log(this.state.r,"plus ultra")

  //   if(this.state.r>25){await this.setState({r:0})}
  //   if(this.state.m>25){ await this.setState({m:0})}
  //   if(this.state.l>25){ await this.setState({l:0})}

  //   console.log(this.state.l+1,this.state.m+1,this.state.r+1,"after conditionals")

  //   // await this.setState({///this always happens when function is called. Right rotor always moves with every keypress
  //   //   r:this.state.r+1
  //   // })
  //   // // console.log(this.state.r+1)
  //   let bleh =rotorI[0+this.state.r]
  //   console.log(this.state.alphabet[bleh])

  // }

    clock = async (e)=>{///function to rotate element in an array remove first and push at end of array ||WORKS!!!!
      e.persist()
      let p1 = document.getElementById('p1').value
      let p2 = document.getElementById('p2').value
      let p3 = document.getElementById('p3').value
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
    

    if(this.state.r===25){//if right rotor makes full cycle 
      await this.setState({
        m:this.state.m+1///make middle rotor take one step
      })
      // console.log(this.state.r)
      if(this.state.m===25){//if that step of middle rotor is the final step of a cycle
        await this.setState({
          l:this.state.l+1,//make the left rotor take one step
          m:this.state.m=0
        })
      }
     }

    else{
      if(this.state.m===25){
        await this.setState({
          m:this.state.m+1,
          l:this.state.l+1
        })
      }
    }

    await this.setState({///this always happens when function is called. Right rotor always moves with every keypress
      r:this.state.r+1
    })
    // console.log(this.state.r,"plus ultra")

    if(this.state.r>25){await this.setState({r:0})}
    if(this.state.m>25){ await this.setState({m:0})}
    if(this.state.l>25){ await this.setState({l:0})}
    console.log(this.state.l,this.state.m,this.state.r)
    // console.log(rotorII[0+this.state.r])
    // let t =e.currentTarget
    // console.log('r=',this.state.r)
    // console.log(Rotors)
    /////////////////////////////////////////////ENCRYPTION STARTS HERE///////////////////////////////////////////////////////////////
    let letter_pressed =this.state.alphabet.indexOf(e.key.toUpperCase())
    let I_to_r = this.state.r
    let input = letter_pressed+I_to_r

    if(input>25){
      input-=26
    }
    else if(input<0){
      input+=26
    }
    else{
      input=input
    }
    console.log(input)
    console.log(Rotors[`rotor${p1}`])
    let p1_out = Rotors[`rotor${p1}`][input]////////////////////////
    let r_to_m = this.state.m-this.state.r
    let p2_in = p1_out + r_to_m
    console.log(this.state.alphabet[p1_out])

    if(p2_in>25){
      p2_in-=26
    }
    else if(p2_in<0){
      p2_in+=26
    }
    else{
      p2_in=p2_in
    }

    let p2_out =Rotors[`rotor${p2}`][p2_in]////////////////////////
    let m_to_l = this.state.l-this.state.m
    let p3_in = p2_out+m_to_l

    console.log(this.state.alphabet[p2_out])

    if(p3_in>25){
      p3_in-=26
    }
    else if(p3_in<0){
      p3_in+=26
    }
    else{
      p3_in=p3_in
    }

    let p3_out = Rotors[`rotor${p3}`][p3_in]////////////////
    let l_to_R = -this.state.l
    let ref_in = p3_out+l_to_R
    console.log(this.state.alphabet[p3_out])

    if(ref_in >25){
      ref_in-=26
    }
    else if(ref_in<0){
      ref_in+=26
    }
    else{
      ref_in=ref_in
    }
    let R_to_l = this.state.l
    let ref_out = Rotors["reflector"][ref_in] //////////////////
    let rev_p3_in = ref_out+R_to_l

    if(rev_p3_in>25){
      rev_p3_in-=26
    }
    else if(rev_p3_in<0){
      rev_p3_in+=26
    }
    else{
      rev_p3_in=rev_p3_in
    }
    console.log(this.state.alphabet[rev_p3_in])


    let l_to_m = this.state.m-this.state.l
    let rev_p3_out= Rotors[`reverse${p3}`][rev_p3_in]////////////////////////
    let rev_p2_in= rev_p3_out+l_to_m

    if(rev_p2_in>25){
      rev_p2_in-=26
    }
    else if(rev_p2_in<0){
      rev_p2_in+=26
    }
    else{
      rev_p2_in=rev_p2_in
    }
    console.log(this.state.alphabet[rev_p2_in])

    let m_to_r = this.state.r-this.state.m
    let rev_p2_out = Rotors[`reverse${p2}`][rev_p2_in]//////////////
    let rev_p1_in = rev_p2_out+m_to_r
    
    if(rev_p1_in>25){
      rev_p1_in-=26
    }
    else if(rev_p1_in<0){
      rev_p1_in+=26
    }
    else{
      rev_p1_in=rev_p1_in
    }
    // console.log(rev_p1_in,"this")
    console.log(this.state.alphabet[rev_p1_in])


    let r_to_I = -this.state.r
    let rev_p1_out =Rotors[`reverse${p1}`][rev_p1_in]
    let out = rev_p1_out +r_to_I

    if(out>25){
      out-=26
    }

    else if(out<0){
      out+=26
    }
    else {
      out = out
    }
    console.log(out)
    console.log(this.state.alphabet[out])
    this.setState({
      cipher:this.state.cipher+this.state.alphabet[out]
    })

   
  }
  
  
  

  // show = (e) =>{
  //   console.log(e.key)
  //   this.setState({
  //     message: this.state.message+this.state.alphabet[this.state.rotorIV[this.state.alphabet.indexOf(e.key.toUpperCase())]]
  //   })
  // }
//this.state.rotorIV[this.state.alphabet.indexOf(e.key)]

plug =(e) =>{
  let p1 = e.target.value.toUpperCase()

  let p2 = e.target.previousSibling.innerText
let x = e.target
 let t = document.getElementsByClassName(p1)[0].nextSibling
 t.value = p2
 x.value =e.target.value.toUpperCase()
}



  render(){
        // console.log(this.state.l,this.state.m, this.state.r)

    return(
      <div  >
     
        <SettingsBoard r={this.state.r} m={this.state.m} l ={this.state.l} seconds={this.seconds} minutes={this.minutes} hours={this.hours}/>

        <LampBoard letter={this.state.pressedLetter} alphabet={this.state.alphabet} />

        <PlugBoard plug={this.plug}/>       

        <OutputBoard glow={this.glow} dim={this.dim} cipher={this.state.cipher} clock={this.clock} r={this.state.r} m={this.state.m}
        l={this.state.l} test={this.test} />

        <MessageBoard />

      </div>
    )


    
  }

}

export default App;
