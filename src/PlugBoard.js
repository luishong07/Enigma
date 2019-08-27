import React, { Component } from 'react'
import './PlugBoard.css'

class PlugBoard extends Component{

    complete = () =>{


        let plugs = document.getElementsByTagName("input")
       let arr_plugs = [...plugs]
       let self_plugs =  arr_plugs.map(p =>   {
           if(p.value==""){
           p.value = p.previousElementSibling.innerHTML
           }
        })
        // console.log(arr_plugs)
    }
    

    render(){
        // console.log(this.props.plug)
        return( 
            
        <div align="center">
            
            <div class="pboard" align="center">

                <div class="plugpair" >
                    <div className="A">
                        A
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div class="plugpair" >
                    <div className="B">
                        B
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="C">
                        C
                    </div>
                    <input class='plugin' size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="D">
                        D
                    </div>
                    <input class='plugin' size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="E">
                        E
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="F">
                        F
                    </div>
                    <input class='plugin' size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="G">
                        G
                    </div>
                    <input class='plugin' size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="H">
                        H
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="I">
                        I
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="J">
                        J
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="K">
                        K
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="L">
                        L
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div class="plugpair" >
                    <div className="M">
                        M
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="N">
                        N
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="O">
                        O
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="P">
                        P
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="Q">
                        Q
                    </div>
                    <input class='plugin'  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

               

                <div class="plugpair" >
                    <div className="R"> 
                        R
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="S">
                        S
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div class="plugpair" >
                    <div className="T">
                        T
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="U">
                        U
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="V">
                        V
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div >

                <div class="plugpair" >
                    <div className="W">
                        W
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div class="plugpair" >
                    <div className="X">
                        X
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="Y">
                        Y
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="Z">
                        Z
                    </div>
                    <input class='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

            </div>
            <button class="button" onClick={this.complete}>Complete</button>
        </div>
        )
    }
}
export default PlugBoard