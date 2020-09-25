import React, { Component } from 'react'
import './PlugBoard.css'

class PlugBoard extends Component{

    complete = () =>{


        let plugs = document.getElementsByTagName("input")
        // console.log(plugs)
        let arr_plugs = [...plugs]
        let self_plugs =  arr_plugs.map(p =>   {
            if(p.value===""){
            p.value = p.previousElementSibling.innerHTML
            }
        })
        // console.log(arr_plugs)
        arr_plugs.forEach(p => {
            p.disabled = true
        });
    }
    

    render(){
        // console.log(this.props.plug)
        return( 
            
        <div align="center">
            
            <div className="pboard" align="center">

                <div className="plugpair" >
                    <div className="A">
                        A
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div className="plugpair" >
                    <div className="B">
                        B
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="C">
                        C
                    </div>
                    <input className='plugin' size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="D">
                        D
                    </div>
                    <input className='plugin' size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="E">
                        E
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="F">
                        F
                    </div>
                    <input className='plugin' size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="G">
                        G
                    </div>
                    <input className='plugin' size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="H">
                        H
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="I">
                        I
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="J">
                        J
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="K">
                        K
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="L">
                        L
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div className="plugpair" >
                    <div className="M">
                        M
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="N">
                        N
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="O">
                        O
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="P">
                        P
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="Q">
                        Q
                    </div>
                    <input className='plugin'  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

               

                <div className="plugpair" >
                    <div className="R"> 
                        R
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="S">
                        S
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div className="plugpair" >
                    <div className="T">
                        T
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="U">
                        U
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="V">
                        V
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div >

                <div className="plugpair" >
                    <div className="W">
                        W
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div className="plugpair" >
                    <div className="X">
                        X
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="Y">
                        Y
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div className="plugpair" >
                    <div className="Z">
                        Z
                    </div>
                    <input className='plugin' size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

            </div>
            <button className="button" onClick={this.complete}>Pair</button>
        </div>
        )
    }
}
export default PlugBoard