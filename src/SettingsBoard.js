import React, { Component } from 'react'
import './SettingsBoard.css'


class SettingsBoard extends Component{

    alert = () =>{
        let p1 = document.getElementById('p1').value
        let p2 = document.getElementById('p2').value
        let p3 = document.getElementById('p3').value

        console.log(p1,p2,p3)
        if(p1===p2||p2===p3||p3===p1){
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
                    <div className='setting'>
                        <select  className="menu" id="p3" onChange={this.alert}>
                            <option >I</option>
                            <option >II</option>
                            <option >III</option>
                            <option>IV</option>
                            <option >V</option>
                        </select>
                        <br></br>
                        <button className="dbutton">∆</button>
                        <div className="index">{this.props.l+1}</div>
                        <button className="dbutton" onClick={this.props.hours}>∇</button>
                    </div>

                    <div className='setting'>
                        <select  className="menu" id="p2" onChange={this.alert}>
                            
                            <option >II</option>
                            <option>III</option>
                            <option >IV</option>
                            <option>V</option>
                            <option>I</option>
                        </select>
                        <br></br>
                        <button className="dbutton">∆</button>
                        <div  className="index" >{this.props.m+1}</div>
                        <button className="dbutton" onClick={this.props.minutes}>∇</button>
                    </div>

                    <div className='setting'>
                        <select  className="menu" id="p1" onChange={this.alert}>
                            
                            
                            <option >III</option>
                            <option>IV</option>
                            <option>V</option>
                            <option>I</option>
                            <option>II</option>
                        </select>
                        <br></br>
                        <button className="dbutton">∆</button>
                        <div className="index">{this.props.r+1}</div>
                        <button className="dbutton" onClick={this.props.seconds}>∇</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default SettingsBoard;