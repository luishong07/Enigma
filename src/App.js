// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import LampBoard from './LampBoard'
import PlugBoard from './PlugBoard'
import SettingsBoard from './SettingsBoard'
import OutputBoard from './OutputBoard'
import {Rotors} from './Rotors'
import MessageBoard from './MessageBoard';






class App extends Component{

  state={
    r:0,//angular position of right rotor...
    m:0,//angular position of middle rotor
    l:0,//angular position of left rotor
    test:[],
    alphabet:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    pressedLetter:"",
    cipher:"",
    emergency:'',
    finalLetter:''
  }//end of state


  // test = ()=>{
  //   return "a"
  // }
  

  glow =  async (e) =>{
    if(this.state.alphabet.includes(e.key.toUpperCase()) ){
      let newLetter = await this.clock(e)
      this.setState({
        finalLetter:newLetter
      })
      let test = document.getElementById(newLetter)
      test.setAttribute("class", "key letter hover");
    
    }
    else{
      console.log("not a letter")
      return
    }
  }

  dim =  (e) => {
    if(this.state.alphabet.includes(e.key.toUpperCase())){
      let letterToTurnOff = this.state.finalLetter
      let test = document.getElementById(letterToTurnOff)
      test.setAttribute("class", "key letter")
      // console.log(this.state.finalLetter,"YOHOOHOHOH")
    }
    else{
      console.log("not a letter")
      return
    }
    

  }

  

  

  // if(this.state.r>25){await this.setState({r:0})}
  //   if(this.state.m>25){ await this.setState({m:0})}
  //   if(this.state.l>25){ await this.setState({l:0})}


  seconds =  async () =>{
     await this.setState({///this always happens when function is called. Right rotor always moves with every keypress
      r:this.state.r+1
    })
      if(this.state.r>25){await this.setState({r:0})}

    console.log(this.state.r,"seconds")

  }

  antiSeconds = async () => {//idea... set counter to 26 and start substracting with each keypress

    await this.setState({
      r:this.state.r-1
    })
    if(this.state.r<0){await this.setState({r:25})}
    
    console.log(this.state.r,"antiseconds")
    
  }

  minutes = async ()=>{
     await this.setState({
      m:this.state.m+1
    })
        if(this.state.m>25){ await this.setState({m:0})}

  }

  antiMinutes = async () => {
    console.log('antiminutes')
  }

  hours = async () =>{
    await this.setState({
      l:this.state.l+1
    })
        if(this.state.l>25){ await this.setState({l:0})}

  }

  antiHours = async () => {
    console.log("antihours")
  }


  
  clock = async (e)=>{///function to rotate element in an array remove first and push at end of array ||WORKS!!!!
      e.persist()
      let p1 = document.getElementById('p1').value
      let p2 = document.getElementById('p2').value
      let p3 = document.getElementById('p3').value
    
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

    if(this.state.r>25){await this.setState({r:0})}
    if(this.state.m>25){ await this.setState({m:0})}
    if(this.state.l>25){ await this.setState({l:0})}
    
    console.log(this.state.l,this.state.m,this.state.r)
   
    /////////////////////////////////////////////ENCRYPTION STARTS HERE///////////////////////////////////////////////////////////////

    let inputs = document.getElementsByTagName('input')
    // console.log(inputs)
    let arr_plugs = [...inputs]
    console.log(arr_plugs)
    // console.log(e.key)
    let s_plug =arr_plugs.find(p =>{
     return p.value===e.key.toUpperCase()
    })
    let into_Rotors = s_plug.previousElementSibling.innerHTML
    console.log(into_Rotors)


    console.log(e.key.toUpperCase(),"BEFORE SWAP , IN")


    console.log(into_Rotors,"AFTER SWAP , OUT")

    let letter_pressed =this.state.alphabet.indexOf(into_Rotors)
    let I_to_r = this.state.r
    console.log(I_to_r,"I to r")
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
    
    console.log(p1)
    console.log("HERE",`rotor${p1}`)

    

    let p1_out = Rotors[`rotor${p1}`][input]////////////////////////
    let r_to_m = this.state.m-this.state.r
    console.log(r_to_m ,"r to m")
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
    console.log(p2_in)

    let p2_out =Rotors[`rotor${p2}`][p2_in]////////////////////////
    let m_to_l = this.state.l-this.state.m
    console.log(m_to_l ," m to l")
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
    console.log(p3_in)

    let p3_out = Rotors[`rotor${p3}`][p3_in]////////////////
    let l_to_R = -this.state.l
    console.log(l_to_R,' l to ref')
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
    console.log(ref_in)
    let R_to_l = this.state.l
    console.log(R_to_l,'ref to l')
    let ref_out = Rotors["reflector"][ref_in] //////////////////

    let rev_p3_in = ref_out+R_to_l
    console.log(this.state.alphabet[ref_out])
    // console.log(rev_p3_in)

    if(rev_p3_in>25){
      rev_p3_in-=26
    }
    else if(rev_p3_in<0){
      rev_p3_in+=26
    }
    else{
      rev_p3_in=rev_p3_in
    }
    console.log(rev_p3_in,"rev_p3_in")


    let l_to_m = this.state.m-this.state.l
    console.log(l_to_m,"l to m")
    let rev_p3_out= Rotors[`reverse${p3}`][rev_p3_in]////////////////////////
    console.log(Rotors[`reverse${p3}`])
    let rev_p2_in= rev_p3_out+l_to_m
    console.log(rev_p2_in,rev_p3_out,"here")
    console.log(rev_p2_in,"here")
    console.log(this.state.alphabet[rev_p2_in],"problem")

    if(rev_p2_in>25){
      rev_p2_in-=26
    }
    else if(rev_p2_in<0){
      rev_p2_in+=26
    }
    else{
      rev_p2_in=rev_p2_in
    }
    console.log(rev_p2_in,"what")

    let m_to_r = this.state.r-this.state.m
    console.log(m_to_r,"m to r")
    let rev_p2_out = Rotors[`reverse${p2}`][rev_p2_in]//////////////
    let rev_p1_in = rev_p2_out+m_to_r
    
    console.log(this.state.alphabet[rev_p2_out])
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
    console.log(rev_p1_in)


    let r_to_I = -this.state.r
    console.log(r_to_I,"r to input")
    let rev_p1_out =Rotors[`reverse${p1}`][rev_p1_in]
    let out = rev_p1_out +r_to_I

    console.log(this.state.alphabet[rev_p1_out])
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
    console.log(this.state.alphabet[out],"BEFORE SWAP .OUT")

    let out_rotor = document.getElementsByClassName(this.state.alphabet[out])
  
    console.log( out_rotor[0].innerHTML)

    console.log(out_rotor[0],"HERE")

    let letter_out =out_rotor[0].nextElementSibling.value

    console.log(letter_out,"AFTER SWAP, OUT")



  this.setState({
    cipher:this.state.cipher+letter_out
  })

   return letter_out
}
 
plug =(e) =>{
  let p1 = e.target.value.toUpperCase()

  let p2 = e.target.previousSibling.innerText
  let x = e.target
  let t = document.getElementsByClassName(p1)[0].nextSibling
  t.value = p2
  x.value =e.target.value.toUpperCase()
}


  render(){
        console.log(this.state.l,this.state.m, this.state.r)

    return(
      <div  >
     
        <SettingsBoard r={this.state.r} 
                       m={this.state.m}
                       l ={this.state.l} 
                       seconds={this.seconds} 
                       minutes={this.minutes} 
                       hours={this.hours}
                       antiHours={this.antiHours}
                       antiMinutes={this.antiMinutes}
                       antiSeconds={this.antiSeconds}  
                       />

        <LampBoard letter={this.state.pressedLetter} 
                   alphabet={this.state.alphabet} />

        <PlugBoard plug={this.plug}/>       

        <OutputBoard glow={this.glow} 
                     dim={this.dim} 
                     cipher={this.state.cipher} 
                     clock={this.clock} 
                     r={this.state.r} 
                     m={this.state.m}
                     l={this.state.l} />

        <MessageBoard />

      </div>
    )


    
  }

}

export default App;
