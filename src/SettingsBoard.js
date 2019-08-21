import React, { Component } from 'react'
import './SettingsBoard.css'


class SettingsBoard extends Component{

    
    render(){
        // console.log(this.props.l,this.props.m,this.props.r)
        return(
            <div align="center">
                SettingsBoard
                <div >
                    <div class='setting'>
                        <select id="p3">
                            <option>I</option>
                            <option >II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </select>
                        <br></br>
                        <button>∆</button>
                        <div>{this.props.l+1}</div>
                        <button onClick={this.props.hours}>∇</button>
                    </div>

                    <div class='setting'>
                        <select id="p2">
                            <option>I</option>
                            <option selected="selected">II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </select>
                        <br></br>
                        <button>∆</button>
                        <div>{this.props.m+1}</div>
                        <button onClick={this.props.minutes}>∇</button>
                    </div>

                    <div class='setting'>
                        <select id="p1">
                            <option>I</option>
                            <option>II</option>
                            <option selected="selected">III</option>
                            <option>IV</option>
                            <option>V</option>
                        </select>
                        <br></br>
                        <button>∆</button>
                        <div>{this.props.r+1}</div>
                        <button onClick={this.props.seconds}>∇</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default SettingsBoard;