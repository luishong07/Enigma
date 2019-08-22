import React, { Component } from 'react'
import './PlugBoard.css'

class PlugBoard extends Component{
    

    render(){
        // console.log(this.props.plug)
        return( 
        <div align="center">
            <div class="pboard" align="center">

                <div class="plugpair" >
                    <div className="A">
                        A
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div class="plugpair" >
                    <div className="B">
                        B
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="C">
                        C
                    </div>
                    <input  size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="D">
                        D
                    </div>
                    <input  size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="E">
                        E
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="F">
                        F
                    </div>
                    <input  size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="G">
                        G
                    </div>
                    <input  size="1" maxLength="1"onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="H">
                        H
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="I">
                        I
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="J">
                        J
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="K">
                        K
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="L">
                        L
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div class="plugpair" >
                    <div className="M">
                        M
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="N">
                        N
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="O">
                        O
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="P">
                        P
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="Q">
                        Q
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

               

                <div class="plugpair" >
                    <div className="R"> 
                        R
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="S">
                        S
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div class="plugpair" >
                    <div className="T">
                        T
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="U">
                        U
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="V">
                        V
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div >

                <div class="plugpair" >
                    <div className="W">
                        W
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}} />
                </div>

                <div class="plugpair" >
                    <div className="X">
                        X
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="Y">
                        Y
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

                <div class="plugpair" >
                    <div className="Z">
                        Z
                    </div>
                    <input  size="1" maxLength="1" onChange={(e)=>{this.props.plug(e)}}/>
                </div>

            </div>
        </div>
        )
    }
}
export default PlugBoard