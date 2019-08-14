import React, { Component } from 'react'
import './LampBoard.css';


class LampBoard extends Component{

    
    
    render(){
        // console.log(this.props.letter.toUpperCase())
        return(
            <div >
                
                {/* <div className = "keyboard">
                    {this.props.alphabet.map(letter => {
                        return <span className="key" ref={letter}  >{letter}</span>
                    })} */}

                    <div class="keyboard">
                    
                    <div className="row1">
                        <div class="key letter" id="Q">
                            Q
                        </div>
                            <div class="key letter" id="W">
                            W
                        </div>
                            <div class="key letter" id="E">
                            E
                        </div>
                            <div class="key letter" id="R">
                            R
                        </div>
                            <div class="key letter" id="T">
                            T
                        </div>
                            <div class="key letter" id="Y">
                            Y
                        </div>
                            <div class="key letter" id="U">
                            U
                        </div>
                            <div class="key letter" id="I">
                            I
                        </div>
                            <div class="key letter" id="O">
                            O
                        </div>
                            <div class="key letter" id="P">
                            P
                        </div>
                    </div>
                    
                
                   
                            
                    <div className="row2">
                        <div class="key letter" id="A">
                            A
                        </div>
                            <div class="key letter" id="S">
                            S
                        </div>
                            <div class="key letter" id="D">
                            D
                        </div>
                            <div class="key letter" id="F">
                            F
                        </div>
                            <div class="key letter" id="G">
                            G
                        </div>
                            <div class="key letter" id="H">
                            H
                        </div>
                            <div class="key letter" id="J">
                            J
                        </div>
                            <div class="key letter" id="K">
                            K
                        </div>
                            <div class="key letter" id="L">
                            L
                        </div>
                    </div>

                    <div className="row3">
                        <div class="key letter" id="Z">
                            Z
                        </div>  
                            <div class="key letter" id="X">
                            X
                        </div>
                            <div class="key letter" id="C">
                            C
                        </div>
                            <div class="key letter" id="V">
                            V
                        </div><div class="key letter" id="B">
                            B
                        </div><div class="key letter" id="N">
                            N
                        </div><div class="key letter" id="M">
                            M
                        </div>
                    </div>

                    
                    </div>
            </div> 


        )
    }
}

export default LampBoard