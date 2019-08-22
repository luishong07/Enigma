import React, { Component } from 'react'
import './SettingsBoard.css'


class SettingsBoard extends Component{

    alert = () =>{
        let p1 = document.getElementById('p1').value
        let p2 = document.getElementById('p2').value
        let p3 = document.getElementById('p3').value

        console.log(p1,p2,p3)
        if(p1==p2||p2==p3||p3==p1){
            console.log("YOWZHAA")
           alert("YOWZHAA, Can't have repeated rotors")
        }
        

    }

    
    render(){
        // console.log(this.props.l,this.props.m,this.props.r)
        return(
            <div align="center">
               <h1>Enigma</h1>
              
                <div >
                    <div class='setting'>
                        <select class="menu" id="p3" onChange={this.alert}>
                            <option >I</option>
                            <option >II</option>
                            <option selected="selected">III</option>
                            <option>IV</option>
                            <option>V</option>
                        </select>
                        <br></br>
                        <button class="dbutton">∆</button>
                        <div class="index">{this.props.l+1}</div>
                        <button class="dbutton" onClick={this.props.hours}>∇</button>
                    </div>

                    <div class='setting'>
                        <select class="menu" id="p2" onChange={this.alert}>
                            <option>I</option>
                            <option selected="selected">II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </select>
                        <br></br>
                        <button class="dbutton">∆</button>
                        <div  class="index" >{this.props.m+1}</div>
                        <button class="dbutton" onClick={this.props.minutes}>∇</button>
                    </div>

                    <div class='setting'>
                        <select class="menu" id="p1" onChange={this.alert}>
                            <option>I</option>
                            <option>II</option>
                            <option >III</option>
                            <option>IV</option>
                            <option>V</option>
                        </select>
                        <br></br>
                        <button class="dbutton">∆</button>
                        <div class="index">{this.props.r+1}</div>
                        <button class="dbutton" onClick={this.props.seconds}>∇</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default SettingsBoard;